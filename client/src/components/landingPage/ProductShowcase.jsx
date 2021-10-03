import React from "react";

import {
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
} from "./productShowcaseElements";
import productImageLink from "assets/images/pda.png";

const products = [
  {
    key: 1,
    imageLink: productImageLink,
  },
  {
    key: 2,
    imageLink: productImageLink,
  },
  {
    key: 3,
    imageLink: productImageLink,
  },
  {
    key: 4,
    imageLink: productImageLink,
  },
];

const ProductShowcase = () => {
  return (
    <Container>
      <Heading>Our Products</Heading>
      <Wrapper>
        <Products>
          {products.map((product) => (
            <ProductCard key={product.key}>
              <ProductImage src={product.imageLink} />
              <TextWrapper>
                <ProductName>Samsung Galaxy PDA</ProductName>
                <Price>
                  $0.25
                  <Discount>$0.75</Discount>
                </Price>
                <BtnLinkWrapper>
                  <ProductLink>
                    View Product <RightArrow />
                  </ProductLink>
                </BtnLinkWrapper>
              </TextWrapper>
            </ProductCard>
          ))}
        </Products>
      </Wrapper>
    </Container>
  );
};

export default ProductShowcase;
