import styled from "styled-components";
// import { BsArrowBarUp } from "react-icons/bs";
import {
  defaultContainer as Container,
  BtnLink,
  BtnScroll,
} from "components/shared/shared.styles";

const BtnLinkSolid = styled(BtnLink.Ghost).attrs((props) => {
  props.$rounded = 40;
  props.$margin = [8, 16];
  props.$padding = [8, 32];
})``;
// const BtnLinkGhost = styled(BtnLink.Ghost)``;
// const BtnLinkText = styled(BtnLink.Text)``;
// const BtnLinkIcon = styled(BtnLink.Icon)``;

const BtnScrollSolid = styled(BtnScroll.Solid)``;
// const BtnScrollGhost = styled(BtnScroll.Ghost)``;
// const BtnScrollText = styled(BtnScroll.Text)``;
// const BtnScrollIcon = styled(BtnScroll.Icon)``;

const ProductReview = () => {
  return (
    <Container>
      <BtnLinkSolid>Review</BtnLinkSolid>
      <BtnScrollSolid>{/* <BsArrowBarUp /> */}</BtnScrollSolid>
    </Container>
  );
};

export default ProductReview;
