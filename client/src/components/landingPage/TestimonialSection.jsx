import React from "react";

import {
  Container,
  Wrapper,
  Heading,
  TestimonialCard,
  TextWrapper,
  Text,
  QuoteLeft,
  Author,
  UserAvatar,
} from "./testimonialSectionElements";

const TestimonialSection = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Why People love form</Heading>
        <TestimonialCard>
          <TextWrapper>
            <Text>
              <QuoteLeft />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
            <Author> &mdash; yashraj jaiswal</Author>
          </TextWrapper>
          <UserAvatar />
        </TestimonialCard>
      </Wrapper>
    </Container>
  );
};

export default TestimonialSection;
