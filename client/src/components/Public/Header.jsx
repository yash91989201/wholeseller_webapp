import {
  Nav,
  NavbarContainer,
  NavLogo,
  HamburgerMenu,
  Bar,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./headerElements";
const Header = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">LOGO</NavLogo>
        <HamburgerMenu>
          <Bar />
        </HamburgerMenu>
        <NavMenu>
          <NavItem>
            <NavLinks
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              About
            </NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks
              to="services"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Services
            </NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/">Log In</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default Header;
