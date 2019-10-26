import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import { Text } from "theme-ui/components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Text> Hello, World!</Text>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
