---
title: Data deduplication
sidebar_label: Deduplication
description:
  What is built in storage deduplication and why it can be useful.
---

Starting QuestDB 7.2.3 there is an option to enable storage level data deduplication on a table.
Data deduplication works on all the data inserted into the table and replaces matching rows with the new versions.

## Configuration

Deduplication can be enabled or disabled at any time for individual tables using

- [CREATE TABLE](/docs/reference/sql/create-table/#deduplication) statment
- [ALTER TABLE ENABLE DEDUP](/docs/reference/sql/alter-table-enable-deduplication) statment
- [ALTER TABLE DISABLE DEDUP](/docs/reference/sql/alter-table-disable-deduplication) statment

:::note

Dedplication can only be enabled for [Write-Ahead Log (WAL)](/docs/concept/write-ahead-log) tables

:::

It is important to specify correctly the upsert keys for the deduplication.

## Deduplication UPSERT keys

_UPSERT_ is an abriviation for _UPDATE_ or _INSERT_ and it is a common database concept. It means that every the new row
_UPDATEs_ or replaces the existing row (or multiple rows in general case) when the matching criteria met, otherwise the new row
is _INSERTed_ into the table. In QuestDB deduplication the UPSERT matching critria is set by defining colunmn list in 
`UPSERT KEYS` clause in `CREATE` or `ALTER` table statement.

`UPSERT KEYS` can be changed at any time. It can contain 1 or more columns and it can include all the columns in the table.
 There are some limitation on the `UPSERT KEY` list

- The [Designated timestamp](/docs/concept/designated-timestamp) column must be included in in `UPSERT KEYS` list
- Columns of [STRING and BINARY](/docs/reference/datatypes) types cannot be used in `UPSERT KEYS` list

## Example

The easiest to explain the usage of `UPSERT KEYS` is by example.

```sql
CREATE TABLE TICKER_PRICE (
    ts TIMESTAMP,
    ticker SYMBOL,
    price double 
) TIMESTAMP(ts) PARTITION BY DAY WAL
DEDUP UPSERT KEYS(ts, ticker);
```

Here the deduplication keys are set to be column `ts` which is the designated timetamp and `ticker` column.
The intent is to have no more than one price point per ticker at any given time so that if the price/day combination is sent twice the last is price is saved. 

And the inserts 

```sql
INSERT INTO TICKER_PRICE VALUES ('2023-07-14', 'QQQ', 78.56); -- row 1
INSERT INTO TICKER_PRICE VALUES ('2023-07-14', 'QQQ', 78.34); -- row 2

INSERT INTO TICKER_PRICE VALUES ('2023-07-14', 'AAPL', 104.40); -- row 3
INSERT INTO TICKER_PRICE VALUES ('2023-07-14', 'AAPL', 105.18); -- row 4
```

Then the deduplication will overwrite row 1 by row 2 because the values of both deduplication keys have the same value, e.g.
`ts='2023-07-14'` and `ticker='QQQ'`. The same happens with the second pair of rows and the row 4 overwrites row 3.
As the result of these inserts the table will contain 2 rows only


```sql
SELECT * FROM TICKER_PRICE;
```

| ts         | ticker | price  |
| ---------- | ------ | ------ |
| 2023-07-14 | QQQ    | 78.34  |
| 2023-07-14 | AAPL   | 105.18 |

It does not matter if the inserts will be executed in 1 transaction/batch or as individual inserts, the result will be the same
as long as the order of the inserts is perserved.

It is possible to remove deduplication option with `DEDUP DISABLE` SQL

```sql
ALTER TABLE TICKER_PRICE DEDUP DISABLE
```

It makes the table to behave as usual, so that after running the insert statements

```sql
INSERT INTO TICKER_PRICE VALUES ('2023-07-14T', 'QQQ', 84.59); -- row 1
INSERT INTO TICKER_PRICE VALUES ('2023-07-14T', 'AAPL', 105.21); -- row 2
```

This adds 2 more rows in `TICKER_PRICE` table

```sql
SELECT * FROM TICKER_PRICE;
```

| ts         | ticker | price  |
| ---------- | ------ | ------ |
| 2023-07-14 | QQQ    | 78.34  |
| 2023-07-14 | QQQ    | 84.59  |
| 2023-07-14 | AAPL   | 105.18 |
| 2023-07-14 | AAPL   | 105.21 |

The deduplication can be enabled again at any point in time. 

```sql
ALTER TABLE TICKER_PRICE DEDUP ENABLE UPSERT KEYS(ts, ticker)
```

:::note

Enabling deduplication does not have any effect on the existing data and only applies to the newly inserted data.
This means that the table with deduplication enable can still conain duplicate data.

:::

After enabling the deduplication the number of rows does not change and there are 4 rows in the `TICKER_PRICE` table.
The new inserts from this point on are deduplicated

```sql
INSERT INTO TICKER_PRICE VALUES ('2023-07-15', 'QQQ', 98.02); -- row 1
INSERT INTO TICKER_PRICE VALUES ('2023-07-15', 'QQQ', 91.16); -- row 2
```

After these inserts all rows with `ts='2023-07-15T12:30:01.122'` and `ticker='QQQ'` are replaced first with row 1 and then with row 2 and the price is set to `91.16`.

```sql
SELECT * FROM TICKER_PRICE;
```

| ts         | ticker | price  |
| ---------- | ------ | ------ |
| 2023-07-14 | QQQ    | 91.16  |
| 2023-07-14 | QQQ    | 91.16  |
| 2023-07-14 | AAPL   | 105.18 |
| 2023-07-14 | AAPL   | 105.21 |

## Practical considerations

Deduplication in QuestDB gives an ability to make the table inserts [idempotent](https://en.wikipedia.org/wiki/Idempotence). 
The primary usage is to allow to re-send the data for a given time range without creating the duplicates.

This can be the case when there is a error in sending data for example by using [ILP](/docs/reference/api/ilp/overview) but there is no clear idication of how much of the data is already written.
With the deduplication enable it is safe to repeat sending from a fixed period of time in the past to resume the writing.

Enabling deduplication on a table has an impact on writing performance, especially when multiple UPSERT KEYS are configured.
Genearlly is it observed that if the data has mostly unique timestamps across all the rows the negative performance impact of deduplication is low.
On the contrary the most demanding data pattern is when there are a lot of rows with the same timestamp to be deduplicated on additional colums.

For example in the use cases where 10 millions of devices send the CPU metric every second at the second it is expensive to deduplicate the data on by the device id. 
And in the case where CPU metrics are sent at random and usually unique timestamp the deduplication cost is negligible.
