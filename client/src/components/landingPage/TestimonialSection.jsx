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
} from "./testimonialSection.styles";

const TestimonialSection = () => {
  return (
    <Container id="testimonialSection">
      <Heading>Why People love form</Heading>
      <Wrapper>
        <UserAvatar />
        <TestimonialCard>
          <TextWrapper>
            <QuoteLeft />
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Corrupti, ducimus ipsa. Iure totam quas obcaecati nostrum in
              temporibus. Rerum ipsa facilis at incidunt ut vero? lorem50
            </Text>
            <Author> &mdash; yashraj jaiswal</Author>
          </TextWrapper>
        </TestimonialCard>
      </Wrapper>
    </Container>
  );
};

export default TestimonialSection;

//<TestimonialCard>
//        <TextWrapper>
//        <Text>
//          <QuoteLeft />
//          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//          enim ad minim veniam, quis nostrud exercitation ullamco laboris
//          nisi ut aliquip ex ea commodo consequat.
//        </Text>
//      </TextWrapper>
//      <UserAvatar />
//    </TestimonialCard>
