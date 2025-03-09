import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Layout from "../components/layout";

const Container = styled.div`
  max-width: 1000px;
  margin: 40px auto;
  padding: 0 20px;
`;

const DogHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  text-align: center;
`;

const DogName = styled.h1`
  margin-bottom: 10px;
`;

const DogBreed = styled.h2`
  font-weight: normal;
  color: #666;
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImageContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoSection = styled.div`
  margin-bottom: 20px;
`;

const InfoTitle = styled.h3`
  margin-bottom: 10px;
  color: #333;
`;

const DetailsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-bottom: 20px;
`;

const DetailItem = styled.div`
  background-color: #f8f8f8;
  padding: 10px;
  border-radius: 4px;
`;

const DetailLabel = styled.span`
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #666;
`;

const DetailValue = styled.span`
  font-size: 16px;
`;

const AdoptButton = styled.a`
  display: inline-block;
  background-color: #3498db;
  color: white;
  padding: 12px 25px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  
  &:hover {
    background-color: #2980b9;
  }
`;

const DogTemplate = ({ data }) => {
  const dog = data.contentfulDogProfile;
  const image = getImage(dog.photo);
  
  const createMailtoLink = (dogName) => {
    const subject = `Inquiry about ${dogName}`;
    const body = `Hi,\n\nI'm interested in learning more about ${dogName}.\n\nPlease contact me with more information.\n\nThank you!`;
    
    return `mailto:lannachoeun@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Layout>
      <Container>
        <DogHeader>
          <DogName>{dog.name}</DogName>
          <DogBreed>{dog.breed}</DogBreed>
        </DogHeader>
        
        <ContentGrid>
          <ImageContainer>
            <GatsbyImage image={image} alt={dog.name} />
          </ImageContainer>
          
          <InfoContainer>
            <DetailsList>
              <DetailItem>
                <DetailLabel>Age</DetailLabel>
                <DetailValue>{dog.age}</DetailValue>
              </DetailItem>
              <DetailItem>
                <DetailLabel>Gender</DetailLabel>
                <DetailValue>{dog.gender}</DetailValue>
              </DetailItem>
              <DetailItem>
                <DetailLabel>Size</DetailLabel>
                <DetailValue>{dog.size}</DetailValue>
              </DetailItem>
            </DetailsList>
            
            <InfoSection>
              <InfoTitle>About {dog.name}</InfoTitle>
              <p>{dog.description.description}</p>
            </InfoSection>
            
            <AdoptButton href={createMailtoLink(dog.name)}>
              Inquire About {dog.name}
            </AdoptButton>
          </InfoContainer>
        </ContentGrid>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query($name: String!) {
    contentfulDogProfile(name: { eq: $name }) {
      name
      breed
      age
      gender
      size
      description {
        description
      }
      photo {
        gatsbyImageData(width: 600, height: 450, placeholder: BLURRED)
      }
    }
  }
`;

export default DogTemplate;