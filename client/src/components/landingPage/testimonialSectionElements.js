import styled from "styled-components";
import { FaQuoteLeft } from "react-icons/fa";

import { ReactComponent as userAvatarSVG } from "assets/images/user_avatar.svg";

import {
  defaultContainer,
  makeUnselectable,
} from "components/shared/utilityStyling";

const Container = styled(defaultContainer)`
  ${makeUnselectable}
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  overflow-x: scroll;
`;
const Heading = styled.h2`
  padding: 8px 0;
  text-align: center;
`;

const TestimonialCard = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-flow: row-reverse nowrap;
    justify-content: space-evenly;
  }
`;

const TextWrapper = styled.div`
  margin: 8px 0;
  text-align: center;
  padding: 8px 0;
`;

const Text = styled.p`
  line-height: 24px;
  width: 85%;
  max-width: 300px;
  margin: 0 auto;
`;

const QuoteLeft = styled(FaQuoteLeft)`
  color: #c2d1d9;
  font-size: 32px;
`;

const Author = styled.p`
  padding: 16px 0;
`;

const UserAvatar = styled(userAvatarSVG)`
  max-width: 100px;
  max-height: 100px;
  margin: 8px 0;
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
