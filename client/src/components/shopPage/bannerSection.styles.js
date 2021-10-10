import styled, { css, keyframes } from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import {
  defaultContainer,
  defaultHeading,
} from "components/shared/shared.styles";

const Container = styled(defaultContainer)``;

const Wrapper = styled.div`
  /* Positioncing  Properties*/
  position: relative;
  /* Display and Box Model  Properties*/
  width: 100%;
  display: grid;
  place-items: center;
`;

const ImageSlide = styled.div`
  /* Display and Box Model  Properties*/
  width: 75%;
  height: 75vh;
  /* Other Properties */
  overflow: hidden;
  /* Media Query*/
  @media screen and (max-width: 768px) {
    /* Display and Box Model  Properties*/
    height: calc(60vh / 0.5vw);
  }
`;

const SlideAnimation = keyframes`
from{
  /* Positioncing  Properties*/
  transform:translateX(200%);
}
to{
  /* Positioncing  Properties*/
  transform:translateX(0);

}
`;

const Image = styled.img`
  /* Display and Box Model  Properties*/
  width: 100%;
  height: 100%;
  /* Other Properties */
  object-fit: cover;
  /* Animation Properties */
  animation: ${SlideAnimation} 250ms ease-in-out;
`;

const SlideControl = styled.div`
  /* Positioning  Properties*/
  position: absolute;
  top: 95%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* Display and Box Model  Properties*/
  border-radius: 25px;
  padding: 0 8px;
  width: 175px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* Color  Properties*/
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  /* Media Query*/
  @media screen and (max-width: 768px) {
    /* Positioning  Properties*/
    top: 105%;
  }
`;

const SlideIndicator = styled.div``;

const Dot = styled.span`
  /* Display and Box Model  Properties*/
  border-radius: 50%;
  margin: 0 4px;
  width: 8px;
  aspect-ratio: 1;
  display: inline-block;
  /* Color  Properties*/
  background: ${({ $active }) =>
    $active ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.25)"};
  /* Other Properties */
  cursor: pointer;
`;

const TextWrapper = styled.div`
  /* Positioning  Properties*/
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* Display and Box Model  Properties*/
  border-radius: 2.5px;
  max-width: 400px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  /* Color  Properties*/
  background-color: rgba(255, 255, 255, 0.8);
  /* Text  Properties*/
  text-align: center;
  /* Media Query*/
  @media screen and (max-width: 768px) {
    /* Display and Box Model  Properties*/
    display: none;
  }
`;

const Heading = styled(defaultHeading)`
  /* Display and Box Model  Properties*/
  margin: 16px;
  padding: 0;
`;

const Text = styled.p`
  /* Display and Box Model  Properties*/
  margin: 8px 16px;
  max-width: 350px;
`;

const BtnLinkWrapper = styled.div`
  /* Display and Box Model  Properties*/
  margin: 24px 0;
`;

const BtnLinkRouter = styled(LinkRouter)`
  /* Display and Box Model  Properties*/
  border-radius: 5px;
  padding: 8px 24px;
  /* Color  Properties*/
  background-color: #424b5a;
  color: #fff;
`;

const ArrowStyling = css`
  /* Text  Properties*/
  font-size: 24px;
  /* Other Properties */
  cursor: pointer;
`;

const LeftArrow = styled(MdKeyboardArrowLeft)(ArrowStyling);
const RightArrow = styled(MdKeyboardArrowRight)(ArrowStyling);

export {
  Container,
  Wrapper,
  ImageSlide,
  Image,
  SlideControl,
  SlideIndicator,
  Dot,
  TextWrapper,
  Heading,
  Text,
  BtnLinkWrapper,
  BtnLinkRouter,
  LeftArrow,
  RightArrow,
};
