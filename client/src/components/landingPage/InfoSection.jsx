import React from "react";

import {
  Container,
  Wrapper,
  Image,
  TextWrapper,
  Heading,
  Description,
} from "./infoSection.styles";

import imageLink from "assets/images/how_it_works.jpg";

const InfoSection = () => {
  return (
    <Container id="infoSection">
      <Heading>How It Works?</Heading>
      <Wrapper>
        <Image src={imageLink} alt="how it works" />
        <TextWrapper>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat incididunt.
          </Description>
        </TextWrapper>
      </Wrapper>
    </Container>
  );
};

export default InfoSection;
