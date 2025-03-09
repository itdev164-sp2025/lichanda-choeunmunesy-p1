import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
`;

const ImageContainer = styled.div`
  height: 200px;
`;

const DogImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  padding: 15px;
`;

const Name = styled.h3`
  margin: 0 0 10px 0;
  color: #333;
`;

const Details = styled.p`
  margin: 0 0 10px 0;
  color: #666;
  font-size: 14px;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  background-color: #3498db;
  color: white;
  padding: 8px 15px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  
  &:hover {
    background-color: #2980b9;
  }
`;

const DogCard = ({ dog }) => {
  const image = getImage(dog.photo)
  const dogPath = `/dog/${dog.name.toLowerCase().replace(/\s+/g, '-')}`
  
  return (
    <Card>
      <ImageContainer>
        <DogImage image={image} alt={dog.name} />
      </ImageContainer>
      <Content>
        <Name>{dog.name}</Name>
        <Details>{dog.breed} • {dog.age} • {dog.gender}</Details>
        <Details>Size: {dog.size}</Details>
        <StyledLink to={dogPath}>View Details</StyledLink>
      </Content>
    </Card>
  )
}

export default DogCard