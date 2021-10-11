import React, { useState } from "react";
import {
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
} from "./navbar.styles";

const Navbar = ({ toggleMenuState, isLoggedIn, isAdmin }) => {
  const [userDropdown, setUserDropdown] = useState(false);

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
                <NavBtnLink to="/yourCart">
                  <CartIcon />
                  <NotificationCount>2</NotificationCount>
                </NavBtnLink>
              </NavItem>
              <NavItem>
                <NavBtnLink to="/notification">
                  <NotificationIcon />
                  <NotificationCount>2</NotificationCount>
                </NavBtnLink>
              </NavItem>
              <NavItem>
                <UserIcon onClick={() => setUserDropdown(!userDropdown)} />
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
              <NavBtnLink to="/logIn">Log In</NavBtnLink>
            </BtnLinkWrap>
          )}
        </NavMenu>

        <MenuBtn onClick={toggleMenuState} />
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
