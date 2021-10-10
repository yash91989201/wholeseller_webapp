import React from "react";
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
  UserIcon,
  NotificationIcon,
  CartIcon,
  NotificationCount,
} from "./navbar.styles";

const Navbar = ({ toggleMenuState, isLoggedIn, isAdmin }) => {
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
                <NavBtnLink>
                  <CartIcon />
                  <NotificationCount>2</NotificationCount>
                </NavBtnLink>
              </NavItem>
              <NavItem>
                <NavBtnLink>
                  <NotificationIcon />
                  <NotificationCount>2</NotificationCount>
                </NavBtnLink>
              </NavItem>
              <NavItem>
                <UserIcon />
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
