import styled, { css } from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
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
  /* Color Properties */
  background-color: var(--col-navbar-bg);
  color: var(--col-neutral-black);
`;

const MenuBtn = styled(GoThreeBars)`
  /* Color Properties */
  color: var(--col-text-light);
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

const NavLinkCss = css`
  /* Positioning  Properties*/
  position: relative;
  /* Display and Box Model  Properties*/
  border-radius: 24px;
  margin: 0px;
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Color  Properties*/
  background-color: var(--col-accent);
  color: #fff;
  /* Font Properties */
  font-size: 14px;
  font-weight: bold;
  /* Animation Properties */
  transition: all 200ms ease-in;
  /* Pseudo Class Properties*/
  &:hover,
  &.active {
    transform: scale(1.0625) translateY(-2px);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 15px 20px -5px;
  }
  &:active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    transform: scale(0.96);
  }
  /* Other Properties */
  cursor: pointer;
`;

const NavLinkScroll = styled(LinkScroll)(NavLinkCss);

const NavLinkRouter = styled(LinkRouter)(NavLinkCss);

const BtnLinkWrap = styled.div`
  /* Display and Box Model  Properties*/
  display: flex;
  /* Media Query */
  @media screen and (max-width: 1024px) {
    /* Display and Box Model  Properties*/
    display: none;
  }
`;

const LogInBtn = styled(LinkRouter)`
  /* Positioning  Properties*/
  position: relative;
  /* Display and Box Model  Properties*/
  border: 1.125px solid var(--col-accent);
  border-radius: 8px;
  margin: 0px;
  padding: 6px 24px;
  /* Color  Properties*/
  color: var(--col-neutral-black);
  /* Animation Properties */
  transition: all 200ms ease-in;
  /* Pseudo Class Properties*/
  /* Other Properties */
  overflow: hidden;
  /* Pseudo Properties */
  &:hover {
    /* Color Properties */
    color: var(--col-neutral-white);
    /* Text Properties */
    font-weight: bolder;
  }
  &:after {
    /* Positioning Properties */
    position: absolute;
    top: 0;
    left: 0;
    transition: all 300ms ease-in-out;
    z-index: -9;
    /* Display and Box Model  Properties*/
    content: "";
    width: 0;
    height: 100%;
    background: #ff003b;
  }
  &:hover:after {
    /* Display and Box Model  Properties*/
    width: 100%;
  }
`;

const UserActionBtn = styled(LinkRouter)`
  /* Positioning  Properties*/
  position: relative;
  transform: ${({ $active }) => ($active ? `scale(1.125)` : "")};
  /* Display and Box Model  Properties*/
  box-shadow: ${({ $active }) =>
    $active
      ? `0 15px 25px -4px rgba(0, 0, 0, 0.2),
    inset 0 -8px 30px 1px rgba(255, 255, 255, 0.5),
    0 -10px 15px -1px rgba(255, 255, 255, 0.5)`
      : ""};
  border-radius: 50%;
  margin: 8px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Color  Properties*/
  background-color: var(--col-secondary);
  color: var(--col-neutral-white);
  /* Animation Properties */
  transition: all 200ms ease-in;
  /* Pseudo Class Properties*/
  &:hover {
    transform: scale(1.125);
    box-shadow: 0 15px 25px -4px rgba(0, 0, 0, 0.2),
      inset 0 -8px 30px 1px rgba(255, 255, 255, 0.5),
      0 -10px 15px -1px rgba(255, 255, 255, 0.5);
  }
`;

const NotificationCount = styled.span`
  /* Positioning  Properties*/
  position: absolute;
  top: 2px;
  right: -18px;
  transform: translate(-50%, -50%);
  /* Display and Box Model  Properties*/
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  /* Color  Properties*/
  background-color: var(--col-semantic-error);
  color: #ffffff;
  /* Text Properties */
  font-size: 20px;
  font-weight: 700;
`;

const UserAccountDropdown = styled.div`
  /* Positioning  Properties*/
  position: absolute;
  z-index: 9;
  top: 48px;
  right: -32px;
  transform: ${({ $userDropdown }) =>
    $userDropdown ? "translateY(16px)" : "translateY(-568px)"};
  transform-origin: top;
  /* Display and Box Model  Properties*/
  overflow: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 12px;
  width: 300px;
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
  margin: 8px 0;
  /* Text  Properties*/
  font-size: 14px;
  font-weight: 600;
`;

const DropDownLink = styled(LinkRouter)`
  /* Positioning  Properties*/
  position: relative;
  /* Display and Box Model  Properties*/
  border-radius: 4px;
  padding: 16px 0;
  display: flex;
  align-items: center;
  /* Pseudo Class Properties*/
  &:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    z-index: -9;
    width: 0;
    height: 100%;
    background: var(--col-accent);
    transition: all 200ms ease-in-out;
  }
  &:hover {
    color: var(--col-neutral-white);
    font-weight: 700;
  }
  &:hover:after {
    width: 100%;
  }
`;

const IconStyling = css`
  /* Text  Properties*/
  font-size: 22px;
  font-weight: lighter;
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
  LogInBtn,
  UserActionBtn,
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
