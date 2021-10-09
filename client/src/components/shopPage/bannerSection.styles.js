import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";

import {
  defaultContainer,
  defaultHeading,
} from "components/shared/shared.styles";

/* Positioning  Properties*/
/* Display and Box Model  Properties*/
/* Color  Properties*/
/* Text  Properties*/
/* Other Properties */
/* Animation Properties */
/* Pseudo Class Properties*/
/* Media Query*/

const Container = styled(defaultContainer)`
  /* Display and Box Model  Properties*/
  padding: 0;
`;

const Wrapper = styled.div`
  /* Positioning  Properties*/
  /* Display and Box Model  Properties*/
  display: flex;
  flex-flow: column wrap;
  /* Color  Properties*/
  /* Text  Properties*/
  /* Other Properties */
  /* Animation Properties */
  /* Pseudo Class Properties*/
  /* Media Query*/
`;

const ImageWrapper = styled.div`
  border: 1px solid red;
  /* Positioning  Properties*/
  position: relative;
  /* Display and Box Model  Properties*/
  display: flex;
  justify-content: center;
  /* Color  Properties*/
  /* Text  Properties*/
  /* Other Properties */
  /* Animation Properties */
  /* Pseudo Class Properties*/
  /* Media Query*/
`;

const Image = styled.img`
  /* Positioning  Properties*/
  /* Display and Box Model  Properties*/
  width: 80%;
  max-width: 80vw;
  /* Color  Properties*/
  /* Text  Properties*/
  /* Other Properties */
  /* Animation Properties */
  /* Pseudo Class Properties*/
  /* Media Query*/
`;

const LeftArrow = styled(BiLeftArrowCircle)`
  /* Positioning  Properties*/
  position: absolute;
  top: 0;
  left: 50px;
`;

const RightArrow = styled(BiRightArrowCircle)`
  /* Positioning  Properties*/
  position: absolute;
  top: 0;
  right: -50px;
`;

const InfoCard = styled.div`
  /* Positioning  Properties*/
  /* Display and Box Model  Properties*/
  /* Color  Properties*/
  /* Text  Properties*/
  /* Other Properties */
  /* Animation Properties */
  /* Pseudo Class Properties*/
  /* Media Query*/
`;

const Heading = styled(defaultHeading)`
  /* Positioning  Properties*/
  /* Display and Box Model  Properties*/
  /* Color  Properties*/
  /* Text  Properties*/
  /* Other Properties */
  /* Animation Properties */
  /* Pseudo Class Properties*/
  /* Media Query*/
`;

const TextWrapper = styled.div`
  /* Positioning  Properties*/
  /* Display and Box Model  Properties*/
  /* Color  Properties*/
  /* Text  Properties*/
  /* Other Properties */
  /* Animation Properties */
  /* Pseudo Class Properties*/
  /* Media Query*/
`;

const Text = styled.p`
  /* Positioning  Properties*/
  /* Display and Box Model  Properties*/
  /* Color  Properties*/
  /* Text  Properties*/
  /* Other Properties */
  /* Animation Properties */
  /* Pseudo Class Properties*/
  /* Media Query*/
`;

const BtnLinkWrapper = styled.div`
  /* Positioning  Properties*/
  /* Display and Box Model  Properties*/
  /* Color  Properties*/
  /* Text  Properties*/
  /* Other Properties */
  /* Animation Properties */
  /* Pseudo Class Properties*/
  /* Media Query*/
`;

const BtnLink = styled(LinkRouter)`
  /* Positioning  Properties*/
  /* Display and Box Model  Properties*/
  /* Color  Properties*/
  /* Text  Properties*/
  /* Other Properties */
  /* Animation Properties */
  /* Pseudo Class Properties*/
  /* Media Query*/
`;

export {
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
};
