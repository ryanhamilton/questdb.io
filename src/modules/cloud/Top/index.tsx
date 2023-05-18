import React from "react"
import { Section } from "../../../components/Section"
import styles from "./styles.module.css"
import { StartBuilding } from "./start-building"
import ThemedImage from "@theme/ThemedImage"
import useBaseUrl from "@docusaurus/useBaseUrl"

const featureList = [
  "Database-as-a-service",
  "Infrastructure monitoring and logs",
  "Built-in auth and TLS encryption",
  "High availability",
  "Multiple regions",
  "Additional database features",
]

export const Top = () => {
  return (
    <Section className={styles.section}>
      <div className={styles.columns}>
        <div className={styles.textColumn}>
          <Section.Title level={1}>
            <ThemedImage
              width="100%"
              height="80"
              sources={{
                light: useBaseUrl("/img/logos/questdb-cloud.dark.svg"),
                dark: useBaseUrl("/img/logos/questdb-cloud.svg"),
              }}
              alt="QuestDB Cloud"
              title="QuestDB Cloud"
            />
          </Section.Title>

          <Section.Subtitle>
            The fastest open source time series database fully managed on the
            cloud.
          </Section.Subtitle>

          <ul className={styles.list}>
            {featureList.map((feature) => (
              <li className={styles.bullet} key={feature}>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <Section noGap center>
          <StartBuilding />
        </Section>
      </div>
    </Section>
  )
}
