import React from "react";
import Fade from "react-reveal/Fade";

import {
  Container,
  Wrapper,
  Image,
  TextWrapper,
  Header,
  Description,
  BtnLinkWrapper,
  JoinBtn,
  KnowMoreBtn,
  AnimatedRightArrow,
} from "./heroSectionElements";
import heroImageLink from "assets/images/hero_image.jpg";

const HeroSection = () => {
  return (
    <Container>
      <Wrapper>
        <Image src={heroImageLink} alt="hero image" />
        <Fade left>
          <TextWrapper>
            <Header>Welcome to your online shop</Header>
            <Description>
              If you’re looking for the latest in wireless headphones, look no
              further. These are perfect for TV, stereo, home, and cell phone.
            </Description>
            <BtnLinkWrapper>
              <JoinBtn to="/register">JOIN TODAY!</JoinBtn>
              <KnowMoreBtn to="/knowMore">
                Know More <AnimatedRightArrow />
              </KnowMoreBtn>
            </BtnLinkWrapper>
          </TextWrapper>
        </Fade>
      </Wrapper>
    </Container>
  );
};

export default HeroSection;

// <HeroSectionContainer>
// <HeroImage src={heroImageLink} alt="Hero image" />
// <Fade left>
//   <HeroInfo>
//     <HeroHeader>Welcome to your online shop</HeroHeader>
//     <HeroDescription>
//       If you’re looking for the latest in wireless headphones, look no
//       further. These are perfect for TV, stereo, home, and cell phone.
//     </HeroDescription>
//     <HeroBtnWrapper>
// <JoinBtn to="/register">JOIN TODAY!</JoinBtn>
// <KnowMoreBtn to="/knowMore">
//   Know More <AnimatedRightArrow />
// </KnowMoreBtn>
//     </HeroBtnWrapper>
//   </HeroInfo>
// </Fade>
// </HeroSectionContainer>
