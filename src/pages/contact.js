import React from "react"
import Layout from "../components/layout"
import "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"



export default function IndexPage({ data }) {
    return (
        <Layout>
            <SEO title="Contact" />
            <Container>
                <Row>
                    <Col>
                <h1>Let's Talk</h1>
                </Col>
                <Col>
                <Img fluid={data.file.childImageSharp.fluid} />
                </Col>
                <Col>
                <h2>
                    Interested in working together?<br />
                    Send an inquiry to<br />
                    admin@evanrobertson.ca anytime<br />
                    to learn more and get a quote</h2>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export const query = graphql`
query {
    file(relativePath: { eq: "phone-contact-page.png" }) {
      childImageSharp {
           fluid(maxWidth: 250, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`