import styled, { css } from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

import { GoThreeBars } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineShoppingCart, AiOutlineCaretDown } from "react-icons/ai";

import { makeUnselectable } from "./shared.styles.js";

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
  @media screen and (min-width: 1024px) {
    /* Display and Box Model  Properties*/
    display: none;
  }
`;

const NavbarWrapper = styled.nav`
  /* Display and Box Model  Properties*/
  width: min(90%, 1250px);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLogo = styled(LinkRouter)`
  /* Text  Properties*/
  font-size: 24px;
`;

const NavMenu = styled.ul`
  /* Display and Box Model  Properties*/
  display: flex;
  /* Other Properties */
  list-style-type: none;

  /* Media Query */
  @media screen and (max-width: 1024px) {
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
  /* Positioning  Properties*/
  position: relative;

  /* Display and Box Model  Properties*/
  margin: 0 16px;
`;

const NavLinkStyle = css`
  /* Display and Box Model  Properties*/
  padding: 8px 16px;

  /* Text  Properties*/
  font-size: 15px;

  /* Other  Properties*/
  cursor: pointer;

  /* Pseudo Class Properties */
  &:hover,
  &.active {
    border-radius: 24px;
    background-color: #424b5a;
    color: #fff;
  }

  /* Media Query */
  @media screen and (max-width: 1024px) {
    /* Display and Box Model  Properties*/
    display: none;
  }
`;

const NavLinkScroll = styled(LinkScroll)`
  ${NavLinkStyle}
`;

const NavLinkRouter = styled(LinkRouter)`
  ${NavLinkStyle}
`;

const BtnLinkWrap = styled.div`
  /* Display and Box Model  Properties*/
  display: flex;
  /* Media Query*/
  @media screen and (max-width: 1024px) {
    /* Display and Box Model  Properties*/
    display: none;
  }
`;

const NavBtnLink = styled(LinkRouter)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 35px;
  height: 35px; */
  color: #333333;
  /* background: #dddddd; */
  border: none;
  outline: none;
  /* Text  Properties*/
  font-size: 18px;

  /* Pseudo Class Properties */
  &:hover {
    border-bottom: 1px solid #424b5a;
    color: #424b5a;
  }
`;

const IconStyling = css`
  /* Text  Properties*/
  font-size: 24px;
  /* Other  Properties*/
  cursor: pointer;
`;

const UserIcon = styled(FaUserCircle)`
  ${IconStyling}
`;

const NotificationIcon = styled(IoIosNotificationsOutline)`
  ${IconStyling}
`;

const CartIcon = styled(AiOutlineShoppingCart)`
  ${IconStyling}
`;

const NotificationCount = styled.p`
  position: absolute;
  /* top: -10px;
  right: -10px; */
  width: 20px;
  height: 20px;
  background: red;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  /* Positioning  Properties*/
  position: absolute;
  top: -16px;
  right: -8px;

  /* Text Properties */
  font-size: 24px;
`;

export {
  NavbarContainer,
  NavbarWrapper,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinkScroll,
  NavLinkRouter,
  BtnLinkWrap,
  NavBtnLink,
  MenuBtn,
  UserIcon,
  NotificationIcon,
  CartIcon,
  NotificationCount,
};
