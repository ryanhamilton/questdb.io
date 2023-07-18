import React from "react"
import Layout from "../theme/Layout"
import { Section } from "../components/Section"

import seCss from "../css/section.module.css"
import clsx from "clsx"

import UseCaseCustomers, { Customer } from "../components/UseCaseQuotes"
import { Highlights } from "../modules/highlights"

import liCss from "../css/use-cases/list.module.css"
import ucCss from "../css/use-cases/use-case.module.css"
import prCss from "../css/property.module.css"

const List = ({
  items,
  itemClassName,
}: {
  items: string[]
  itemClassName: string
}) => (
  <ul className={clsx(liCss.list, ucCss.list)}>
    {items.map((text, index) => (
      <li key={index} className={itemClassName}>
        {text}
      </li>
    ))}
  </ul>
)

const Heading = () => (
  <Section center>
    <Section.Title level={1}>Use cases and industries</Section.Title>
    <Section.Subtitle center style={{ maxWidth: "800px" }}>
      QuestDB offers high throughput ingestion and real-time SQL queries for
      applications in a wide range of use cases and industries
    </Section.Subtitle>
  </Section>
)

const monitoringCustomers: Customer[] = [
  {
    key: "liveaction",
    quote:
      "QuestDB is used by LiveAction as a time series database for storing flow and encrypted traffic metadata analyzed by their real-time threat detection engine.",
    caseStudyLink: "/case-study/liveaction/",
    logoWidth: 120,
  },
  {
    key: "yahoo",
    quote:
      "See how Yahoo uses QuestDB to monitor and autoscale cloud clusters that serve a billion users",
    caseStudyLink: "/case-study/yahoo/",
    logoWidth: 100,
  },
  {
    key: "syndica",
    logoWidth: 100,
  },
  {
    key: "netapp",
    logoWidth: 100,
  },
  {
    key: "apacheNifi",
    logoWidth: 110,
    logoHeight: 35,
  },
  {
    key: "central-group",
  },
  {
    key: "prediko",
    logoWidth: 80,
  },
  {
    key: "synology",
    logoWidth: 100,
  },
]

const Monitoring = () => (
  <section className={seCss.section} id="monitoring-and-real-time-analytics">
    <div className={clsx(seCss["section--inner"], ucCss.section)}>
      <div className={ucCss["use-case__half"]}>
        <h2 className={clsx(seCss.section__title, ucCss["use-case__title"])}>
          Monitoring and Real-time analytics
        </h2>

        <List
          itemClassName={clsx(liCss.item, ucCss.listItem)}
          items={[
            "On the fly aggregations and downsampling for real-time dashboards",
            "DevOps monitoring and alerting",
            "Network traffic flow analysis and machine learning based threat detection",
            "In-product application analytics",
            "Real-time SQL queries computed on data streams",
          ]}
        />
      </div>

      <img
        src="/img/pages/use-cases/real-time-analytics-jumbo.svg"
        alt="An illustration of real-time analytics and monitoring"
        width="630"
        className={ucCss["use-case__image"]}
      />
    </div>

    <div className={clsx(seCss["section--inner"], ucCss.section)}>
      <div className={ucCss["use-case__industries"]}>
        <h4>Applicable industries</h4>
        <List
          itemClassName={clsx(prCss.property, ucCss["use-case__property"])}
          items={[
            "DevOps/Networks",
            "Blockchain / Web 3",
            "SaaS applications",
            "E-commerce",
            "Cyber security",
          ]}
        />
      </div>

      <UseCaseCustomers customers={monitoringCustomers} />
    </div>
  </section>
)

const marketDataCustomers: Customer[] = [
  {
    key: "aquis-exchange",
    logoWidth: 90,
    quote:
      "QuestDB is used by Aquis Exchange to store their infrastructure and business metrics in a single place and analyze them in real-time across multiple dimensions.",
    caseStudyLink: "/case-study/aquis/",
  },
  {
    key: "kepler",
    logoWidth: 120,
  },
  {
    key: "coinbase",
    logoWidth: 120,
  },
  {
    key: "okx",
    logoWidth: 60,
  },
]

