import React from "react"
import { graphql } from "gatsby"
import { Image } from "rebass"
import Layout from "../components/layout"
import { H1 } from "../components/Heading"
import { GatsbyImage } from "gatsby-plugin-image"

const BlogPost = ({ data }) => {
  const { title, body, heroImage } = data.contentfulBlogPost

  return (
    <Layout>
      <GatsbyImage image={heroImage.gatsbyImageData} />
      <H1>{title}</H1>
      <div
        dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
      ></div>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
      heroImage {
        gatsbyImageData(layout: CONSTRAINED, width: 960)
      }
    }
  }
`