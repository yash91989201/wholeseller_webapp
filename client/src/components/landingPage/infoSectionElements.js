import styled from "styled-components";

import {
  defaultContainer,
  makeUnselectable,
} from "components/shared/utilityStyling";

const Container = styled(defaultContainer)`
  ${makeUnselectable}
  flex-flow:column nowrap;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
`;
const Image = styled.img`
  max-width: 420px;
  width: 100%;
  padding: 32px 0;
`;
const TextWrapper = styled.div`
  max-width: 400px;
`;
const Heading = styled.h1`
  text-align: center;
`;
const Description = styled.p`
  line-height: 24px;
  letter-spacing: 1.0625px;
  font-weight: 500;
  padding: 0 24px;
`;

export { Container, Wrapper, Image, TextWrapper, Heading, Description };
