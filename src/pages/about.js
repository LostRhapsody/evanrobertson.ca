import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"

export default function IndexPage({ data }) {
    return (
        <Layout>
            <SEO title="About" />
            <div style={{
                width: '900px',
                margin: 'auto',
                textAlign: 'center',
            }}>
                <h1 style={{ textAlign: 'center' }}>Freelance Web and Brand Design</h1>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'auto auto',
                        gridAutoRows: 'min-content',
                        columnGap:'50px'
                    }}>
                    <div className="col">
                        <Img fixed={data.file.childImageSharp.fixed}
                            style={{
                                borderRadius: '50%',
                            }} />
                    </div>
                    <div className="col">
                        <p style={{textAlign:'left'}}>
                            Hi, I'm Evan, a freelance web designer.<br /><br />
                            I'm a computer programming student with my sights set on developing advanced AI.
                            My design aesthetic is minimalistic and informative, but I can adapt quickly and efficiently to pre-existing design schemes.
                            My process goes beyond using a clunky website builder to achieve professional results.<br /><br />
                            I specialize in front end development using React and Gatsby to create fast, informative, and modern designs.<br /><br />
                            In my free time I focus on my pet project ItsLiBerry, an online community for readers and authors to share their stories and, hopefully, make money doing it. </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
query {
    file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
           fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`