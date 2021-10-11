import styled, { css } from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { MdClose } from "react-icons/md";

import { makeUnselectable } from "./shared.styles";

const SidebarContainer = styled.section`
  ${makeUnselectable}
  /* Positioning  Properties*/
  position: fixed;
  z-index: 999;
  bottom: 0;
  left: 0;
  bottom: ${({ sidebarOpen }) => (sidebarOpen ? "0" : "100%")};
  /* Display and Box Model  Properties*/
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* Color  Properties*/
  background: #333;
  color: #fff;
  /* Other  Properties*/
  transition: 250ms ease-in-out;
  opacity: ${({ sidebarOpen }) => (sidebarOpen ? "100%" : "0%")};
  /* Media Query */
  @media screen and (min-width: 1024px) {
    /* Display and Box Model  Properties*/
    display: none;
  }
`;

const CloseBtnWrapper = styled.div`
  /* Display and Box Model  Properties*/
  width: 100%;
  padding-right: max(40px, 8vw);
  /* Text  Properties*/
  text-align: right;
  /* Media Query */
  @media screen and (max-width: 768px) and (orientation: landscape) {
    /* Display and Box Model  Properties*/
    padding: 0 48px;
  }
`;

const CloseMenuBtn = styled(MdClose)`
  /* Text  Properties*/
  font-size: 34px;
`;

const SidebarMenu = styled.ul`
  /* Other Properties */
  list-style-type: none;
`;

const SidebarMenuItem = styled.li``;

const LinkStyle = css`
  /* Display and Box Model  Properties*/
  padding: 20px;
  margin: 8px 0;
  display: block;
  /* Text  Properties*/
  font-size: 18px;
  text-align: center;
  /* Other  Properties*/
  cursor: pointer;
  /* Pseudo Class Properties */
  &:hover {
    /* Text  Properties*/
    font-weight: 700;
    /* Color Properties */
    background-color: #e5e5e5;
    color: #333;
  }
  /* Media Query */
  @media screen and (max-width: 768px) and (orientation: landscape) {
    /* Display and Box Model  Properties*/
    padding: 14px 0;
    margin: 4px 0;
  }
`;

const SidebarLinkScroll = styled(LinkScroll)(LinkStyle);

const SidebarLinkRouter = styled(LinkRouter)(LinkStyle);

const SidebarBtnLink = styled(LinkRouter)`
  /* Display and Box Model  Properties*/
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 8px 40px;
  align-self: center;
  /* Color  Properties*/
  color: #fff;
  /* Text  Properties*/
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1.5px;
  /* Pseudo Class  Properties*/
  &:hover {
    /* Color Properties */
    background-color: #f4f4f4;
    color: #333;
    /* Text Properties */
    font-size: 20px;
  }
  /* Media Query */
  @media screen and (max-width: 768px) and (orientation: landscape) {
    /* Display and Box Model  Properties*/
    padding: 8px 32px;
  }
`;

export {
  SidebarContainer,
  CloseBtnWrapper,
  CloseMenuBtn,
  SidebarMenu,
  SidebarMenuItem,
  SidebarLinkScroll,
  SidebarLinkRouter,
  SidebarBtnLink,
};
