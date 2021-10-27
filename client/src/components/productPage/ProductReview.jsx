import ReadMore from "components/shared/ReadMore";
import {
  Container,
  Heading,
  Wrapper,
  ReviewCard,
  StarRating,
  Description,
  ReviewText,
  UserName,
  Star,
} from "./productReview.styles";

const ProductReview = () => {
  return (
    <Container id="userReviews">
      <Wrapper>
        <Heading>Customer Reviews</Heading>
        <ReviewCard>
          <StarRating>
            3 <Star />
          </StarRating>
          <Description>
            Evo fox gamebox - a perfect casual gaming video game box
          </Description>
          <ReviewText>
            <ReadMore>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
              quasi voluptatibus eaque. Voluptatum aspernatur maxime maiores
              doloribus adipisci magnam accusantium molestias voluptatibus
              pariatur, exercitationem fugit, quas ut neque eos officiis vitae
            </ReadMore>
          </ReviewText>
          <UserName> &mdash; Yashraj Jaiswal</UserName>
        </ReviewCard>
        <ReviewCard>
          <StarRating>
            3 <Star />
          </StarRating>
          <Description>
            Evo fox gamebox - a perfect casual gaming video game box
          </Description>
          <ReviewText>
            <ReadMore>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
              quasi voluptatibus eaque. Voluptatum aspernatur maxime maiores
              doloribus adipisci magnam accusantium molestias voluptatibus
              pariatur, exercitationem fugit, quas ut neque eos officiis vitae
            </ReadMore>
          </ReviewText>
          <UserName> &mdash; Yashraj Jaiswal</UserName>
        </ReviewCard>
      </Wrapper>
    </Container>
  );
};

export default ProductReview;
