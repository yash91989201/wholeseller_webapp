import { useState } from "react";

import {
  Container,
  Wrapper,
  ImageWrapper,
  Image,
  ImageCaption,
  ImageShowCase,
  BtnWrapper,
  CloseIcon,
} from "./ImageSection.styles";

import { SliderData } from "components/shopPage/sliderData";

const ImageSection = () => {
  const [showCaseImage, setShowCaseImage] = useState("");
  const [showCase, toggleShowCase] = useState(false);

  return (
    <Container>
      <Wrapper>
        {SliderData.map(({ image }, index) => (
          <ImageWrapper
            key={index}
            onClick={() => {
              toggleShowCase(true);
              setShowCaseImage(image);
            }}
          >
            <Image src={image} alt={image} />
            <ImageCaption>This is an image caption.</ImageCaption>
          </ImageWrapper>
        ))}
        {SliderData.map(({ image }, index) => (
          <ImageWrapper
            key={index}
            onClick={() => {
              toggleShowCase(true);
              setShowCaseImage(image);
            }}
          >
            <Image src={image} alt={image} />
            <ImageCaption>This is the image caption.</ImageCaption>
          </ImageWrapper>
        ))}
        {SliderData.map(({ image }, index) => (
          <ImageWrapper
            key={index}
            onClick={() => {
              toggleShowCase(true);
              setShowCaseImage(image);
            }}
          >
            <Image src={image} alt={image} />
            <ImageCaption>This is the image caption.</ImageCaption>
          </ImageWrapper>
        ))}
        <ImageShowCase $showCaseOpen={showCase}>
          <BtnWrapper>
            <CloseIcon onClick={() => toggleShowCase(false)} />
          </BtnWrapper>
          <ImageWrapper>
            <Image src={showCaseImage} alt={showCaseImage} />
          </ImageWrapper>
        </ImageShowCase>
      </Wrapper>
    </Container>
  );
};

export default ImageSection;
