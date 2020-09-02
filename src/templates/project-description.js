import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

export default function ProjectDescription({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div style={{
          textAlign:'center',
      }}>
        <SEO title={post.frontmatter.title} description={post.frontmatter.excerpt}/>
        <h1>{post.frontmatter.title}</h1>
        <Img fixed={post.frontmatter.featuredImage.childImageSharp.fixed} />
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
              fixed(width:900) {
                ...GatsbyImageSharpFixed
              }
            }
          }
      }
      excerpt
    }
  }
`