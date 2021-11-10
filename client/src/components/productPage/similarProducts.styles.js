import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { BiPlusMedical } from "react-icons/bi";
import {
  defaultContainer,
  defaultHeading,
} from "components/shared/shared.styles";

const Container = styled(defaultContainer)`
  /* Display and Box Model  Properties*/
  padding: 0;
  flex-flow: column nowrap;
`;
const Heading = styled(defaultHeading)``;

const Wrapper = styled.div`
  /* Display and Box Model  Properties*/
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
  justify-items: center;
  /* Media Query */
  @media screen and (min-width: 480px) {
    /* Display and Box Model  Properties*/
    margin: 24px 0;
    padding: 16px;
    gap: 32px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  /* Media Query */
  @media screen and (max-width: 380px) {
    /* Display and Box Model  Properties*/
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;

const ProductCard = styled(LinkRouter)`
  /* Display and Box Model  Properties*/
  border-radius: 4px;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  /* Color Properties */
  background-color: #f9f9f9;
  /* Media Query */
  @media screen and (min-width: 480px) {
    /* Display and Box Model  Properties*/
    width: 100%;
  }
`;

const ProductImage = styled.img`
  /* Display and Box Model  Properties*/
  padding: 8px;
  width: 100%;
`;

const ProductDetails = styled.div`
  /* Display and Box Model  Properties*/
  width: 100%;
`;

const ProductName = styled.div`
  /* Display and Box Model  Properties*/
  padding: 8px 4px;
`;

const ProductPrice = styled.div`
  /* Display and Box Model  Properties*/
  padding: 4px;
  display: flex;
  align-items: center;
  /* Text  Properties*/
  font-family: sans-serif;
  font-size: 16px;
`;

const Price = styled.p`
  /* Color  Properties*/
  color: #505d68;
`;

const Discount = styled.sup`
  /* Display and Box Model  Properties*/
  padding: 0 24px 0 8px;
  /* Color  Properties*/
  color: #a1aeb7;
  /* Text  Properties*/
  text-decoration: line-through;
`;

const BtnWrapper = styled.div`
  /* Positioning  Properties*/
  position: relative;
  width: 75px;
  aspect-ratio: 1;
  /* Display and Box Model  Properties*/
  border-radius: 50%;
  /* Color  Properties*/
  background-color: #fff;
`;

const PlusIcon = styled(BiPlusMedical)`
  /* Positioning  Properties*/
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* Text  Properties*/
  font-size: 32px;
`;

const Text = styled.p`
  /* Display and Box Model  Properties*/
  margin: 8px 0;
`;

export {
  Container,
  Heading,
  Wrapper,
  ProductCard,
  ProductImage,
  ProductDetails,
  ProductName,
  ProductPrice,
  Price,
  Discount,
  BtnWrapper,
  PlusIcon,
  Text,
};
