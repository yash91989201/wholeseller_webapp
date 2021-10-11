import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  Wrapper,
  ImageSlide,
  Image,
  SlideControl,
  SlideIndicator,
  Dot,
  ViewProduct,
  TextWrapper,
  Heading,
  Text,
  BtnLinkWrapper,
  BtnLinkRouter,
  LeftArrow,
  RightArrow,
  RightRedoArrow,
} from "./bannerSection.styles";

import { SliderData } from "./sliderData";

const BannerSection = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const toggleSlide = (slideDirection, slideIndex) => {
    if (slideDirection === "prevSlide") {
      setCurrent(current === 0 ? length - 1 : current - 1);
    } else if (slideDirection === "nextSlide") {
      setCurrent(current === length - 1 ? 0 : current + 1);
    } else {
      setCurrent(slideIndex);
    }
  };

  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = () => toggleSlide("nextSlide");
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    const interval = setInterval(play, 3250);
    return () => clearInterval(interval);
  }, []);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <Container>
      <Wrapper>
        <ImageSlide>
          {SliderData.map(
            (slide, index) =>
              current === index && <Image key={index} src={slide.image} />
          )}
        </ImageSlide>
        <TextWrapper>
          <Heading>{SliderData[current].heading}</Heading>
          <Text> {SliderData[current].text} </Text>
          <BtnLinkWrapper>
            <BtnLinkRouter>{SliderData[current].btnLinkText}</BtnLinkRouter>
          </BtnLinkWrapper>
        </TextWrapper>
        <ViewProduct>
          <RightRedoArrow />
        </ViewProduct>
        <SlideControl>
          <LeftArrow
            onClick={() => {
              toggleSlide("prevSlide");
            }}
          />
          <SlideIndicator>
            {slides.map((_, index) => (
              <Dot
                key={index}
                $active={current === index}
                onClick={() => {
                  toggleSlide("", index);
                }}
              />
            ))}
          </SlideIndicator>
          <RightArrow
            onClick={() => {
              toggleSlide("nextSlide");
            }}
          />
        </SlideControl>
      </Wrapper>
    </Container>
  );
};

export default BannerSection;
