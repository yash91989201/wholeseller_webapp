import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import { makeUnselectable } from "./utilityStyling.js";

const NavbarContainer = styled.section`
  ${makeUnselectable}

  /* Positioning  Properties*/
  position: sticky;
  z-index: 99;
  top: 0;
  left: 0;

  /* Display and Box Model  Properties*/
  height: 80px;
  display: flex;
  justify-content: center;

  /* Color  Properties*/
  background-color: #f5f5f5;
`;

const MenuBtn = styled(GoThreeBars)`
  /* Text  Properties*/
  font-size: 28px;

  /* Media Query */
  @media screen and (min-width: 768px) {
    /* Display and Box Model  Properties*/
    display: none;
  }
`;

const NavbarWrapper = styled.nav`
  /* Display and Box Model  Properties*/
  width: min(85%, 1150px);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLogo = styled(LinkScroll)`
  /* Text  Properties*/
  font-size: 24px;
`;

const NavMenu = styled.ul`
  /* Display and Box Model  Properties*/
  display: flex;
  /* Other Properties */
  list-style-type: none;

  /* Media Query */
  @media screen and (max-width: 768px) {
    /* Display and Box Model  Properties*/
    display: none;

    /* Media Query */
    @media screen and (orientation: landscape) {
      /* Display and Box Model  Properties*/
      display: none;
    }
  }
`;

const NavItem = styled.li`
  /* Display and Box Model  Properties*/
  margin: 0 16px;
`;

const NavLink = styled(LinkScroll)`
  /* Display and Box Model  Properties*/
  padding: 8px 16px;

  /* Text  Properties*/
  font-size: 15px;

  /* Other  Properties*/
  cursor: pointer;

  /* Pseudo Class Properties */
  &:hover {
    border-radius: 24px;
    background-color: #424b5a;
    color: #fff;
  }
`;

const NavBtnLink = styled(LinkRouter)`
  /* Text  Properties*/
  font-size: 18px;

  /* Pseudo Class Properties */
  &:hover {
    border-bottom: 1px solid #424b5a;
    color: #424b5a;
  }

  /* Media Query */
  @media screen and (max-width: 768px) {
    /* Display and Box Model  Properties*/
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
