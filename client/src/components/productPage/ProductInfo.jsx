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
} from "./productInfo.styles.js";

import { useScrollToTop } from "customHooks";

import { SliderData } from "components/shopPage/sliderData.js";

const productPrice = 125.2;
const onOffer = true;
const discountAmount = 25;
const ProductPage = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const [isVisible, scrollToTop] = useScrollToTop(520);
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
            <SlideControl>
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
        <MobileNavigation $setVisiblity={isVisible}>
          <NavLink
            to="productDescription"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-120}
          >
            Description
          </NavLink>
          <NavLink
            to="productSpecification"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-110}
          >
            Specs
          </NavLink>
          <NavLink
            to="userReviews"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-100}
          >
            Reviews
          </NavLink>

          <NavLink $btn={true} onClick={scrollToTop}>
            <UpArrow />
          </NavLink>
        </MobileNavigation>
        <ProductDetails>
          <ProductName>Samsung Galaxy Note 10 PDA</ProductName>
          <ReviewLinkScroll
            to="userReviews"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-120}
          >
            See Reviews
          </ReviewLinkScroll>
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
            <BuyNow>Buy Now</BuyNow>
            <AddToCart>Add To Cart</AddToCart>
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

          <ProductDescription id="productDescription">
            <DescriptionHeading>Description :</DescriptionHeading>
            <DescriptionText>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
              amet ipsam expedita reprehenderit voluptates. Totam sequi maiores
              explicabo asperiores voluptatem aperiam qui repudiandae id iusto
            </DescriptionText>
          </ProductDescription>
          <ProductSpecification id="productSpecification">
            <Heading>Product Specifications</Heading>
            <SpecTable>
              <TableRow>
                <SpecHeader>Model Number</SpecHeader>
                <SpecDescription>MZB08T8IN</SpecDescription>
              </TableRow>
              <TableRow>
                <SpecHeader>Model Name </SpecHeader>
                <SpecDescription>X3 Pro</SpecDescription>
              </TableRow>
              <TableRow>
                <SpecHeader>Color </SpecHeader>
                <SpecDescription>Steel Blue</SpecDescription>
              </TableRow>
              <TableRow>
                <SpecHeader>SIM Type </SpecHeader>
                <SpecDescription>Dual Sim</SpecDescription>
              </TableRow>
            </SpecTable>
          </ProductSpecification>
        </ProductDetails>
      </Wrapper>
    </Container>
  );
};

export default ProductPage;
