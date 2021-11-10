import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import {
  defaultContainer,
  defaultHeading,
} from "components/shared/shared.styles";

const Container = styled(defaultContainer)`
  /* Display and Box Model  Properties*/
  padding: 16px 0;
`;
const Wrapper = styled.div`
  /* Display and Box Model  Properties*/
  width: 95%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
`;
const Heading = styled(defaultHeading)`
  /* Display and Box Model  Properties*/
  padding: 8px 0;
  /* Text Properties */
  text-align: left;
`;
const ReviewCard = styled.div`
  /* Display and Box Model  Properties*/
  width: min(100%, 520px);
  margin: 4px 0 16px 0;
  display: flex;
  flex-flow: column wrap;
`;

const StarRating = styled.span`
  /* Display and Box Model  Properties*/
  border-radius: 2.5px;
  padding: 4px;
  width: 40px;
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
  /* Color  Properties*/
  background-color: var(--col-semantic-success);
  color: #fff;
`;

const Description = styled.p`
  /* Display and Box Model  Properties*/
  padding: 8px 0;
  width: min(480px, 100%);
`;
const ReviewText = styled.div`
  /* Display and Box Model  Properties*/
  width: min(98%, 500px);
`;
const UserName = styled.p`
  /* Display and Box Model  Properties*/
  padding: 12px;
`;

const Star = styled(AiFillStar)``;
export {
  Container,
  Heading,
  Wrapper,
  ReviewCard,
  StarRating,
  Description,
  ReviewText,
  UserName,
  Star,
};
