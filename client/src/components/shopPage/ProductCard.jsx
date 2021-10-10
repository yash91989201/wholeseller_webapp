import React from "react";

import {
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
  MoreDetails,
  RightArrow,
  OutlineStar,
  StarHalfFilled,
  StarIcon,
} from "./productCard.styles";

const ProductCard = ({
  productImage,
  productName,
  productPrice,
  discountAmount,
  onOffer,
  rating,
  isLoggedIn,
}) => {
  return (
    <Container>
      <ImageWrapper>
        <ProductImage src={productImage} alt="productimage" />
      </ImageWrapper>
      <ProductDescriptionWrapper>
        <ProductName>{productName}</ProductName>
        <ProductRating>
          <StarIcon />
          <StarIcon />
          <StarHalfFilled />
          <OutlineStar />
          <OutlineStar />
        </ProductRating>
        <ProductPrice>
          <Price>
            ₹{productPrice}
            {onOffer && <Discount>₹{productPrice + discountAmount}</Discount>}
          </Price>
          {onOffer && (
            <OfferTag>
              {Math.floor(
                (discountAmount / (discountAmount + productPrice)) * 100
              )}
              % Off
            </OfferTag>
          )}
        </ProductPrice>
        {isLoggedIn && (
          <BtnLinkWrapper>
            <AddToCart>Add To Cart</AddToCart>
            <MoreDetails>
              More Details <RightArrow />
            </MoreDetails>
          </BtnLinkWrapper>
        )}
      </ProductDescriptionWrapper>
    </Container>
  );
};

export default ProductCard;
