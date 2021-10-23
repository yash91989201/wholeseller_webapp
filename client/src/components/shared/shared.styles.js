import styled, { css, keyframes } from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
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
const BtnLink = {
  Solid: styled(LinkRouter)`
    /* Positioning  Properties*/
    position: relative;
    /* Display and Box Model  Properties*/
    border-radius: ${({ $rounded }) => `${$rounded}px`};
    margin: ${({ $margin }) => `${$margin[0]}px ${$margin[1]}px`};
    padding: ${({ $padding }) => `${$padding[0]}px ${$padding[1]}px`};
    display: flex;
    justify-content: center;
    align-items: center;
    /* Color  Properties*/
    background-color: var(--col-accent);
    color: #fff;
    /* Animation Properties */
    transition: all 200ms ease-in;
    /* Pseudo Class Properties*/
    &:hover {
      transform: scale(1.0625) translateY(-2px);
      box-shadow: rgba(0, 0, 0, 0.2) 0px 15px 20px -5px;
    }
    &:active {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
      transform: scale(0.96);
    }
  `,
  Ghost: styled(LinkRouter)`
    /* Positioning  Properties*/
    position: relative;
    /* Display and Box Model  Properties*/
    border: 1.125px solid var(--col-accent);
    border-radius: ${({ $rounded }) => `${$rounded}px ${$rounded}px`};
    margin: ${({ $margin }) => `${$margin[0]}px ${$margin[1]}px`};
    padding: ${({ $padding }) => `${$padding[0]}px ${$padding[1]}px`};
    display: flex;
    justify-content: center;
    align-items: center;
    /* Color  Properties*/
    color: var(--col-neutral-black);
    /* Animation Properties */
    transition: all 200ms ease-in;
    /* Pseudo Class Properties*/
  `,
  Text: styled(LinkRouter)`
    /* Positioning  Properties*/
    position: relative;
    /* Display and Box Model  Properties*/
    margin: ${({ $margin }) => `${$margin[0]}px ${$margin[1]}px`};
    padding: ${({ $padding }) => `${$padding[0]}px ${$padding[1]}px`};
    /* Color  Properties*/
    color: var(--col-neutral-black);
    /* Animation Properties */
    transition: all 200ms ease-in;
    /* Pseudo Class Properties*/
  `,
  Icon: styled(LinkRouter)`
    /* Positioning  Properties*/
    position: relative;
    /* Display and Box Model  Properties*/
    border-radius: 50%;
    margin: ${({ $margin }) => `${$margin[0]}px ${$margin[1]}px`};
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* Color  Properties*/
    background-color: var(--col-secondary);
    color: var(--col-neutral-white);
    /* Animation Properties */
    transition: all 200ms ease-in;
    /* Pseudo Class Properties*/
  `,
};

const BtnScroll = {
  Solid: styled(LinkScroll)`
    /* Positioning  Properties*/
    position: relative;
    /* Display and Box Model  Properties*/
    border-radius: ${({ $rounded }) => `${$rounded}px`};
    margin: ${({ $margin }) => `${$margin[0]}px ${$margin[1]}px`};
    padding: ${({ $padding }) => `${$padding[0]}px ${$padding[1]}px`};
    display: flex;
    justify-content: center;
    align-items: center;
    /* Color  Properties*/
    background-color: var(--col-accent);
    color: #fff;
    /* Other Properties */
    cursor: pointer;
    /* Animation Properties */
    transition: all 200ms ease-in;
    /* Pseudo Class Properties*/
    &:hover {
      transform: scale(1.0625) translateY(-2px);
      box-shadow: rgba(0, 0, 0, 0.2) 0px 15px 20px -5px;
    }
    &:active {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
      transform: scale(0.96);
    }
  `,
  Ghost: styled(LinkScroll)`
    /* Positioning  Properties*/
    position: relative;
    /* Display and Box Model  Properties*/
    border: 1.125px solid var(--col-accent);
    border-radius: ${({ $rounded }) => `${$rounded}px ${$rounded}px`};
    margin: ${({ $margin }) => `${$margin[0]}px ${$margin[1]}px`};
    padding: ${({ $padding }) => `${$padding[0]}px ${$padding[1]}px`};
    display: flex;
    justify-content: center;
    align-items: center;
    /* Color  Properties*/
    color: var(--col-neutral-black);
    /* Animation Properties */
    transition: all 200ms ease-in;
    /* Pseudo Class Properties*/
  `,
  Text: styled(LinkScroll)`
    /* Positioning  Properties*/
    position: relative;
    /* Display and Box Model  Properties*/
    margin: ${({ $margin }) => `${$margin[0]}px ${$margin[1]}px`};
    padding: ${({ $padding }) => `${$padding[0]}px ${$padding[1]}px`};
    /* Color  Properties*/
    color: var(--col-neutral-black);
    /* Animation Properties */
    transition: all 200ms ease-in;
    /* Pseudo Class Properties*/
  `,
  Icon: styled(LinkScroll)`
    /* Positioning  Properties*/
    position: relative;
    /* Display and Box Model  Properties*/
    border-radius: 50%;
    margin: ${({ $margin }) => `${$margin[0]}px ${$margin[1]}px`};
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* Color  Properties*/
    background-color: var(--col-secondary);
    color: var(--col-neutral-white);
    /* Animation Properties */
    transition: all 200ms ease-in;
    /* Pseudo Class Properties*/
  `,
};

//  ATOMIC UI Elements
const OfferTag = styled.p`
  /* Positioning  Properties*/
  position: relative;
  /* Display and Box Model  Properties*/
  border-radius: 12px;
  padding: 4px 8px;
  /* Color  Properties*/
  background-color: var(--col-secondary);
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
  font-size: clamp(24px, 32px, 8vh);
  text-align: center;
`;

const AnimatedRightArrow = styled(TiMediaPlay)`
  /* Animation Properties */
  animation: ${Animation.BackNForth} 2s linear infinite;
`;

export {
  makeUnselectable,
  defaultContainer,
  BtnLink,
  BtnScroll,
  OfferTag,
  defaultHeading,
  AnimatedRightArrow,
};
