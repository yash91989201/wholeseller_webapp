import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

const BtnLinkWrapper = styled.div`
  /* Display and Box Model  Properties*/
  padding: 32px;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const BtnLink = styled(LinkRouter)`
  /* Text  Properties*/
  font-size: 20px;
  /* Pseudo Class Properties*/
  &:hover {
    /* Display and Box Model  Properties*/
    border-bottom: 1px solid #424b5a;
  }
`;

const RightArrow = styled(FaAngleLeft)``;

export { BtnLinkWrapper, BtnLink, RightArrow };
