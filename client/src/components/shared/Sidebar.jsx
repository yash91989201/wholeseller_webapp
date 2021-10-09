import React from "react";
import {
  SidebarContainer,
  CloseBtnWrapper,
  CloseMenuBtn,
  SidebarMenu,
  SidebarMenuItem,
  SidebarLinkScroll,
  SidebarLinkRouter,
  SidebarBtnLink,
} from "./sidebar.styles";

const Sidebar = ({ sidebarState, toggleMenuState, isLoggedIn, isAdmin }) => {
  return (
    <SidebarContainer sidebarOpen={sidebarState}>
      <CloseBtnWrapper>
        <CloseMenuBtn
          onClick={() => {
            toggleMenuState();
          }}
        />
      </CloseBtnWrapper>
      {isLoggedIn ? (
        isAdmin ? (
          <>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarLinkRouter to="/shop">Dashboard</SidebarLinkRouter>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarLinkRouter to="/shop">Your Account</SidebarLinkRouter>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarLinkRouter>Notifications</SidebarLinkRouter>
              </SidebarMenuItem>
            </SidebarMenu>
          </>
        ) : (
          <>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarLinkRouter to="/shop">Your Cart</SidebarLinkRouter>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarLinkScroll to="/shop">Your Account</SidebarLinkScroll>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarLinkScroll to="/shop">Notifications</SidebarLinkScroll>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarLinkScroll to="/shop">Contact Us</SidebarLinkScroll>
              </SidebarMenuItem>
            </SidebarMenu>
          </>
        )
      ) : (
        <>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarLinkRouter to="/shop">SHOP</SidebarLinkRouter>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarLinkScroll to="/shop">GALLERY</SidebarLinkScroll>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarLinkScroll
                to="infoSection"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-30}
                onClick={() => toggleMenuState()}
              >
                HOW IT WORKS
              </SidebarLinkScroll>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarLinkScroll
                to="contactSection"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-60}
                onClick={() => toggleMenuState()}
              >
                CONTACT
              </SidebarLinkScroll>
            </SidebarMenuItem>
          </SidebarMenu>
        </>
      )}
      <SidebarBtnLink to="/login">Log In</SidebarBtnLink>
    </SidebarContainer>
  );
};

export default Sidebar;
