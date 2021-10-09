import React from "react";

import {
  Container,
  Wrapper,
  Heading,
  Text,
  HLine,
  InfoWrapper,
  ContactWrapper,
  IconWrapper,
  EmailIcon,
  PhoneIcon,
  MapMarkerIcon,
  Type,
  Detail,
} from "./contactSection.styles";

const ContactSection = () => {
  return (
    <Container id="contactSection">
      <Wrapper>
        <Heading>Contact Us</Heading>
        <Text>We'd love to hear from you</Text>
        <HLine />
        <InfoWrapper>
          <ContactWrapper>
            <IconWrapper>
              <EmailIcon />
            </IconWrapper>
            <Type>E-Mail</Type>
            <Detail>info@form.com</Detail>
          </ContactWrapper>
          <ContactWrapper>
            <IconWrapper>
              <PhoneIcon />
            </IconWrapper>
            <Type>Address</Type>
            <Detail>C-360 TV Station Road</Detail>
          </ContactWrapper>
          <ContactWrapper>
            <IconWrapper>
              <MapMarkerIcon />
            </IconWrapper>
            <Type>Phone</Type>
            <Detail>+91 9856854857</Detail>
          </ContactWrapper>
        </InfoWrapper>
      </Wrapper>
    </Container>
  );
};

export default ContactSection;
