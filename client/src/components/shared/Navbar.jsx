import React from "react";
import {
  NavbarContainer,
  NavbarWrapper,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
  NavBtnLink,
  MenuBtn,
} from "./navbarElements";

const Navbar = ({ toggleMenuState }) => {
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <NavLogo to="/">LOGO</NavLogo>
        <NavMenu>
          <NavItem>
            <NavLink to="/shop">SHOP</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/gallery">GALLERY</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/howItWorks">HOW IT WORKS</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contactuUs">CONTACT</NavLink>
          </NavItem>
        </NavMenu>

        <NavBtnLink to="/logIn">Log In</NavBtnLink>

        <MenuBtn onClick={toggleMenuState} />
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
