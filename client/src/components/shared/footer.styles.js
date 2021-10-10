import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

import { defaultContainer, makeUnselectable } from "./shared.styles";

const Container = styled(defaultContainer)`
  ${makeUnselectable}
  /* Display and Box Model  Properties*/
  padding: 0;
`;

const Wrapper = styled.div`
  /* Display and Box Model  Properties*/
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  /* Media Query */
  @media screen and (min-width: 1024px) {
    /* Display and Box Model  Properties*/
    border-top: 1px solid #c2d1d9;
    flex-flow: row nowrap;
    justify-content: space-evenly;
  }
`;

const Logo = styled(LinkRouter)`
  /* Display and Box Model  Properties*/
  padding: 16px 0;
  /* Text Properties */
  font-size: 32px;
`;

const Menu = styled.ul`
  /* Display and Box Model  Properties*/
  border-top: 1px solid #c2d1d9;
  padding: 8px 0;
  /* Other Properties */
  list-style-type: none;
  /* Media Query */
  @media screen and (min-width: 768px) {
    /* Display and Box Model  Properties*/
    border: none;
    display: flex;
    flex-flow: row nowrap;
  }
`;

const MenuItem = styled.li``;

const FooterLink = styled(LinkRouter)`
  /* Display and Box Model  Properties*/
  margin: 8px 0;
  padding: 16px 48px;
  display: block;
  /* Text Properties */
  font-size: 16px;
  text-align: center;
  /* Other Properties */
  cursor: pointer;
  /* Pseudo Class Properties */
  &:hover {
    /* Color Properties */
    background-color: #f4f4f4;
    color: #333;
  }
`;

const MetaFooter = styled.p`
  /* Display and Box Model  Properties*/
  width: 100%;
  border-top: 1px solid #c2d1d9;
  padding: 16px 0;
  /* Text Properties */
  text-align: center;
  /* Media Query */
  @media screen and (min-width: 1024px) {
    /* Display and Box Model  Properties*/
    width: fit-content;
    border: none;
  }
`;

export { Container, Wrapper, Logo, Menu, MenuItem, FooterLink, MetaFooter };
