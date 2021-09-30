import styled, { keyframes } from "styled-components";
import { TiMediaPlay } from "react-icons/ti";

const defaultContainer = styled.section`
  padding: 32px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const makeUnselectable = `
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
-o-user-select: none;
user-select: none;`;

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
  animation: ${backNforthAnimation} 2s linear infinite;
`;

export { defaultContainer, makeUnselectable, AnimatedRightArrow };
