import React from "react";
import {
  SidebarContainer,
  CloseBtnWrapper,
  CloseMenuBtn,
  SidebarMenu,
  SidebarMenuItem,
  SidebarLink,
  SidebarBtnLink,
} from "./sidebarElements";

const Sidebar = ({ sidebarState, toggleMenuState }) => {
  return (
    <SidebarContainer sidebarOpen={sidebarState}>
      <CloseBtnWrapper>
        <CloseMenuBtn
          onClick={() => {
            toggleMenuState();
          }}
        />
      </CloseBtnWrapper>

      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarLink to="/shop">SHOP</SidebarLink>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarLink to="/shop">GALLERY</SidebarLink>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarLink to="/shop">HOW IT WORKS</SidebarLink>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarLink to="/shop">CONTACT</SidebarLink>
        </SidebarMenuItem>
      </SidebarMenu>
      <SidebarBtnLink to="/login">Log In</SidebarBtnLink>
    </SidebarContainer>
  );
};

export default Sidebar;
