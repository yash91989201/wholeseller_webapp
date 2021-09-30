import styled from "styled-components";

import {
  defaultContainer,
  makeUnselectable,
} from "components/shared/utilityStyling";

const Container = styled(defaultContainer)`
  ${makeUnselectable}
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
`;
const Image = styled.img`
  max-width: 1100px;
  width: 100%;
`;
const TextWrapper = styled.div`
  max-width: 400px;
  padding: 16px 0;
`;
const Heading = styled.h1`
  padding: 16px 0;
  text-align: center;
`;
const Description = styled.p`
  line-height: 24px;
`;

export { Container, Wrapper, Image, TextWrapper, Heading, Description };
