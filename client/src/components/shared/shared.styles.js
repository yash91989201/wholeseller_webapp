import styled, { css, keyframes } from "styled-components";
import { TiMediaPlay } from "react-icons/ti";

const defaultContainer = styled.section`
  /* Display and Box Model  Properties*/
  padding: 32px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const defaultHeading = styled.h1`
  /* Display and Box Model  Properties*/
  padding: 32px 0;
  /* Color  Properties*/
  color: #505d68;
  /* Text  Properties*/
  font-size: clamp(24px, 32px, 8vh);
  text-align: center;
`;

const makeUnselectable = css`
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
`;

const backNforthAnimation = keyframes`
   0% {
    transform:translateX(-2.5px);
  }
  50% {
    transform:translateX(5px);

  }
  100% {
    transform:translateX(-2.5px);

}
`;

const AnimatedRightArrow = styled(TiMediaPlay)`
  /* Animation Properties */
  animation: ${backNforthAnimation} 2s linear infinite;
`;

export {
  defaultContainer,
  defaultHeading,
  makeUnselectable,
  AnimatedRightArrow,
};
