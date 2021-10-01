import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import { makeUnselectable } from "./utilityStyling.js";

// 320px — 480px: Mobile devices
// 481px — 768px: iPads, Tablets
// 769px — 1024px: Small screens, laptops
// 1025px — 1200px: Desktops, large screens

const NavbarContainer = styled.section`
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

const MenuBtn = styled(GoThreeBars)`
  font-size: 24px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
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
  list-style-type: none;
  display: flex;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  margin: 0 16px;
`;

const NavLink = styled(LinkScroll)`
  padding: 8px 16px;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    border-radius: 24px;
    background-color: #424b5a;
    color: #fff;
  }
`;

const NavBtnLink = styled(LinkRouter)`
  font-size: 18px;
  &:hover {
    border-bottom: 1px solid #424b5a;
    color: #424b5a;
  }
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
};
