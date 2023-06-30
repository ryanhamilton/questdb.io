import React from "react"
import Layout from "../../theme/Layout"
import { InlineWidget } from "react-calendly"
import { Section } from "../../components/Section"
import style from "./styles.module.css"

type Props = {
  calendlyUrl: string
}

const BookADemo = ({ calendlyUrl }: Props) => {
  const title = "Book a demo"

  return (
    <Layout
      canonical="/cloud/book-a-demo/"
      description="Book a demo for the fastest open source time series database fully managed on the cloud"
      title={title}
      image="/img/pages/cloud/screens-thumb.png"
    >
      <Section>
        <Section.Title level={1} center>
          {title}
        </Section.Title>

        <div className={style.calendly}>
          <InlineWidget
            url={calendlyUrl}
            styles={{ width: "100%", height: "100%" }}
          />
        </div>
      </Section>
    </Layout>
  )
}

export default BookADemo
