import styled, { css, keyframes } from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { IoArrowRedoCircleOutline } from "react-icons/io5";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import {
  defaultContainer,
  defaultHeading,
} from "components/shared/shared.styles";

const Container = styled(defaultContainer)``;

const Wrapper = styled.div`
  /* Positioning  Properties*/
  position: relative;
  /* Display and Box Model  Properties*/
  width: 100%;
  display: grid;
  place-items: center;
`;

const ImageSlide = styled.div`
  /* Display and Box Model  Properties*/
  width: 80%;
  height: 75vh;
  /* Other Properties */
  overflow: hidden;
  /* Media Query*/
  @media screen and (max-width: 1024px) {
    /* Display and Box Model  Properties*/
    width: calc(95% - 4vw);
    height: 60vw;
  }
`;

const SlideAnimation = keyframes`
from{
  /* Positioning  Properties*/
  transform:translateX(180%);
}
to{
  /* Positioning  Properties*/
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
  animation: ${SlideAnimation} 400ms ease-in-out;
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
  width: min(275px, 75%);
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* Color  Properties*/
  background-color: var(--col-neutral-black);
  color: #fff;
  /* Media Query*/
  @media screen and (max-width: 768px) {
    /* Positioning  Properties*/
    top: calc(104% + 4vw);
  }
`;

const SlideIndicator = styled.div``;

const Dot = styled.span`
  /* Display and Box Model  Properties*/
  border-radius: 50%;
  margin: 0 6px;
  width: ${({ $active }) => ($active ? "8px" : "7px")};
  aspect-ratio: 1;
  display: inline-block;
  /* Color  Properties*/
  background: ${({ $active }) =>
    $active ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.25)"};
  /* Other Properties */
  cursor: pointer;
  @media screen and (max-width: 420px) {
    /* Display and Box Model  Properties*/
    margin: 0 4px;
  }
`;

const ViewProduct = styled(LinkRouter)`
  /* Positioning  Properties*/
  position: absolute;
  bottom: 2%;
  right: 10%;
  transform: translate(-50%, -50%);
  z-index: 9;
  /* Display and Box Model  Properties*/
  border-radius: 50%;
  width: 35px;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Color Properties */
  background-color: #000;
  color: #fff;
  /* Media Query*/
  @media screen and (min-width: 768px) {
    /* Display and Box Model  Properties*/
    display: none;
  }
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
  background-color: hsla(0, 0%, 96%, 0.75);
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
  display: grid;
  place-items: center;
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
const RightRedoArrow = styled(IoArrowRedoCircleOutline)(ArrowStyling);

export {
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
};