const MarketData = () => (
  <section className={seCss.section} id="financial-market-data">
    <div className={clsx(seCss["section--inner"], ucCss.section)}>
      <img
        src="/img/pages/use-cases/financial-market-data-jumbo.svg"
        alt="An illustration of financial market data charts"
        width="565"
        className={ucCss["use-case__image"]}
      />
      <div className={ucCss["use-case__half"]}>
        <h2 className={clsx(seCss.section__title, ucCss["use-case__title"])}>
          Financial market data
        </h2>

        <List
          itemClassName={clsx(liCss.item, ucCss.listItem)}
          items={[
            "Real-time market data with dashboard integrations",
            "Fast aggregations for OHLC and candlestick charts",
            "Drill down large historical datasets to analyze the market",
            "Financial modelling with python and machine learning libraries",
            "Match and correlate multiple feeds with fuzzy timestamp JOINs",
          ]}
        />
      </div>
    </div>

    <div className={clsx(seCss["section--inner"], ucCss.section)}>
      <div className={ucCss["use-case__industries"]}>
        <h4>Applicable industries</h4>
        <List
          itemClassName={clsx(prCss.property, ucCss["use-case__property"])}
          items={[
            "Crypto (Exchanges, Intelligence, Funds)",
            "FinTech (Asset/Wealth Management, AI predictions)",
            "Trading (FX, Equity, Commodity)",
          ]}
        />
      </div>

      <UseCaseCustomers customers={marketDataCustomers} />
    </div>
  </section>
)

const industrialTelemetryCustomers: Customer[] = [
  {
    key: "copenhagen-atomics",
    quote:
      "Copenhagen Atomics, manufacturer of next generation molten salt reactors, uses QuestDB to monitor their thorium reactors in real time.",
    caseStudyLink: "/case-study/copenhagen-atomics/",
    logoWidth: 120,
  },
  {
    key: "tqs-integration",
    quote:
      "See how TQS, a Cognizant company, uses QuestDB to store manufacturing plants metrics for real-time data visualization and anomaly detection",
    caseStudyLink: "/case-study/tqs-integration/",
    logoWidth: 120,
  },
  {
    key: "airbus",
    logoWidth: 120,
  },
  {
    key: "turk-telekom",
    logoWidth: 120,
  },
]

const IndustrialTelemetry = () => (
  <section className={seCss.section} id="industrial-analytics">
    <div className={clsx(seCss["section--inner"])}>
      <div className={ucCss["use-case__half"]}>
        <h2 className={clsx(seCss.section__title, ucCss["use-case__title"])}>
          Industrial analytics
        </h2>

        <List
          itemClassName={clsx(liCss.item, ucCss.listItem)}
          items={[
            "Store high frequency sensor data with continuous data ingestion",
            "Process metrics in the manufacturing process: vibrations, pressure, temperatures, pH levels",
            "Monitor electricity readings for usage insights",
            "Track fleets of autonomous cars, aircrafts or cargo ships with native geospatial features",
            "React to industrial anomalies in real-time",
          ]}
        />
      </div>
      <img
        src="/img/pages/use-cases/industrial-telemetry-jumbo.svg"
        alt="An illustration of industrial analytics charts"
        width="585"
        className={ucCss["use-case__image"]}
      />
    </div>

    <div className={clsx(seCss["section--inner"])}>
      <UseCaseCustomers customers={industrialTelemetryCustomers} columnLayout />

      <div
        className={clsx(
          ucCss["use-case__industries"],
          ucCss["use-case__industries--wide"],
        )}
      >
        <h4>Applicable industries</h4>
        <List
          itemClassName={clsx(prCss.property, ucCss["use-case__property"])}
          items={[
            "Energy (Power plants, Renewables, Oil & Gas, Utilities)",
            "Space & Defence (Rockets, Satellites, Maritime, Aerospace)",
            "Transportation and Mobility (Autonomous cars, Freight transport, Drones, Logistics)",
            "Manufacturing & Automation (Semiconductors, Digital factories, pre-processing plants, Robotics)",
            "Telco (Network base stations)",
          ]}
        />
      </div>
    </div>
  </section>
)

const title = "Use Cases"
const description =
  "QuestDB offers high throughput ingestion and real-time SQL queries for applications in a wide range of use cases and industries"

const UseCasesPage = () => (
  <Layout canonical="/use-cases" description={description} title={title}>
    <Heading />
    <Highlights />
    <Monitoring />
    <MarketData />
    <IndustrialTelemetry />
  </Layout>
)

export default UseCasesPage
