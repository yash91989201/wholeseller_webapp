import styled, { css, keyframes } from "styled-components";
import { TiMediaPlay } from "react-icons/ti";

// MICRO CSS Styling
const makeUnselectable = css`
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
`;

// Animated Styling
const Animation = {
  BackNForth: keyframes`
      0% {
      transform:translateX(-2.5px);
    }
    50% {
      transform:translateX(5px);

    }
    100% {
      transform:translateX(-2.5px);

    }`,
  Shimmer: keyframes`
    from{
      /* Positioning  Properties*/
      left:0;
    }
    to{
      /* Positioning  Properties*/
      left:150%;
    }
    `,
};

// MACRO UI Elements
const defaultContainer = styled.section`
  /* Display and Box Model  Properties*/
  padding: 32px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Micro UI Elements

//  ATOMIC UI Elements
const OfferTag = styled.p`
  /* Positioning  Properties*/
  position: relative;
  /* Display and Box Model  Properties*/
  border-radius: 12px;
  padding: 4px 6px;
  /* Color  Properties*/
  background-color: #424b5a;
  color: #fff;
  /* Text  Properties*/
  font-size: 12px;
  /* Other Properties */
  overflow: hidden;
  /* Pseudo Class Properties*/
  &::after {
    /* Positioning  Properties*/
    position: absolute;
    top: -10px;
    left: -16px;
    transform: translate(-50%, -50%);
    transform: skew(-35deg);
    /* Display and Box Model  Properties*/
    box-shadow: 0 0 30px 30px rgba(255, 255, 255, 0.05);
    width: 16px;
    height: 40px;
    /* Color  Properties*/
    background-color: red;
    background: rgba(255, 255, 255, 0.2);
    /* Other Properties */
    content: "";
    /* Animation Properties */
    animation: ${Animation.Shimmer} 1.25s ease-in-out infinite;
  }
`;

const defaultHeading = styled.h1`
  /* Display and Box Model  Properties*/
  padding: 32px 0;
  /* Color  Properties*/
  color: var(--col-neutral-black);
  /* Text  Properties*/
  font-size: clamp(24px, 8vw, 32px);
  text-align: center;
`;

const AnimatedRightArrow = styled(TiMediaPlay)`
  /* Animation Properties */
  animation: ${Animation.BackNForth} 2s linear infinite;
`;

export {
  makeUnselectable,
  defaultContainer,
  OfferTag,
  defaultHeading,
  AnimatedRightArrow,
};
