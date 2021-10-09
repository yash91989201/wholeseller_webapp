import React from "react";

import {
  Container,
  Wrapper,
  ImageWrapper,
  Image,
  LeftArrow,
  RightArrow,
  InfoCard,
  Heading,
  TextWrapper,
  Text,
  BtnLinkWrapper,
  BtnLink,
} from "./bannerSection.styles";

import imgLink from "assets/images/hero_image.jpg";

const BannerSection = () => {
  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <Image src={imgLink} />
          <LeftArrow />
          <RightArrow />
        </ImageWrapper>
        <InfoCard>
          <Heading></Heading>
          <TextWrapper>
            <Text></Text>
          </TextWrapper>
          <BtnLinkWrapper>
            <BtnLink></BtnLink>
          </BtnLinkWrapper>
        </InfoCard>
      </Wrapper>
    </Container>
  );
};

export default BannerSection;
