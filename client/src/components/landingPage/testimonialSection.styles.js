import styled from "styled-components";
import { ReactComponent as userAvatarSVG } from "assets/images/user_avatar.svg";
import { FaQuoteLeft } from "react-icons/fa";

import {
  defaultContainer,
  defaultHeading,
  makeUnselectable,
} from "components/shared/shared.styles";

const Container = styled(defaultContainer)`
  ${makeUnselectable}
  /* Display and Box Model  Properties*/
  flex-flow: column nowrap;
`;

const Wrapper = styled.div`
  /* Display and Box Model  Properties*/
  width: 100%;
  display: flex;
  flex-flow: row wrap-reverse;
  justify-content: space-evenly;
  align-items: center;
  /* Media Query*/
  @media screen and (min-width: 768px) {
    /* Display and Box Model  Properties*/
    justify-content: center;
    gap: 4vw;
  }
`;

const Heading = styled(defaultHeading)``;

const UserAvatar = styled(userAvatarSVG)`
  /* Display and Box Model  Properties*/
  max-width: 125px;
  max-height: 125px;
  margin: min(24px, 8vw);
`;

const TestimonialCard = styled.div`
  /* Display and Box Model  Properties*/
  width: min(90%, 420px);
  margin: 24px;
  display: flex;
`;

const TextWrapper = styled.div`
  /* Display and Box Model  Properties*/
  margin: 8px 0;
  padding: 8px 0;
  /* Text Properties */
  text-align: center;
`;

const Text = styled.p`
  /* Display and Box Model  Properties*/
  width: min(85%, 325px);
  margin: 0 auto;
  /* Text Properties */
  line-height: 24px;
`;

const QuoteLeft = styled(FaQuoteLeft)`
  /* Color Properties */
  color: #c2d1d9;
  /* Text Properties */
  font-size: 32px;
`;

const Author = styled.p`
  /* Display and Box Model  Properties*/
  padding: 16px 0;
`;

export {
  Container,
  Wrapper,
  Heading,
  TestimonialCard,
  TextWrapper,
  Text,
  QuoteLeft,
  Author,
  UserAvatar,
};
