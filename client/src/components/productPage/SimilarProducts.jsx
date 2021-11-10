import {
  Container,
  Wrapper,
  Heading,
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
} from "./similarProducts.styles";
import { OfferTag } from "components/shared/shared.styles";
import imageLink from "assets/images/pda.png";
const productData = [
  { productPrice: 150, discountAmount: 25.45, onOffer: false, imageLink },
  { productPrice: 10, discountAmount: 2.45, onOffer: true, imageLink },
  { productPrice: 150, discountAmount: 25.45, onOffer: false, imageLink },
  { productPrice: 15, discountAmount: 2.45, onOffer: true, imageLink },
  { productPrice: 150, discountAmount: 25.45, onOffer: false, imageLink },
  { productPrice: 150, discountAmount: 25.45, onOffer: false, imageLink },
  { productPrice: 250, discountAmount: 25.45, onOffer: true, imageLink },
];
const SimilarProducts = () => {
  return (
    <Container>
      <Heading>Similar Products</Heading>
      <Wrapper>
        {productData.map(
          ({ imageLink, productPrice, discountAmount, onOffer }, index) => (
            <ProductCard key={index}>
              <ProductImage src={imageLink} />
              <ProductDetails>
                <ProductName>Samsung Galaxy PDA-X178</ProductName>
                <ProductPrice>
                  <Price>
                    ₹{productPrice}
                    {onOffer && (
                      <Discount>₹{productPrice + discountAmount}</Discount>
                    )}
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
              </ProductDetails>
            </ProductCard>
          )
        )}
        <ProductCard>
          <BtnWrapper>
            <PlusIcon />
          </BtnWrapper>
          <Text>Load More</Text>
        </ProductCard>
      </Wrapper>
    </Container>
  );
};

export default SimilarProducts;
