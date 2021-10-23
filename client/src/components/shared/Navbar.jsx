import React, { useState, useRef } from "react";
import {
  NavbarContainer,
  NavbarWrapper,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinkScroll,
  NavLinkRouter,
  BtnLinkWrap,
  UserActionBtn,
  LogInBtn,
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
} from "./navbar.styles";

import useOnClickOutside from "customHooks/useOnClickOutside";

const Navbar = ({ toggleMenuState, isLoggedIn, isAdmin }) => {
  const ref = useRef();
  const [userDropdown, setUserDropdown] = useState(false);
  useOnClickOutside(ref, () => setUserDropdown(false));
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <NavLogo to="/">LOGO</NavLogo>
        <NavMenu>
          <NavItem>
            <NavLinkRouter to="/shop">SHOP</NavLinkRouter>
          </NavItem>
          <NavItem>
            <NavLinkScroll to="/gallery">GALLERY</NavLinkScroll>
          </NavItem>
          {!isLoggedIn && (
            <NavItem>
              <NavLinkScroll
                to="infoSection"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-120}
              >
                HOW IT WORKS
              </NavLinkScroll>
            </NavItem>
          )}
          {!isLoggedIn && (
            <NavItem>
              <NavLinkScroll
                to="contactSection"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-255}
              >
                CONTACT
              </NavLinkScroll>
            </NavItem>
          )}
        </NavMenu>

        <NavMenu>
          {isLoggedIn ? (
            <>
              <NavItem>
                <UserActionBtn to="/yourCart">
                  <CartIcon />
                  <NotificationCount>2</NotificationCount>
                </UserActionBtn>
              </NavItem>
              <NavItem>
                <UserActionBtn to="/notification">
                  <NotificationIcon />
                  <NotificationCount>2</NotificationCount>
                </UserActionBtn>
              </NavItem>
              <NavItem ref={ref}>
                <UserActionBtn
                  onClick={() => setUserDropdown(!userDropdown)}
                  $active={userDropdown}
                >
                  <UserIcon />
                </UserActionBtn>
                <UserAccountDropdown $userDropdown={userDropdown}>
                  <UserDetails>
                    <UserImage src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXIlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
                    <UserName>Yashraj Jaiswal</UserName>
                    <UserEmail>yash@gmail.com</UserEmail>
                  </UserDetails>
                  <DropDownLink to="/yourOrders">
                    <YourOrdersIcon /> Your Orders
                  </DropDownLink>
                  <DropDownLink to="/userAccount">
                    <AccountSettingIcon /> Account Settings
                  </DropDownLink>
                  <DropDownLink to="/contactUs">
                    <ContactIcon /> Contact Us
                  </DropDownLink>
                  <DropDownLink to="/logout">
                    <LogOutIcon /> Log Out
                  </DropDownLink>
                </UserAccountDropdown>
              </NavItem>
            </>
          ) : (
            <BtnLinkWrap>
              <LogInBtn to="/logIn">Log In</LogInBtn>
            </BtnLinkWrap>
          )}
        </NavMenu>

        <MenuBtn onClick={toggleMenuState} />
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
