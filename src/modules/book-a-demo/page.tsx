import React from "react"
import { InlineWidget } from "react-calendly"
import { Section } from "../../components/Section"
import style from "./styles.module.css"

type Props = {
  calendlyUrl: string
}

const BookADemo = ({ calendlyUrl }: Props) => (
  <Section>
    <Section.Title level={1} center>
      Book a demo
    </Section.Title>

    <div className={style.calendly}>
      <InlineWidget
        url={calendlyUrl}
        styles={{ width: "100%", height: "100%" }}
      />
    </div>
  </Section>
)

export default BookADemo
