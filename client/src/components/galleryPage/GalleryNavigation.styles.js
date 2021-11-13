import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { defaultContainer } from "components/shared/shared.styles";

const Container = styled(defaultContainer)`
  /* Display and Box Model  Properties*/
  padding: 24px;
  justify-content: flex-start;
`;
const Wrapper = styled.div``;
const BtnLink = styled(LinkRouter)`
  /* Display and Box Model  Properties*/
  border-bottom: 1.5px solid #424b5a;
  margin-right: 24px;
  /* Color  Properties*/
  color: #424b5a;
`;

export { Container, Wrapper, BtnLink };
