import React from "react";
import {
  Container,
  Wrapper,
  Logo,
  Menu,
  MenuItem,
  FooterLink,
  MetaFooter,
} from "./footer.styles";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Logo to="/">LOGO</Logo>
        <Menu>
          <MenuItem>
            <FooterLink to="/sitemap">Sitemap</FooterLink>
          </MenuItem>
          <MenuItem>
            <FooterLink to="/privacyPolicy">Privacy Policy</FooterLink>
          </MenuItem>
          <MenuItem>
            <FooterLink to="/termsAndConditions">
              Terms and Conditions
            </FooterLink>
          </MenuItem>
          <MenuItem>
            <FooterLink to="/cookiePolicy">Cookie Policy</FooterLink>
          </MenuItem>
        </Menu>
        <MetaFooter>&copy;2022 LOGO All Rights Reserved</MetaFooter>
      </Wrapper>
    </Container>
  );
};

export default Footer;
