import React from "react"
import { Link, graphql } from "gatsby"

import Gallery from "../templates/gallery"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

export default function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <h1 style={{ textAlign: 'center' }}>I'm Evan, North Bay based<br />Web and Brand Designer</h1>
      <Gallery>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div style={{ padding: 20, width: 'auto' }}>
            <Link style={{ textDecoration: 'none' }} to={node.fields.slug}>
              <Img fixed={node.frontmatter.featuredImage.childImageSharp.fixed} className="galleryImg" />
              <h3 className="galleryTitle">{node.frontmatter.title}{" "}</h3>
            </Link>
          </div>
        ))}
      </Gallery>
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
              fixed(width:600) {
                ...GatsbyImageSharpFixed
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
`