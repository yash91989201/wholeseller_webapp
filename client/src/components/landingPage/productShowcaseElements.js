import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { RiArrowDropRightLine } from "react-icons/ri";

import {
  makeUnselectable,
  defaultContainer,
} from "components/shared/utilityStyling";

const Container = styled(defaultContainer)`
  ${makeUnselectable}
  flex-flow:column nowrap;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
`;

const Heading = styled.h1`
  padding: 16px 0;
  text-align: center;
  font-size: 2.25vw;
`;

const Products = styled.div`
  padding: 16px;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const ProductCard = styled.div`
  margin: 16px auto;
  width: 80%;
  max-width: 300px;
  display: flex;
  flex-flow: column nowrap;
  border: 1px solid #a1aeb7;
  border-radius: 5px;
`;

const ProductImage = styled.img`
  border-radius: 5px;
`;

const TextWrapper = styled.div`
  width: 85%;
  margin: 16px auto;
`;

const ProductName = styled.h4`
  letter-spacing: 1.125px;
`;

const Price = styled.p`
  margin: 8px 0;
  font-size: 24px;
`;

const Discount = styled.sup`
  font-size: 16px;
  padding: 0 8px;
  color: #a1aeb7;
  text-decoration: line-through;
`;

const BtnLinkWrapper = styled.div``;

const ProductLink = styled(LinkRouter)`
  position: relative;
  &::after {
    content: "";
    background: black;
    position: absolute;
    bottom: 0;
    left: 1px;
    height: 1px;
    width: 80%;
  }
`;

const RightArrow = styled(RiArrowDropRightLine)``;

export {
  Container,
  Wrapper,
  Heading,
  Products,
  ProductCard,
  ProductImage,
  TextWrapper,
  ProductName,
  Price,
  Discount,
  BtnLinkWrapper,
  ProductLink,
  RightArrow,
};
