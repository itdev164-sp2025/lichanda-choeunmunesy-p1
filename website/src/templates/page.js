import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import styled from "styled-components"
import Layout from "../components/layout"

const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 0 20px;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

const ImageContainer = styled.div`
  margin-bottom: 30px;
  border-radius: 8px;
  overflow: hidden;
`;

const PageContent = styled.div`
  line-height: 1.6;
  
  h2 {
    margin-top: 30px;
    margin-bottom: 15px;
  }
  
  p {
    margin-bottom: 20px;
  }
  
  ul, ol {
    margin-left: 20px;
    margin-bottom: 20px;
  }
  
  li {
    margin-bottom: 10px;
  }
`;

const PageTemplate = ({ data }) => {
  const page = data.contentfulPage
  const image = page.image ? getImage(page.image) : null
  
  // Check if content exists and has the raw property
  const hasContent = page.content && page.content.raw
  
  const options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2>{children}</h2>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p>{children}</p>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul>{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol>{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li>{children}</li>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
    },
  }
  
  return (
    <Layout>
      <Container>
        <PageTitle>{page.title}</PageTitle>
        
        {image && (
          <ImageContainer>
            <GatsbyImage image={image} alt={page.title} />
          </ImageContainer>
        )}
        
        <PageContent>
          {hasContent ? renderRichText(page.content, options) : <p>No content available</p>}
        </PageContent>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      content {
        raw
      }
      image {
        gatsbyImageData(width: 800, placeholder: BLURRED)
      }
    }
  }
`

export default PageTemplate