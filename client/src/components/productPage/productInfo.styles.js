import styled, { css } from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { BsArrowBarUp } from "react-icons/bs";

import {
  defaultContainer,
  defaultHeading,
  OfferTag,
} from "components/shared/shared.styles";

const Container = styled(defaultContainer)`
  /* Display and Box Model  Properties*/
  padding: 0;
  @media screen and (min-width: 1024px) {
    /* Display and Box Model  Properties*/
    padding: 32px 0;
  }
`;

const Wrapper = styled.div`
  /* Positioning Properties */
  position: relative;
  /* Display and Box Model  Properties*/
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  @media screen and (min-width: 1024px) {
    /* Display and Box Model  Properties*/
    padding: 0;
    width: 95%;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const ProductImageContainer = styled.div`
  /* Display and Box Model  Properties*/
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  /* Media Query */
  @media screen and (min-width: 1024px) {
    /* Display and Box Model  Properties*/
    width: 35%;
  }
`;

const ImageWrapper = styled.div`
  /* Display and Box Model  Properties*/
  width: min(100%, 468px);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  /* Media Query */
  @media screen and (min-width: 1024px) {
    /* Display and Box Model  Properties*/
    border: 1px solid #424b5a;
    width: 100%;
    height: 380px;
  }
`;

const Image = styled.img`
  width: 100%;
  @media screen and (min-width: 1024px) {
    padding: 16px;
  }
`;

const ImagePreviewWrapper = styled.div`
  /* Display and Box Model  Properties*/
  display: none;
  /* Media Query */
  @media screen and (min-width: 1024px) {
    /* Display and Box Model  Properties*/
    width: 100%;
    display: flex;
    flex-flow: row wrap;
  }
`;

const PreviewImage = styled.img`
  width: 25%;
  margin: 6px;
  opacity: ${({ $previewActive }) => ($previewActive ? "1" : "0.4")};
  cursor: pointer;
`;

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
  /* Media Query */
  @media screen and (min-width: 1024px) {
    /* Display and Box Model  Properties*/
    display: none;
  }
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
  /* Display and Box Model  Properties*/
  width: 95%;
  padding: 8px 0;
  @media screen and (min-width: 1024px) {
    /* Display and Box Model  Properties*/
    width: 64%;
    padding: 0;
  }
`;

const ProductName = styled(defaultHeading)`
  /* Display and Box Model  Properties*/
  padding: 8px 0;
  width: min(100%, 768px);
  /* Text Properties */
  font-size: 18px;
  text-align: left;
  @media screen and (min-width: 1024px) {
    /* Display and Box Model  Properties*/
    padding: 0;
    /* Text Properties */
    font-size: 28px;
  }
`;

const ReviewLinkScroll = styled(LinkScroll)`
  /* Text Properties */
  font-size: 12px;
`;

const ProductPrice = styled.div`
  /* Display and Box Model  Properties*/
  padding: 8px 0;
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
  padding: 16px 0;
  /* Text Properties */
  font-size: 14px;
`;

const AddToCart = styled(LinkRouter)`
  /* Display and Box Model  Properties*/
  border: 1px solid #424b5a;
  border-radius: 4px;
  margin: 0 16px;
  padding: 6px 12px;
  /* Color  Properties*/
  color: #424b5a;
  /* Text  Properties*/
  font-weight: 700;
`;

const BuyNow = styled(LinkRouter)`
  /* Display and Box Model  Properties*/
  border-radius: 4px;
  padding: 6px 16px;
  /* Color  Properties*/
  background-color: #424b5a;
  color: #fff;
`;

const ProductVariant = styled.div`
  /* Display and Box Model  Properties*/
  padding: 8px 0;
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

const MobileNavigation = styled.section`
  /* Positioning Properties */
  position: fixed;
  top: 80px;
  /* Display and Box Model  Properties*/
  width: 100%;
  height: 40px;
  display: ${({ $setVisiblity }) => ($setVisiblity ? "flex" : "none")};
  align-items: center;
  /* Color Properties */
  background-color: #424b5a;
  color: #fff;
  /* Media Query */
  @media screen and (min-width: 768px) {
    /* Display and Box Model  Properties*/
    display: none;
  }
`;
const NavLink = styled(LinkScroll)`
  margin-left: ${({ $btn }) => ($btn ? "auto" : "12px")};
  margin-right: 8px;
  &.active {
    border-bottom: 2px solid #fff;
  }
`;

const ProductDescription = styled.div`
  /* Display and Box Model  Properties*/
  padding: 24px 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  /* Media Query */
  @media screen and (min-width: 768px) {
    /* Display and Box Model  Properties*/
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
`;

const DescriptionHeading = styled(defaultHeading)`
  /* Display and Box Model  Properties*/
  padding: 8px 0;
  /* Text  Properties*/
  font-size: 18px;
  text-align: left;
  /* Media Query */
  @media screen and (min-width: 768px) {
    /* Display and Box Model  Properties*/
    padding: 0;
  }
`;

const DescriptionText = styled.p`
  /* Text  Properties*/
  line-height: 22px;
  /* Media Query */
  @media screen and (min-width: 768px) {
    /* Display and Box Model  Properties*/
    max-width: 75%;
    padding: 0 24px;
  }
`;

const ProductSpecification = styled.div`
  /* Display and Box Model  Properties*/
  padding: 32px 0;
  width: min(768px, 100%);
`;

const SpecTable = styled.div`
  /* Display and Box Model  Properties*/
  border: 1px solid #333;
  width: 100%;
`;
const TableRow = styled.div`
  /* Display and Box Model  Properties*/
  padding: 6px;
  display: flex;
`;
const SpecHeader = styled.div`
  /* Display and Box Model  Properties*/
  width: min(200px, 35%);
`;
const SpecDescription = styled.div``;

const Heading = styled(defaultHeading)`
  /* Display and Box Model  Properties*/
  border: 1px solid #333;
  border-bottom: 0px;
  padding: 8px;
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
const UpArrow = styled(BsArrowBarUp)`
  /* Display and Box Model  Properties*/
  border-radius: 4px;
  padding: 6px;
  display: block;
  /* Color Properties */
  background-color: #fff;
  color: #000;
  /* Text Properties */
  font-size: 32px;
`;

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
  MobileNavigation,
  NavLink,
  ProductDescription,
  DescriptionHeading,
  DescriptionText,
  ProductSpecification,
  SpecTable,
  TableRow,
  SpecHeader,
  SpecDescription,
  Heading,
  LeftArrow,
  RightArrow,
  UpArrow,
};
