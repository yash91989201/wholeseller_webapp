import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

import {
  defaultContainer,
  makeUnselectable,
} from "components/shared/utilityStyling";

// main container
const Container = styled(defaultContainer)`
  padding: 0;
  ${makeUnselectable}
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
`;

// container
const Image = styled.img`
  width: 100%;
`;

// container
const TextWrapper = styled.div`
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.h1`
  max-width: 200px;
  text-align: center;
`;
const Description = styled.p`
  margin: 16px 0;
  width: 85%;
  max-width: 480px;
  text-align: center;
  line-height: 24px;
`;

// container
const BtnLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const JoinBtn = styled(LinkRouter)`
  padding: 12px 16px;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1.25px;
  border-radius: 5px;
  color: #fff;
  background-color: #424b5a;
`;
const KnowMoreBtn = styled(LinkScroll)`
  cursor: pointer;
  margin-top: 16px;
  text-align: center;
  text-decoration: underline;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 1.25px;
`;

export { AnimatedRightArrow } from "../shared/utilityStyling";

export {
  Container,
  Wrapper,
  Image,
  TextWrapper,
  Header,
  Description,
  BtnLinkWrapper,
  JoinBtn,
  KnowMoreBtn,
};
