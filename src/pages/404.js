import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>PAGE NOT FOUND</h1>
    <p>Uhoh, that wasn't supposed to happen.</p>
    <p>You've navigated to a page that doesn't exist.</p>
    <Link to='/'
    style={{textDecoration:'none',color:'black' }}>Click here to return.</Link>
  </Layout>
)

export default NotFoundPage
