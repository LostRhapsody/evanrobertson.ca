import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

export default function IndexPage({ data }) {
    return (
        <Layout>
            <SEO title="About" />
            <Container id="about-lg">
                <h1 style={{ textAlign: 'center' }}>About Me...</h1>
                <Row>
                    <Col>
                        <Img fluid={data.file.childImageSharp.fluid}
                            style={{
                                borderRadius: '50%',
                            }} />
                    </Col>
                    <Col>
                        <p style={{ textAlign: 'left' }}>
                            Hi, I'm Evan, a freelance web designer.<br /><br />
                            I'm a computer programming student with my sights set on developing advanced AI.
                            My design aesthetic is minimalistic and informative, but I can adapt quickly and efficiently to pre-existing design schemes.
                            My process goes beyond using a clunky website builder to achieve professional results.<br /><br />
                            I specialize in front end development using React and Gatsby to create fast, informative, and modern designs.<br /><br />
                            In my free time I focus on my pet project ItsLiBerry, an online community for readers and authors to share their stories and, hopefully, make money doing it. </p>
                    </Col>
                </Row>
            </Container>
            <Container id="about-sm">
                <h1 style={{ textAlign: 'center' }}>About Me...</h1>
                <Row>
                    <h2 style={{ textAlign: 'center' }}>Hi, I'm Evan, a freelance web designer.</h2>
                    <Col>
                        <Img fluid={data.file.childImageSharp.fluid}
                            style={{
                                borderRadius: '50%',
                                width: '175px',
                            }} />
                    </Col>
                    <Col>
                        <p style={{ textAlign: 'left' }}>
                            I'm a computer programming student with my sights set on developing advanced AI.
                         </p>
                    </Col>
                </Row>
                <p style={{ textAlign: 'left' }}>
                    My design aesthetic is minimalistic and informative, but I can adapt quickly and efficiently to pre-existing design schemes.
                            My process goes beyond using a clunky website builder to achieve professional results.<br /><br />
                            I specialize in front end development using React and Gatsby to create fast, informative, and modern designs.<br /><br />
                            In my free time I focus on my pet project ItsLiBerry, an online community for readers and authors to share their stories and, hopefully, make money doing it. </p>
            </Container>
        </Layout>
    )
}

export const query = graphql`
query {
    file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
           fluid(maxWidth: 300, maxHeight: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`