import styled, { css } from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiListSettingsLine, RiContactsLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { BsBoxSeam } from "react-icons/bs";

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

const NavLinkScroll = styled(LinkScroll)(NavLinkStyle);
const NavLinkRouter = styled(LinkRouter)(NavLinkStyle);

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
  /* Positioning  Properties*/
  position: relative;
  /* Display and Box Model  Properties*/
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Color Properties */
  color: #333333;
  /* Text  Properties*/
  font-size: 18px;
  /* Pseudo Class Properties */
  &:hover {
    border-bottom: 1px solid #424b5a;
    color: #424b5a;
  }
`;

const NotificationCount = styled.p`
  /* Positioning  Properties*/
  position: absolute;
  top: -4px;
  right: -18px;
  transform: translate(-50%, -50%);
  /* Display and Box Model  Properties*/
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Color  Properties*/
  background-color: red;
  color: #ffffff;
  /* Text Properties */
  font-size: 20px;
  font-weight: 700;
`;

const UserAccountDropdown = styled.div`
  /* Positioning  Properties*/
  position: absolute;
  top: 40px;
  right: -32px;
  transform: ${({ $userDropdown }) =>
    $userDropdown ? "scaleY(1)" : "scaleY(0)"};
  transform-origin: top;
  /* Display and Box Model  Properties*/
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 8px;
  width: 275px;
  display: flex;
  flex-flow: column nowrap;
  /* Color  Properties*/
  background-color: #fff;
  /* Animation Properties */
  transition: all 250ms linear;
  /* Other Properties */
  opacity: ${({ $userDropdown }) => ($userDropdown ? "100%" : "0%")};
  /* Media Query*/
  @media screen and (max-width: 1024px) {
    /* Display and Box Model  Properties*/
    display: none;
  }
`;

const UserDetails = styled.div`
  /* Display and Box Model  Properties*/
  border-bottom: 1.5px solid #505d68;
  padding: 12px 0;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const UserImage = styled.img`
  /* Display and Box Model  Properties*/
  border-radius: 50%;
  margin: 8px 0;
  width: 60px;
  /* Other Properties */
  object-fit: fill;
  aspect-ratio: 1;
`;

const UserName = styled.p`
  /* Display and Box Model  Properties*/
  margin: 4px 0;
  /* Text  Properties*/
  font-size: 18px;
`;

const UserEmail = styled.p`
  /* Display and Box Model  Properties*/
  margin: 6px 0;
  /* Text  Properties*/
  font-size: 14px;
  font-weight: 600;
`;

const DropDownLink = styled(LinkRouter)`
  /* Display and Box Model  Properties*/
  border-radius: 4px;
  margin: 8px 0;
  padding: 12px 0;
  display: flex;
  align-items: center;
  /* Pseudo Class Properties*/
  &:hover {
    /* Positioning  Properties*/
    transform: translateX(12px) scale(1.0625);
    transform-origin: left;
    transition: all 175ms ease-in-out;
    /* Color  Properties*/
    background-color: palegoldenrod;
    /* Text  Properties*/
    font-weight: 600;
  }
`;

const IconStyling = css`
  /* Text  Properties*/
  font-size: 24px;
  /* Other  Properties*/
  cursor: pointer;
`;

const DropDownIconStyling = css`
  /* Display and Box Model  Properties*/
  margin: 0 12px;
  /* Text  Properties*/
  font-size: 20px;
`;

const CartIcon = styled(AiOutlineShoppingCart)(IconStyling);
const NotificationIcon = styled(IoIosNotificationsOutline)(IconStyling);
const UserIcon = styled(FaUserCircle)(IconStyling);
const YourOrdersIcon = styled(BsBoxSeam)(DropDownIconStyling);
const AccountSettingIcon = styled(RiListSettingsLine)(DropDownIconStyling);
const ContactIcon = styled(RiContactsLine)(DropDownIconStyling);
const LogOutIcon = styled(FiLogOut)(DropDownIconStyling);

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
  UserAccountDropdown,
  UserDetails,
  UserImage,
  UserName,
  UserEmail,
  DropDownLink,
  NotificationCount,
  CartIcon,
  NotificationIcon,
  UserIcon,
  YourOrdersIcon,
  AccountSettingIcon,
  ContactIcon,
  LogOutIcon,
};
