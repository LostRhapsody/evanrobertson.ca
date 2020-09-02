import React from "react"
import Layout from "../components/layout"
import "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

export default function IndexPage({ data }) {
    return (
        <Layout>
            <SEO title="About" />
            <div style={{
                width: '100%',
                margin: 'auto',
                justifyContent: 'center',
                display: 'flex',
            }}>
                <h1 style={{
                    paddingTop: '50px',
                }}>Let's Talk</h1>
                <Img fixed={data.file.childImageSharp.fixed} />
            <h2 className="contact-h2" style={{ float: 'left' }}>
                    Interested in working together?<br />
                    Send an inquiry to<br />
                    admin@evanrobertson.ca anytime<br />
                    to learn more and get a quote</h2>
            </div>
        </Layout>
    )
}

export const query = graphql`
query {
    file(relativePath: { eq: "phone-contact-page.png" }) {
      childImageSharp {
           fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`