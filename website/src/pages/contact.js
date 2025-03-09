import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import MilwaukeeImage from "../images/Milwaukee.png";



const ContactContainer = styled.div`
  max-width: 1000px;
  margin: 40px auto;
  padding: 0 20px;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  color: #333;
`;

const ContactSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoSection = styled.div`
  background-color: #f8f8f8;
  padding: 30px;
  border-radius: 8px;
`;

const MapSection = styled.div`
  background-color: #f8f8f8;
  padding: 30px;
  border-radius: 8px;
  
  img {
    width: 100%;
    border-radius: 4px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

const SectionTitle = styled.h2`
  margin-bottom: 20px;
  color: #3498db;
  font-size: 1.5rem;
`;

const ContactInfo = styled.div`
  margin-bottom: 30px;
`;

const InfoItem = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: flex-start;
`;

const InfoLabel = styled.span`
  font-weight: bold;
  min-width: 70px;
  margin-right: 10px;
`;

const InfoValue = styled.span`
  line-height: 1.5;
`;

const Hours = styled.div`
  margin-bottom: 30px;
`;

const Day = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid #ddd;
  
  &:last-child {
    border-bottom: none;
  }
`;

const DayName = styled.span`
  font-weight: bold;
`;

const TimeSlot = styled.span``;

const VisitInfo = styled.div`
  background-color: #e8f4fc;
  padding: 20px;
  border-radius: 6px;
  margin-top: 30px;
`;

const VisitTitle = styled.h3`
  margin-bottom: 15px;
  color: #2980b9;
`;

const ContactPage = () => {
  return (
    <Layout>
      <ContactContainer>
        <PageTitle>Contact Us</PageTitle>
        
        <ContactSection>
          <InfoSection>
            <SectionTitle>Get In Touch</SectionTitle>
            
            <ContactInfo>
              <InfoItem>
                <InfoLabel>Phone:</InfoLabel>
                <InfoValue>(262) 283-1696</InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel>Email:</InfoLabel>
                <InfoValue>lannachoeun@gmail.com</InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel>Address:</InfoLabel>
                <InfoValue>
                  Paws & Hearts Animal Shelter<br />
                  3724 North Humboldt Avenue<br />
                  Milwaukee, WI 53212
                </InfoValue>
              </InfoItem>
            </ContactInfo>
            
            <Hours>
              <SectionTitle>Shelter Hours</SectionTitle>
              <Day>
                <DayName>Monday - Friday</DayName>
                <TimeSlot>10:00 AM - 7:00 PM</TimeSlot>
              </Day>
              <Day>
                <DayName>Saturday</DayName>
                <TimeSlot>9:00 AM - 5:00 PM</TimeSlot>
              </Day>
              <Day>
                <DayName>Sunday</DayName>
                <TimeSlot>11:00 AM - 4:00 PM</TimeSlot>
              </Day>
            </Hours>
            
            <VisitInfo>
              <VisitTitle>Planning a Visit?</VisitTitle>
              <p>We welcome walk-ins during our regular hours, but appointments are recommended for meeting specific dogs. Please call ahead if you're interested in a particular pet!</p>
              <p>All visitors must be 18+ years old. If you're planning to bring children, please let us know in advance.</p>
            </VisitInfo>
          </InfoSection>
          
          <MapSection>
            <SectionTitle>Find Us</SectionTitle>
            <img src={MilwaukeeImage} alt="Paws & Hearts Animal Shelter Location" />

            <div style={{ width: "100%", height: "300px", backgroundColor: "#e0e0e0", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              [Map of 3724 N Humboldt Ave, Milwaukee]
            </div>
            
            <SectionTitle>Directions</SectionTitle>
            <p>We're located in the Riverwest neighborhood, just a few blocks east of the Milwaukee River.</p>
            
            <h3 style={{ marginTop: "20px", marginBottom: "10px" }}>Public Transportation</h3>
            <p>Bus routes 15 and 21 stop within a block of our shelter.</p>
            
            <h3 style={{ marginTop: "20px", marginBottom: "10px" }}>Parking</h3>
            <p>Free street parking is available on Humboldt Avenue and surrounding streets. We also have a small lot behind our building accessible from the alley.</p>
          </MapSection>
        </ContactSection>
      </ContactContainer>
    </Layout>
  );
};

export default ContactPage;