---
title: Superset
description: Guide for using Superset with QuestDB
---

[Apache Superset](https://superset.apache.org/) is a popular open-source
business intelligence web application that enables users to visualize and
explore data through customizable dashboards and reports.

QuestDB provides the [QuestDB
Connect](https://pypi.org/project/questdb-connect/) python module that
implements the SQLAlchemy and Superset engine, to integrate
Superset with QuestDB.

## Requirements

- Python from 3.9 to 3.11
- Psycopg2 for connectivity
- SQLAlchemy for ORM and easy interaction
- [Superset](https://superset.apache.org/docs/installation/installing-superset-from-scratch/)
  installation and initialization
- QuestDB 7.1.2 or later
- Docker

## Installing Apache Superset

Follow these steps to install Apache Superset:

1. Clone the [Apache Superset repo](https://github.com/apache/superset/)
2. Change your directory to `cd superset`
3. Create a file `docker/requirements-local.txt` (within the clone) with the content:

   ```txt
   questdb-connect==1.0.6
   ```
   
5. Edit file `pythonpath_dev/superset_config.py` to add your secret key at the top of the file after the imports:

   ```txt
   SECRET_KEY=<whatever text you want, or the text you used when you first run Apache Superset>
   ```

5. Pull the Apache Superset image:

   ```bash
   docker pull apache/superset:latest-dev
   ```

6. Run Apache Superset:

   ```bash
   docker-compose up
   ```

For more information, see [DEVELOPERS](https://github.com/questdb/questdb-connect/blob/main/DEVELOPERS.md).

## Connecting QuestDB

Once installed and initialized, Superset is accessible via `localhost:8088`.

From Superset UI, select Setting > Database Connections

Select `+Database` to add the following parameters:

- SUPPORTED DATABASES: Other
- DISPLAY NAME: QuestDB
- SQLALCHEMY URI: `questdb://admin:quest@host.docker.internal:8812/main`

Once connected, tables in QuestDB will be visible for creating Datasets in
Apache Superset.

## See also

- [QuestDB Connect GitHub repo](https://github.com/questdb/questdb-connect/)
- [QuestDB Connect Python module](https://pypi.org/project/questdb-connect/)
