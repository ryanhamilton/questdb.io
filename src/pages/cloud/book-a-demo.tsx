import React from "react"
import BookADemo from "../../modules/book-a-demo/page"
import Layout from "../../theme/Layout"

const Page = () => (
  <Layout
    canonical="/cloud/book-a-demo/"
    description="Book a demo for the fastest open source time-series database fully managed on the cloud."
    title="Book a demo of QuestDB Cloud"
    image="/img/pages/cloud/screens-thumb.png"
  >
    <BookADemo calendlyUrl="https://calendly.com/d/dv3-8hc-2d5/questdb-cloud-demo" />
  </Layout>
)

export default Page
