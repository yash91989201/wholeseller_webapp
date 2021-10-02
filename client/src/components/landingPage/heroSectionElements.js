import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

import {
  defaultContainer,
  defaultHeading,
  makeUnselectable,
} from "components/shared/utilityStyling";

const Container = styled(defaultContainer)`
  ${makeUnselectable}

  /* Display and Box Model  Properties*/
  padding:0;
`;

const Wrapper = styled.div`
  /* Display and Box Model  Properties*/
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  /* Media Query */
  @media screen and (min-width: 768px) {
    /* Display and Box Model  Properties*/
    padding: 24px 0;
    flex-flow: row nowrap;
  }
`;

const Image = styled.img`
  /* Display and Box Model  Properties*/
  width: min(100%, 480px);

  /* Media Query */
  @media screen and (min-width: 420px) {
    /* Display and Box Model  Properties*/
    padding: 2.5vw;
  }

  /* Media Query */
  @media screen and (min-width: 768px) {
    /* Display and Box Model  Properties*/
    width: min(80%, 700px);
  }
`;

const TextWrapper = styled.div`
  /* Display and Box Model  Properties*/
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled(defaultHeading)`
  /* Display and Box Model  Properties*/
  max-width: 275px;
`;

const Description = styled.p`
  /* Display and Box Model  Properties*/
  width: min(85%, 480px);
  margin: 16px 0;

  /* Text  Properties*/
  text-align: center;
  line-height: 24px;
`;

const BtnLinkWrapper = styled.div`
  /* Display and Box Model  Properties*/
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const JoinBtn = styled(LinkRouter)`
  /* Display and Box Model  Properties*/
  padding: 12px 16px;
  border-radius: 5px;
  /* Color  Properties*/
  color: #fff;
  background-color: #424b5a;
  /* Text  Properties*/
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1.25px;
  text-align: center;
`;
const KnowMoreBtn = styled(LinkScroll)`
  /* Display and Box Model  Properties*/
  margin-top: 16px;

  /* Text  Properties*/
  text-align: center;
  text-decoration: underline;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 1.25px;

  /* Other  Properties*/
  cursor: pointer;
`;

export { AnimatedRightArrow } from "../shared/utilityStyling";

export {
  Container,
  Wrapper,
  Image,
  TextWrapper,
  Heading,
  Description,
  BtnLinkWrapper,
  JoinBtn,
  KnowMoreBtn,
};
