import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { RiArrowDropRightLine } from "react-icons/ri";

import {
  defaultContainer,
  defaultHeading,
  makeUnselectable,
} from "components/shared/utilityStyling";

const Container = styled(defaultContainer)`
  ${makeUnselectable}
  /* Display and Box Model  Properties*/
  flex-flow:column nowrap;
`;

const Wrapper = styled.div`
  /* Display and Box Model  Properties*/
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
`;

const Heading = styled(defaultHeading)``;

const Products = styled.div`
  /* Display and Box Model  Properties*/
  padding: 16px 0;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  grid-gap: min(40px, 8vw) 0;
`;

const ProductCard = styled.div`
  /* Display and Box Model  Properties*/
  width: min(80%, 275px);
  margin: 16px auto;
  display: flex;
  flex-flow: column nowrap;
  border: 1px solid #a1aeb7;
  border-radius: 5px;
`;

const ProductImage = styled.img`
  /* Display and Box Model  Properties*/
  border-radius: 5px;
`;

const TextWrapper = styled.div`
  /* Display and Box Model  Properties*/
  width: 85%;
  margin: 16px auto;
`;

const ProductName = styled.h4`
  /* Text  Properties*/
  letter-spacing: 1.125px;
`;

const Price = styled.p`
  /* Display and Box Model  Properties*/
  margin: 8px 0;

  /* Text  Properties*/
  font-size: 24px;
`;

const Discount = styled.sup`
  /* Display and Box Model  Properties*/
  padding: 0 8px;

  /* Color  Properties*/
  color: #a1aeb7;

  /* Text  Properties*/
  font-size: 16px;
  text-decoration: line-through;
`;

const BtnLinkWrapper = styled.div``;

const ProductLink = styled(LinkRouter)`
  /* Display and Box Model  Properties*/

  position: relative;
  /* Pseudo-Class Properties */
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
