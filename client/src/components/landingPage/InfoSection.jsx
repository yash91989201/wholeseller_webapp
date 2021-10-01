import React from "react";

import {
  Container,
  Wrapper,
  Image,
  TextWrapper,
  Heading,
  Description,
} from "./infoSectionElements";

import imageLink from "assets/images/how_it_works.jpg";

const InfoSection = () => {
  return (
    <Container>
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

// <Container>
// <Image src={imageLink} alt="how it works?" />

// <Description>
//   <Text>How It Works?</Text>
//   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
//   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//   veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
//   commodo consequat incididunt.
// </Description>
// </Container>
