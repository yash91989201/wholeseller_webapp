import styled from "styled-components";

import {
  defaultContainer,
  defaultHeading,
  makeUnselectable,
} from "components/shared/utilityStyling";

const Container = styled(defaultContainer)`
  ${makeUnselectable}

  /* Display and Box Model  Properties*/
    flex-flow:column nowrap;
`;

const Wrapper = styled.div`
  /* Display and Box Model  Properties*/
  width: 85%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;

  /* Media Query */
  @media screen and (min-width: 768px) {
    /* Display and Box Model  Properties*/
    flex-flow: row nowrap;
  }
`;

const Image = styled.img`
  /* Display and Box Model  Properties*/
  width: min(100%, 468px);
  padding: 32px 0;
`;

const TextWrapper = styled.div`
  /* Display and Box Model  Properties*/
  max-width: 375px;
`;

const Heading = styled(defaultHeading)``;

const Description = styled.p`
  /* Display and Box Model  Properties*/
  padding: 0 24px;

  /* Text  Properties*/
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 1.0625px;
`;

export { Container, Wrapper, Image, TextWrapper, Heading, Description };
