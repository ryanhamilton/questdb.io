import React from "react"
import { Section } from "../../components/Section"
import styles from "./styles.module.css"

type Highlight = {
  key: string
  title: string
  description: string
  image: string
}

const useCaseHighlights: Highlight[] = [
  {
    key: "monitoring-and-real-time-analytics",
    title: "Monitoring & analytics",
    description:
      "Observability, monitoring and analytics for time series data generated from infrastructure and software applications",
    image: "/img/pages/use-cases/real-time-analytics.svg",
  },
  {
    key: "financial-market-data",
    title: "Financial market data",
    description:
      "Process billions of rows of tick data in milliseconds and explore vasts datasets of market data on the fly",
    image: "/img/pages/use-cases/financial-market-data.svg",
  },
  {
    key: "industrial-analytics",
    title: "Industrial analytics",
    description:
      "Collect high-frequency metrics at scale from rockets, plants, machinery, fleets or any type of IIoT sensor \n",
    image: "/img/pages/use-cases/industrial-telemetry.svg",
  },
]

export const Highlights = () => (
  <Section center noGap className={styles.root}>
    {useCaseHighlights.map((highlight, index) => (
      <div className={styles.card} key={index}>
        <img
          src={highlight.image}
          alt={highlight.title}
          className={styles.image}
        />
        <h3 className={styles.title}>{highlight.title}</h3>
        <p className={styles.description}>{highlight.description}</p>
        <a href={`#${highlight.key}`} className={styles.cta}>
          Learn more
        </a>
      </div>
    ))}
  </Section>
)
