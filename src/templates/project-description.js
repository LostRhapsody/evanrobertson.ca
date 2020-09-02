import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default function DemoFeature({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
    }
  }
`