import React from "react";
import {
  SidebarContainer,
  SidebarMenu,
  SidebarMenuItem,
  SidebarLink,
  SidebarBtnLink,
} from "./sidebarElements";

const Sidebar = ({ sidebarState }) => {
  return (
    <SidebarContainer sidebarOpen={sidebarState}>
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
