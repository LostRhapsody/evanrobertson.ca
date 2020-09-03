<<<<<<< HEAD
import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

export default function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <h1 id="Introduction" style={{ textAlign: 'center' }}>I'm Evan, North Bay based<br />Web and Brand Designer</h1>
      <h1 id="Introduction320" style={{ textAlign: 'center'}}>Evan - North Bay<br />Web Designer</h1>
      <Container id="gallery-lg" style={{
        padding:25,
      }}>
        <Row>
        {data.allMarkdownRemark.edges.map(({ node }) => (
        <Col>
            <Link style={{ textDecoration: 'none' }} to={node.fields.slug}>
              <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} className="galleryImg" />
              <h3 className="galleryTitle">{node.frontmatter.title}{" "}</h3>
            </Link>
        </Col>
        ))}
        </Row>
      </Container>
      <Container id="gallery-sm" style={{
        padding:25,
      }}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
        <Col>
            <Link style={{ textDecoration: 'none' }} to={node.fields.slug}>
              <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} className="galleryImg" />
              <h3 className="galleryTitle">{node.frontmatter.title}{" "}</h3>
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
      }
    }
  }
}
=======
import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

export default function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <h1 id="Introduction" style={{ textAlign: 'center' }}>I'm Evan, North Bay based<br />Web and Brand Designer</h1>
      <h1 id="Introduction320" style={{ textAlign: 'center'}}>Evan - North Bay<br />Web Designer</h1>
      <Container id="gallery-lg" style={{
        padding:25,
      }}>
        <Row>
        {data.allMarkdownRemark.edges.map(({ node }) => (
        <Col>
            <Link style={{ textDecoration: 'none' }} to={node.fields.slug}>
              <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} className="galleryImg" />
              <h3 className="galleryTitle">{node.frontmatter.title}{" "}</h3>
            </Link>
        </Col>
        ))}
        </Row>
      </Container>
      <Container id="gallery-sm" style={{
        padding:25,
      }}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
        <Col>
            <Link style={{ textDecoration: 'none' }} to={node.fields.slug}>
              <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} className="galleryImg" />
              <h3 className="galleryTitle">{node.frontmatter.title}{" "}</h3>
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
      }
    }
  }
}
>>>>>>> 49e5b63e4209f580176099060e30b504cc216e1f
`