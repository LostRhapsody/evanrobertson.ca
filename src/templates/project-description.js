import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container"

class ProjectDescriptionTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const image = post.frontmatter.image
      ? post.frontmatter.image.childImageSharp.resize
      : null
    return (
      <Layout location={this.props.location}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          image={image}
          pathname={this.props.location.pathname}
        />
        <Container>
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.excerpt}
          />
          <h1
            style={{
              backgroundColor: "hsl(0, 0%, 97%)",
              marginBottom: 0,
              position: "relative",
              textAlign: "center",
            }}
          >
            {post.frontmatter.title}
          </h1>
          <Img
            fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
            style={{
              border: "3px solid hsl(0, 0%, 95%)",
            }}
          />
          <br />
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <div
            style={{ textAlign: "center", paddingTop: 10, paddingBottom: 30 }}
          >
            <Link to="/">
              <i
                style={{ transform: "scale(3)", color: "black" }}
                class="fas fa-chevron-circle-left"
              ></i>
            </Link>
          </div>
        </Container>
      </Layout>
    )
  }
}
export default ProjectDescriptionTemplate

export const query = graphql`
  query ProjectDescriptionBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
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
    }
  }
`
