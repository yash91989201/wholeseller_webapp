import styled, { keyframes } from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { RiArrowDropRightLine } from "react-icons/ri";
import { RiStarSLine, RiStarHalfSLine, RiStarSFill } from "react-icons/ri";

const Container = styled.div`
  /* Display and Box Model  Properties*/
  border: 1.5px solid #424b5a;
  border-radius: 4px;
  margin: 16px 0;
  width: min(100%, 675px);
  display: flex;
  flex-flow: row nowrap;
  /* Media Query*/
  @media screen and (max-width: 420px) {
    /* Display and Box Model  Properties*/
    border-radius: 5px;
    width: 90%;
    flex-flow: column nowrap;
  }
  /* Media Query*/
  @media screen and (min-width: 421px) and (max-width: 1024px) {
    /* Media Query*/
    @media screen and (max-width: 435px) {
      /* Display and Box Model  Properties*/
      width: min(98%, 568px);
    }
    /* Display and Box Model  Properties*/
    width: min(95%, 568px);
  }
`;

const ImageWrapper = styled.div`
  /* Display and Box Model  Properties*/
  margin: 0 8px;
  width: min(50%, 175px);
  align-self: center;
  /* Media Query*/
  @media screen and (max-width: 420px) {
    /* Display and Box Model  Properties*/
    margin: 16px 0;
    width: 65%;
    /* Media Query*/
    @media screen and (min-width: 350px) {
      /* Display and Box Model  Properties*/
      width: 75%;
    }
  }
`;

const ProductImage = styled.img`
  /* Display and Box Model  Properties*/
  width: 100%;
`;

const ProductDescriptionWrapper = styled.div`
  /* Display and Box Model  Properties*/
  width: min(90%, 350px);
  align-self: center;
  /* Media Query*/
  @media screen and (max-width: 420px) {
    /* Display and Box Model  Properties*/
    width: 90%;
    align-self: center;
  }
`;

const ProductName = styled.h3`
  /* Display and Box Model  Properties*/
  padding: 8px 0;
`;

const ProductRating = styled.p``;

const ProductPrice = styled.div`
  /* Display and Box Model  Properties*/
  padding: 4px 0;
  display: flex;
  align-items: center;
  /* Text  Properties*/
  font-family: sans-serif;
`;

const Price = styled.p`
  /* Color  Properties*/
  color: #505d68;
  /* Text  Properties*/
  font-size: 24px;
`;

const Discount = styled.sup`
  /* Display and Box Model  Properties*/
  padding: 0 24px 0 8px;
  /* Color  Properties*/
  color: #a1aeb7;
  /* Text  Properties*/
  font-size: 12px;
  text-decoration: line-through;
`;

const ShimmerAnimation = keyframes`

  from{
    /* Positioning  Properties*/
    left:0;
}
  to{
    /* Positioning  Properties*/
    left:150%;
}
`;

const OfferTag = styled.p`
  /* Positioning  Properties*/
  position: relative;
  /* Display and Box Model  Properties*/
  border-radius: 12px;
  padding: 4px 8px;
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
    animation: ${ShimmerAnimation} 1.25s ease-in-out infinite;
  }
`;

const BtnLinkWrapper = styled.div`
  /* Display and Box Model  Properties*/
  display: flex;
  /* Media Query*/
  @media screen and (max-width: 420px) {
    /* Display and Box Model  Properties*/
    padding: 8px 0;
    flex-flow: column nowrap;
  }
  /* Media Query*/
  @media screen and (min-width: 420px) {
    /* Display and Box Model  Properties*/
    padding: min(8px, 8%) 0;
  }
`;

const AddToCart = styled.button`
  /* Display and Box Model  Properties*/
  border: 0;
  border-radius: 5px;
  margin-bottom: 8px;
  padding: 12px 0;
  /* Color  Properties*/
  background-color: #424b5a;
  /* Text  Properties*/
  color: #fff;
  /* Other Properties */
  outline: 0;
  cursor: pointer;
  /*  Media Query */
  @media screen and (min-width: 420px) {
    /* Display and Box Model  Properties*/
    margin: 0;
    padding: 6px 16px;
  }
`;

const MoreDetails = styled(LinkRouter)`
  /* Display and Box Model  Properties*/
  border: 1px solid #424b5a;
  border-radius: 2.5px;
  margin-bottom: 4px;
  padding: 4px 8px;
  /* Color  Properties*/
  background-color: transparent;
  /* Text  Properties*/
  color: #424b5a;
  /* Other Properties */
  outline: 0;
  /*  Media Query */
  @media screen and (min-width: 420px) {
    margin: 0;
    margin-left: 16px;
    padding: 6px 16px;
  }
`;

const RightArrow = styled(RiArrowDropRightLine)``;
const OutlineStar = styled(RiStarSLine)``;
const StarHalfFilled = styled(RiStarHalfSLine)``;
const StarIcon = styled(RiStarSFill)``;

export {
  Container,
  ImageWrapper,
  ProductImage,
  ProductDescriptionWrapper,
  ProductName,
  ProductRating,
  ProductPrice,
  Price,
  Discount,
  OfferTag,
  BtnLinkWrapper,
  AddToCart,
  RightArrow,
  MoreDetails,
  OutlineStar,
  StarHalfFilled,
  StarIcon,
};
