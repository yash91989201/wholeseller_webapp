import styled from "styled-components";

import {
  defaultContainer,
  defaultHeading,
  makeUnselectable,
} from "components/shared/shared.styles";

const Container = styled(defaultContainer)`
  ${makeUnselectable}
  /* Display and Box Model  Properties*/
  height:calc(100vh - 80px);
  flex-flow: column nowrap;
`;

const Wrapper = styled.div`
  /* Display and Box Model  Properties*/
  width: 90%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: center;
  /* Media Query */
  @media screen and (min-width: 768px) {
    /* Display and Box Model  Properties*/
    flex-flow: row wrap;
  }
`;

const Image = styled.img`
  /* Display and Box Model  Properties*/
  width: min(85%, 525px);
  padding-top: 16px;
  padding-bottom: 48px;
`;

const TextWrapper = styled.div`
  /* Display and Box Model  Properties*/
  margin: 0 16px;
  max-width: 400px;
`;

const Heading = styled(defaultHeading)``;

const Description = styled.p`
  /* Display and Box Model  Properties*/
  padding: 0 16px;
  /* Text  Properties*/
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 1.0625px;
`;

export { Container, Wrapper, Image, TextWrapper, Heading, Description };
