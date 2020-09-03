import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container"

export default function ProjectDescription({ data }) {
    const post = data.markdownRemark
    return (
        <Layout>
            <Container>
                <SEO title={post.frontmatter.title} description={post.frontmatter.excerpt} />
                <h1>{post.frontmatter.title}</h1>
                <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </Container>
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
                    fluid(maxWidth: 1920, maxHeight: 1080) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
        }
        excerpt
    }
}
`