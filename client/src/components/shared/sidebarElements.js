import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

import { makeUnselectable } from "./utilityStyling";

const SidebarContainer = styled.section`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: calc(100vh - 80px);
  background: #505d68;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  bottom: 0;
  left: 0;
  transition: 250ms ease-in-out;
  opacity: ${({ sidebarOpen }) => (sidebarOpen ? "100%" : "0%")};
  bottom: ${({ sidebarOpen }) => (sidebarOpen ? "0" : "100%")};
  @media screen and (min-width: 768px) {
    display: none;
  }
  ${makeUnselectable}
`;

const SidebarMenu = styled.ul`
  list-style-type: none;
`;

const SidebarMenuItem = styled.li``;

const SidebarLink = styled(LinkScroll)`
  cursor: pointer;
  font-size: 16px;
  display: block;
  padding: 16px 32px;
  margin: 16px 0;
  text-align: center;
  &:hover {
    font-weight: 700;
    background-color: #e5e5e5;
    color: #333;
  }
`;

const SidebarBtnLink = styled(LinkRouter)`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 8px 40px;
  align-self: center;
  &:hover {
    font-size: 20px;
    background-color: #f4f4f4;
    color: #333;
  }
`;

export {
  SidebarContainer,
  SidebarMenu,
  SidebarMenuItem,
  SidebarLink,
  SidebarBtnLink,
};
