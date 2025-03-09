import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import DogCard from "../components/DogCard"

const PageTitle = styled.h1`
  text-align: center;
  margin: 40px 0;
`;

const DogsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto 60px;
  padding: 0 20px;
`;

const DogsPage = ({ data }) => {
  const dogs = data.allContentfulDogProfile.nodes

  return (
    <Layout>
      <PageTitle>Available Dogs</PageTitle>
      <DogsGrid>
        {dogs.map(dog => (
          <DogCard key={dog.name} dog={dog} />
        ))}
      </DogsGrid>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulDogProfile {
      nodes {
        name
        breed
        age
        gender
        size
        photo {
          gatsbyImageData(width: 400, height: 300, placeholder: BLURRED)
        }
      }
    }
  }
`

export default DogsPage