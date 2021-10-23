import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { RiArrowDropRightLine } from "react-icons/ri";
import { RiStarSLine, RiStarHalfSLine, RiStarSFill } from "react-icons/ri";

import { BtnLink, OfferTag } from "components/shared/shared.styles";

const Container = styled.div`
  /* Display and Box Model  Properties*/
  border: 1.5px solid var(--col-neutral-black);
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

const AddToCart = styled(BtnLink.Solid).attrs((props) => {
  props.$rounded = 4;
  props.$margin = [0, 0];
  props.$padding = [8, 32];
})`
  /*  Media Query */
  @media screen and (min-width: 420px) {
    /* Display and Box Model  Properties*/
    margin: 0;
    padding: 6px 16px;
  }
`;

const MoreDetails = styled(BtnLink.Ghost).attrs((props) => {
  props.$rounded = 4;
  props.$margin = [0, 0];
  props.$padding = [8, 32];
})`
  /* Other Properties */
  overflow: hidden;
  /* Pseudo Properties */
  &:hover {
    /* Color Properties */
    color: var(--col-neutral-white);
    /* Text Properties */
    font-weight: bolder;
  }
  &:after {
    /* Positioning Properties */
    position: absolute;
    top: 0;
    left: 0;
    transition: all 200ms ease-in-out;
    z-index: -9;
    /* Display and Box Model  Properties*/
    content: "";
    width: 0;
    height: 100%;
    background: var(--col-accent);
  }
  &:hover:after {
    /* Display and Box Model  Properties*/
    width: 100%;
  }
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
