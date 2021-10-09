import React from "react";

import {
  Container,
  Wrapper,
  ProductCount,
  ProductPagination,
  TogglePage,
  BtnLinkWrapper,
  PaginationBtnLink,
  LeftArrow,
  RightArrow,
} from "./productSection.styles";

import ProductCard from "./ProductCard";

import productImage from "assets/images/pda.png";

const productData = [
  {
    productImage,
    productName: "Samsung Galaxy PDA X-17 Z12",
    productPrice: 3.25,
    discountAmount: 2.25,
    onOffer: true,
    rating: 4.5,
  },
  {
    productImage,
    productName: "Samsung Galaxy PDA X-17 Z12",
    productPrice: 12.1,
    discountAmount: 24.25,
    onOffer: false,
    rating: 3,
  },
  {
    productImage,
    productName: "Samsung Galaxy PDA X-17 Z12",
    productPrice: 12.1,
    discountAmount: 24.25,
    onOffer: true,
    rating: 3,
  },
  {
    productImage,
    productName: "Samsung Galaxy PDA X-17 Z12",
    productPrice: 12.1,
    discountAmount: 24.25,
    onOffer: false,
    rating: 3,
  },
  {
    productImage,
    productName: "Samsung Galaxy PDA X-17 Z12",
    productPrice: 12.1,
    discountAmount: 24.25,
    onOffer: true,
    rating: 3,
  },
  {
    productImage,
    productName: "Samsung Galaxy PDA X-17 Z12",
    productPrice: 12.1,
    discountAmount: 24.25,
    onOffer: true,
    rating: 3,
  },
];
const prevPageAvailable = false;
const nextPageAvailable = true;
const isLoggedIn = false;

const ProductSection = () => {
  return (
    <Container>
      <Wrapper>
        <ProductCount>{productData.length} Product(s) Found</ProductCount>
        {productData.map((productDetails, index) => (
          <ProductCard
            key={index}
            {...productDetails}
            isLoggedIn={isLoggedIn}
          />
        ))}
      </Wrapper>
      <ProductPagination>
        <TogglePage $pageAvailable={prevPageAvailable}>
          <LeftArrow />
          Previous Page
        </TogglePage>
        <BtnLinkWrapper>
          <PaginationBtnLink>1</PaginationBtnLink>
          <PaginationBtnLink>2</PaginationBtnLink>
          <PaginationBtnLink>3</PaginationBtnLink>
          <PaginationBtnLink $disabled={true}>...</PaginationBtnLink>
          <PaginationBtnLink>15</PaginationBtnLink>
        </BtnLinkWrapper>
        <TogglePage $pageAvailable={nextPageAvailable}>
          Next Page <RightArrow />
        </TogglePage>
      </ProductPagination>
    </Container>
  );
};

export default ProductSection;
