import React from "react"
import { Section } from "../../components/Section"
import type { CustomerLogo } from "../../assets/types"
import { logos } from "../../assets/logos"
import Link from "@docusaurus/Link"

import styles from "./styles.module.css"
import SvgImage from "../../components/SvgImage"

// SVGs are imported here to keep them in the bundle to avoid additional HTTP requests
import PostgresLogo from "../../../static/img/logos/pg.svg"
import GrafanaLogo from "../../../static/img/logos/grafana.svg"
import KafkaLogo from "../../../static/img/logos/kafka.svg"
import PythonLogo from "../../../static/img/logos/python_grayscale.svg"
import PandasLogo from "../../../static/img/logos/pandas.svg"
import TelegrafLogo from "../../../static/img/logos/influxdata.svg"
import ApacheSparkLogo from "../../../static/img/logos/apache-spark_grayscale.svg"
import ApacheSupersetLogo from "../../../static/img/logos/apache-superset_grayscale.svg"
import MindsDBLogo from "../../../static/img/logos/mindsdb.svg"
import CubeLogo from "../../../static/img/logos/cube.svg"
import RedpandaLogo from "../../../static/img/logos/redpanda_grayscale.svg"
import PlotlyLogo from "../../../static/img/logos/plotly.svg"

const integrations: Array<{
  label: string
  logo: CustomerLogo & { svg: any }
  src?: string
}> = [
  {
    logo: { ...logos.postgres, svg: PostgresLogo },
    label: "Postgres",
    src: "/docs/reference/api/postgres/",
  },
  {
    logo: { ...logos.grafana, svg: GrafanaLogo },
    label: "Grafana",
    src: "/docs/third-party-tools/grafana/",
  },
  {
    logo: { ...logos.kafka, svg: KafkaLogo },
    label: "Kafka",
    src: "/docs/third-party-tools/kafka/overview/",
  },
  {
    logo: { ...logos.python, svg: PythonLogo },
    label: "Python",
    src: "https://github.com/questdb/py-questdb-client",
  },
  {
    logo: { ...logos.pandas, svg: PandasLogo },
    label: "Pandas",
    src: "/docs/third-party-tools/pandas/",
  },
  {
    logo: { ...logos.telegraf, svg: TelegrafLogo },
    label: "Telegraf",
    src: "/docs/third-party-tools/telegraf/",
  },
  {
    logo: { ...logos.apacheSpark, width: 40, svg: ApacheSparkLogo },
    label: "Spark",
    src: "/blog/integrate-apache-spark-questdb-time-series-analytics/",
  },
  {
    logo: { ...logos.apacheSuperset, width: 55, svg: ApacheSupersetLogo },
    label: "Superset",
  },
  {
    logo: { ...logos.mindsDB, svg: MindsDBLogo },
    label: "MindsDB",
    src: "/docs/third-party-tools/mindsdb",
  },
  {
    logo: { ...logos.cube, svg: CubeLogo },
    label: "Cube",
    src: "/blog/2022/04/26/time-series-data-analytics-with-questdb-and-cube/",
  },
  {
    logo: { ...logos.redpanda, width: 50, svg: RedpandaLogo },
    label: "Redpanda",
    src: "/docs/third-party-tools/redpanda/",
  },
  {
    logo: { ...logos.plotly, svg: PlotlyLogo },
    label: "Plotly",
    src: "/blog/2021/11/01/plotly-finnhub-realtime-dashboard/",
  },
]

export const Integration = () => (
  <Section noGap>
    <Section.Title size="small" center>
      Use QuestDB with the tools you love
    </Section.Title>

    <div className={styles.integrations}>
      {integrations.map(({ label, logo, src }, index: number) => {
        const props = {
          key: index,
          className: styles.integration,
        }

        return React.createElement(
          typeof src === "string" ? Link : "div",
          {
            ...props,
            ...(typeof src === "string" ? { href: src } : {}),
          },

          <>
            <SvgImage
              title={logo.alt}
              image={React.createElement(logo.svg, {
                className: styles.logo,
                alt: logo.alt,
                width: logo.width ?? 50,
                height: logo.height ?? 50,
                loading: "lazy",
              })}
            />
            {label}
          </>,
        )
      })}
    </div>
  </Section>
)
