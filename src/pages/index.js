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
      <h1 style={{ textAlign: 'center' }}>I'm Evan, North Bay based Web and Brand Designer</h1>
      <p style={{ textAlign: 'center' }}>I specialize in front end web design using React and Gatsby to create fast, informative, and modern designs.</p>
      <p style={{ textAlign: 'center' }}>Web and Brand design go hand in hand. A website is the virtual face of your company. Bundling these together ensures uniformity and user satisfaction</p>
      <Gallery>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div style={{ padding: 20, width: 'auto' }}>
            <Link style={{ textDecoration: 'none' }} to={node.fields.slug}>
              <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
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
              fluid(maxWidth:600) {
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
`