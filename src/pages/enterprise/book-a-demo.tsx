import React from "react"
import BookADemo from "../../modules/book-a-demo/page"
import Layout from "../../theme/Layout"

const Page = () => (
  <Layout
    canonical="/enterprise/book-a-demo/"
    description="Book a demo for a QuestDB deployment on your infrastructure."
    title="Book a demo"
    image="/img/pages/cloud/screens-thumb.png"
  >
    <BookADemo calendlyUrl="https://calendly.com/d/yqw-xc2-tqy/questdb-enterprise" />
  </Layout>
)

export default Page
