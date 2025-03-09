import React from "react"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const AboutPage = ({ data }) => {
  const page = data?.contentfulPage
  const featuredImage = page?.image && getImage(page.image)
  
  return (
    <Layout>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "1.5rem" }}>
        <h1>{page?.title || "About Our Shelter"}</h1>
        
        {featuredImage && (
          <div style={{ margin: "2rem 0" }}>
            <GatsbyImage 
              image={featuredImage} 
              alt={page.title || "About page image"} 
            />
          </div>
        )}
        
        <div>
          {page?.content && renderRichText(page.content)}
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query AboutPageQuery {
    contentfulPage(slug: {eq: "about"}) {
      title
      content {
        raw
      }
      image {
        gatsbyImageData(width: 960, placeholder: BLURRED)
        description
      }
    }
  }
`