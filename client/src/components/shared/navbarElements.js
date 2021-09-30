import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import { VscChromeClose } from "react-icons/vsc";
import { makeUnselectable } from "./utilityStyling.js";

// 320px — 480px: Mobile devices
// 481px — 768px: iPads, Tablets
// 769px — 1024px: Small screens, laptops
// 1025px — 1200px: Desktops, large screens
// 1201px and more —  Extra large screens, TV

const NavbarContainer = styled.div`
  position: sticky;
  z-index: 99;
  background-color: #f5f5f5;
  top: 0;
  left: 0;
  height: 80px;
  display: flex;
  justify-content: center;
  ${makeUnselectable}
`;

const BtnStyling = `
font-size: 24px;
cursor: pointer;
@media screen and (min-width: 768px) {
  display: none;
}
`;

const MenuBtn = styled(GoThreeBars)`
  ${BtnStyling}
`;

const CloseMenuBtn = styled(VscChromeClose)`
  ${BtnStyling}
`;

const NavbarWrapper = styled.nav`
  width: 85%;
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLogo = styled(LinkScroll)`
  font-size: 24px;
`;

const NavMenu = styled.ul`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li``;

const NavLink = styled(LinkScroll)``;

const NavBtnLink = styled(LinkRouter)`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export {
  NavbarContainer,
  NavbarWrapper,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
  NavBtnLink,
  MenuBtn,
  CloseMenuBtn,
};
