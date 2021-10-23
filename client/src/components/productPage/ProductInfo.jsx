import { useState } from "react";
import {
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
} from "./productInfo.styles.js";

import { SliderData } from "components/shopPage/sliderData.js";
const productPrice = 125.2;
const onOffer = true;
const discountAmount = 25;
const ProductPage = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const toggleSlide = (slideDirection, slideIndex) => {
    if (slideDirection === "prevSlide") {
      setCurrent(current === 0 ? length - 1 : current - 1);
    } else if (slideDirection === "nextSlide") {
      setCurrent(current === length - 1 ? 0 : current + 1);
    } else {
      setCurrent(slideIndex);
    }
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <Container>
      <Wrapper>
        <ProductImageContainer>
          <ImageWrapper>
            <Image src={SliderData[current].image} />
            <SlideControl data-head="2">
              <LeftArrow
                onClick={() => {
                  toggleSlide("prevSlide");
                }}
              />
              <SlideIndicator>
                {slides.map((_, index) => (
                  <Dot
                    key={index}
                    $active={current === index}
                    onClick={() => {
                      toggleSlide("", index);
                    }}
                  />
                ))}
              </SlideIndicator>
              <RightArrow
                onClick={() => {
                  toggleSlide("nextSlide");
                }}
              />
            </SlideControl>
          </ImageWrapper>
          <ImagePreviewWrapper>
            {SliderData.map((slide, index) => (
              <PreviewImage
                key={index}
                src={slide.image}
                onMouseEnter={() => setCurrent(index)}
                $previewActive={current === index}
              />
            ))}
          </ImagePreviewWrapper>
        </ProductImageContainer>
        <ProductDetails>
          <ProductName>Samsung Galaxy Note 10 PDA</ProductName>
          <ReviewLinkScroll>See Reviews</ReviewLinkScroll>
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
          <BtnLinkWrapper>
            <AddToCart>Add To Cart</AddToCart>
            <BuyNow>Buy Now</BuyNow>
          </BtnLinkWrapper>
          <ProductVariant>
            <VariantWrapper>
              <Category>Color</Category>
              <Variant $variantActive={true}>Red</Variant>
              <Variant>Blue</Variant>
              <Variant>Green</Variant>
            </VariantWrapper>
            <VariantWrapper>
              <Category>Ram</Category>
              <Variant>6GB</Variant>
              <Variant>8GB</Variant>
              <Variant $variantActive={true}>12GB</Variant>
            </VariantWrapper>
          </ProductVariant>
          <ProductDescription>
            <DescriptionHeading>Description :</DescriptionHeading>
            <DescriptionText>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
              amet ipsam expedita reprehenderit voluptates. Totam sequi maiores
              explicabo asperiores voluptatem aperiam qui repudiandae id iusto
            </DescriptionText>
          </ProductDescription>
          <ProductSpecification>
            <Heading>Product Specifications</Heading>
          </ProductSpecification>
        </ProductDetails>
      </Wrapper>
    </Container>
  );
};

export default ProductPage;
