import styled, { css } from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import {
  defaultContainer,
  defaultHeading,
  OfferTag,
} from "components/shared/shared.styles";

const Container = styled(defaultContainer)`
  /* Display and Box Model  Properties*/
  padding: 0;
`;

const Wrapper = styled.div`
  /* Display and Box Model  Properties*/
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const ProductImageContainer = styled.div`
  /* Display and Box Model  Properties*/
`;

const ImageWrapper = styled.div`
  /* Display and Box Model  Properties*/
  width: min(100%, 468px);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
`;

const ImagePreviewWrapper = styled.div`
  /* Display and Box Model  Properties*/
  display: none;
  /* Media Query */
  @media screen and (min-width: 1024px) {
    /* Display and Box Model  Properties*/
    display: flex;
  }
`;

const PreviewImage = styled.img``;

const SlideControl = styled.div`
  /* Display and Box Model  Properties*/
  border-radius: 25px;
  padding: 0 8px;
  margin: 16px 0;
  width: min(275px, 60%);
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* Color  Properties*/
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  /* Media Query*/
`;

const SlideIndicator = styled.div``;

const Dot = styled.span`
  /* Display and Box Model  Properties*/
  border-radius: 50%;
  margin: 0 6px;
  width: ${({ $active }) => ($active ? "8px" : "7px")};
  aspect-ratio: 1;
  display: inline-block;
  /* Color  Properties*/
  background: ${({ $active }) =>
    $active ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.25)"};
  /* Other Properties */
  cursor: pointer;
  @media screen and (max-width: 420px) {
    /* Display and Box Model  Properties*/
    margin: 0 4px;
  }
`;

const ProductDetails = styled.div`
  width: 90%;
`;

const ProductName = styled(defaultHeading)`
  /* Display and Box Model  Properties*/
  padding: 8px 0;
  /* Text Properties */
  font-size: 18px;
  text-align: left;
`;

const ReviewLinkScroll = styled(LinkScroll)`
  /* Text Properties */
  font-size: 12px;
`;

const ProductPrice = styled.div`
  /* Display and Box Model  Properties*/
  padding: 16px 0;
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
  margin: 8px 0;
  /* Text Properties */
  font-size: 14px;
`;

const AddToCart = styled(LinkRouter)`
  /* Display and Box Model  Properties*/
  border-radius: 4px;
  padding: 6px 12px;
  /* Color  Properties*/
  background-color: #424b5a;
  color: #fff;
`;

const BuyNow = styled(LinkRouter)`
  /* Display and Box Model  Properties*/
  border: 1px solid #424b5a;
  border-radius: 4px;
  margin: 0 24px;
  padding: 6px 12px;
  /* Color  Properties*/
  color: #424b5a;
  /* Text  Properties*/
  font-weight: 700;
`;

const ProductVariant = styled.div`
  /* Display and Box Model  Properties*/
  margin: 24px 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
`;

const VariantWrapper = styled.div`
  /* Display and Box Model  Properties*/
  margin: 8px 0;
  display: flex;
  align-items: flex-start;
`;

const Category = styled.h4`
  /* Display and Box Model  Properties*/
  width: 20%;
  /* Color  Properties*/
  color: #424b5a;
`;

const Variant = styled(LinkRouter)`
  /* Display and Box Model  Properties*/
  border: 1.5px solid
    ${({ $variantActive }) => ($variantActive ? "#2874f0" : "#424b5a")};
  border-radius: 4px;
  margin: 0 8px;
  padding: 4px 8px;
  /* Color  Properties*/
  color: ${({ $variantActive }) => ($variantActive ? "#2874f0" : "#424b5a")};
  /* Text  Properties*/
  font-size: 14px;
  font-weight: 900;
`;

const ProductDescription = styled.div`
  /* Display and Box Model  Properties*/
  margin: 16px 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`;

const DescriptionHeading = styled(defaultHeading)`
  /* Display and Box Model  Properties*/
  padding: 16px 0;
  /* Text  Properties*/
  font-size: 18px;
  text-align: left;
`;

const DescriptionText = styled.p`
  /* Display and Box Model  Properties*/
  /* Text  Properties*/
  line-height: 22px;
`;

const ProductSpecification = styled.div`
  /* Display and Box Model  Properties*/
  border: 1px solid #424b5a;
`;

const Heading = styled(defaultHeading)`
  /* Display and Box Model  Properties*/
  padding: 8px 0;
  /* Text Properties */
  font-size: 24px;
  text-align: left;
`;

const ArrowStyling = css`
  /* Text  Properties*/
  font-size: 24px;
  /* Other Properties */
  cursor: pointer;
`;

const LeftArrow = styled(MdKeyboardArrowLeft)(ArrowStyling);
const RightArrow = styled(MdKeyboardArrowRight)(ArrowStyling);

export {
  Container,
  Wrapper,
  ProductImageContainer,
  ImagePreviewWrapper,
  PreviewImage,
  SlideControl,
  SlideIndicator,
  Dot,
  ImageWrapper,
  Image,
  ProductDetails,
  ProductName,
  ReviewLinkScroll,
  ProductPrice,
  Price,
  Discount,
  OfferTag,
  BtnLinkWrapper,
  AddToCart,
  BuyNow,
  ProductVariant,
  Category,
  VariantWrapper,
  Variant,
  ProductDescription,
  DescriptionHeading,
  DescriptionText,
  ProductSpecification,
  Heading,
  LeftArrow,
  RightArrow,
};
