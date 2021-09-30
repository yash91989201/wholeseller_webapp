import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

import { defaultContainer, makeUnselectable } from "./utilityStyling";

const Container = styled(defaultContainer)`
  padding: 0;
  ${makeUnselectable}
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
`;

const Logo = styled(LinkScroll)`
  font-size: 32px;
  padding: 16px 0;
`;

const Menu = styled.ul`
  border-top: 1px solid #c2d1d9;
  list-style-type: none;
  padding: 8px 0;
`;

const MenuItem = styled.li``;

const FooterLink = styled(LinkRouter)`
  cursor: pointer;
  font-size: 16px;
  display: block;
  padding: 16px 48px;
  margin: 8px 0;
  text-align: center;
  &:hover {
    background-color: #f4f4f4;
    color: #333;
  }
`;

const MetaFooter = styled.p`
  width: 100%;
  text-align: center;
  padding: 16px 0;
  border-top: 1px solid #c2d1d9;
`;

export { Container, Wrapper, Logo, Menu, MenuItem, FooterLink, MetaFooter };
