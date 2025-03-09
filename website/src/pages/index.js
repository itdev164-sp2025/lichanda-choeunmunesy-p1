import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import DogCard from "../components/DogCard"
import { Link } from "gatsby"

const Hero = styled.div`
  background-color: #3498db;
  color: white;
  padding: 60px 20px;
  text-align: center;
  margin-bottom: 40px;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const HeroText = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 30px;
`;

const HeroButton = styled(Link)`
  display: inline-block;
  background-color: white;
  color: #3498db;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  
  &:hover {
    background-color: #f8f8f8;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

const DogsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
`;

const ViewAllLink = styled(Link)`
  display: block;
  text-align: center;
  margin-bottom: 60px;
  font-weight: bold;
  color: #3498db;
`;

const InfoSection = styled.div`
  background-color: #f8f8f8;
  padding: 60px 20px;
  text-align: center;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const InfoCard = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const InfoTitle = styled.h3`
  margin-bottom: 15px;
  color: #333;
`;

const HomePage = ({ data }) => {
  const featuredDogs = data.allContentfulDogProfile.nodes
  
  return (
    <Layout>
      <Hero>
        <HeroTitle>Find Your Perfect Furry Friend</HeroTitle>
        <HeroText>
          Every dog deserves a loving home. Browse our available dogs and discover 
          your new best friend today.
        </HeroText>
        <HeroButton to="/dogs">View All Dogs</HeroButton>
      </Hero>
      
      <SectionTitle>Featured Dogs</SectionTitle>
      <DogsGrid>
        {featuredDogs.map(dog => (
          <DogCard key={dog.name} dog={dog} />
        ))}
      </DogsGrid>
      <ViewAllLink to="/dogs">View All Available Dogs →</ViewAllLink>
      
      <InfoSection>
        <SectionTitle>Why Adopt From Us?</SectionTitle>
        <InfoGrid>
          <InfoCard>
            <InfoTitle>Thorough Health Checks</InfoTitle>
            <p>All our dogs receive complete veterinary care before adoption.</p>
          </InfoCard>
          <InfoCard>
            <InfoTitle>Behavior Assessment</InfoTitle>
            <p>We evaluate each dog's temperament to help find the perfect match.</p>
          </InfoCard>
          <InfoCard>
            <InfoTitle>Ongoing Support</InfoTitle>
            <p>Our team provides guidance and resources even after adoption.</p>
          </InfoCard>
        </InfoGrid>
      </InfoSection>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulDogProfile(
      filter: { isFeatured: { eq: true } }
      limit: 3
    ) {
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

export default HomePage