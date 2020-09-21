import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { Helmet } from "react-helmet"

export default function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Evan Robertson Web and Brand Design"
           description="Custom Web and Brand Design for local business and artists"
       />
       <Helmet>
         <link rel="canonical" href="https://evanrobertson.ca/" />
       </Helmet>
      <h1 id="Introduction" style={{ textAlign: 'center',borderBottom:"2px solid black" }}>I'm Evan, North Bay based<br />Web and Brand Designer</h1>
      <h1 id="Introduction320" style={{ textAlign: 'center',borderBottom:"2px solid black" }}>Evan - North Bay<br />Web Designer</h1>
      <h2 style={{textAlign:"center",}}>Portfolio</h2>
      <Container id="gallery-lg" style={{
        padding: 25,
      }}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Row style={{
            backgroundColor:"hsl(0, 0%, 97%)",
            border:"1px solid hsl(0,0%,95%)",
          }}>
            <Col style={{
              width: "50%",
            }}>
              <h4>{node.excerpt}</h4>
            </Col>
            <Col style={{
              width: "50%",
            }}>
              <Link style={{ textDecoration: 'none' }} to={node.fields.slug}>
                <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} className="galleryImg" />
                <h3 className="galleryTitle">{node.frontmatter.title}{" "}</h3>
              </Link>
            </Col>
          </Row>
        ))}
      </Container>
      <Container id="gallery-sm" style={{
        padding: 25,
      }}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Col>
            <Link style={{ textDecoration: 'none' }} to={node.fields.slug}>
              <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} className="galleryImg" />
              <h2 className="galleryTitle">{node.frontmatter.title}{" "}</h2>
            </Link>
          </Col>
        ))}
      </Container>
    </Layout>
  )
}

export const query = graphql`
{
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          title
          featuredImage {
            childImageSharp {
              fluid(maxWidth:1920,maxHeight:1080) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}
`