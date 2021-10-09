import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

import { defaultContainer } from "components/shared/shared.styles";

/* Positioning  Properties*/
/* Display and Box Model  Properties*/
/* Color  Properties*/
/* Text  Properties*/
/* Other Properties */
/* Animation Properties */
/* Pseudo Class Properties*/
/* Media Query*/

const Container = styled(defaultContainer)`
  /* Display and Box Model  Properties*/
  padding: 0;
  flex-flow: column nowrap;
  align-items: flex-start;
`;

const Wrapper = styled.div`
  /* Display and Box Model  Properties*/
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
  /* Media Query*/
  @media screen and (min-width: 1024px) {
    padding-left: 48px;
    align-items: flex-start;
  }
`;

const ProductCount = styled.p`
  /* Display and Box Model  Properties*/
  margin-bottom: 8px;
  margin-left: 16px;
  /* Text  Properties*/
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1.75px;
  text-decoration: underline;
  /* Media Query*/
  @media screen and (max-width: 420px) {
    /* Display and Box Model  Properties*/
    border-radius: 5px;
    width: 90%;
    flex-flow: column nowrap;
  }
  /* Media Query*/
  @media screen and (min-width: 421px) and (max-width: 1024px) {
    /* Display and Box Model  Properties*/
    margin-left: 0;
    width: min(95%, 568px);
  }
  /* Media Query*/
  @media screen and (min-width: 1024px) {
    /* Display and Box Model  Properties*/
    margin-left: 0px;
  }
`;

const ProductPagination = styled.div`
  /* Display and Box Model  Properties*/
  margin: min(80px, 8vh) 0;
  align-self: center;
  display: flex;
  flex-flow: row nowrap;
`;

const TogglePage = styled(LinkRouter)`
  /* Display and Box Model  Properties*/
  border: ${({ $pageAvailable }) =>
    $pageAvailable ? "1px solid #424b5a" : ""};
  border-radius: 2.5px;
  border-color: #adb1b8 #a2a6ac #8d9096;
  margin: 0 16px;
  padding: 8px 16px;
  /* Color  Properties*/
  background: ${({ $pageAvailable }) =>
    $pageAvailable ? "linear-gradient(to bottom, #f7f8fa, #e7e9ec)" : ""};
  color: ${({ $pageAvailable }) => ($pageAvailable ? "" : "#666666")};
  /* Text  Properties*/
  font-weight: ${({ $pageAvailable }) => ($pageAvailable ? "900" : "")};
  text-decoration: none;
  cursor: ${({ $pageAvailable }) =>
    $pageAvailable ? "pointer" : "not-allowed"};
  /* Pseudo Class Properties*/
  &:hover {
    /* Color  Properties*/
    background: ${({ $pageAvailable }) =>
      $pageAvailable ? "linear-gradient(to bottom, #e7eaf0, #d9dce1)" : ""};
  }
`;

const BtnLinkWrapper = styled.div`
  /* Display and Box Model  Properties*/
  display: flex;
  /* Media Query*/
  @media screen and (max-width: 621px) {
    /* Display and Box Model  Properties*/
    display: none;
  }
`;

const PaginationBtnLink = styled(LinkRouter)`
  /* Display and Box Model  Properties*/
  border: ${({ $disabled }) => ($disabled ? "" : "1px solid #424b5a")};
  border-radius: 2.5px;
  border-color: #adb1b8 #a2a6ac #8d9096;
  margin: 0 8px;
  padding: 8px 16px;
  /* Color  Properties*/
  background: ${({ $disabled }) =>
    $disabled ? "" : "linear-gradient(to bottom, #f7f8fa, #e7e9ec)"};
  /* Text  Properties*/
  font-weight: 900;
  text-decoration: none;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  /* Pseudo Class Properties*/
  &:hover {
    /* Color  Properties*/
    background: ${({ $disabled }) =>
      $disabled ? "" : "linear-gradient(to bottom, #e7eaf0, #d9dce1)"};
  }
`;

const LeftArrow = styled(IoIosArrowRoundBack)``;
const RightArrow = styled(IoIosArrowRoundForward)``;

export {
  Container,
  Wrapper,
  ProductCount,
  ProductPagination,
  TogglePage,
  BtnLinkWrapper,
  PaginationBtnLink,
  LeftArrow,
  RightArrow,
};
