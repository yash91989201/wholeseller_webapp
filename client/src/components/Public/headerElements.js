import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom"; //FOR LINKING TO OTHER PAGES
import { Link as LinkScroll } from "react-scroll"; //FOR LINKING WIHIN SINGLE PAGE
import { FaBars } from "react-icons/fa";

const Nav = styled.nav`
  background: #000;
  height: 8rem;
  border: 1px solid red;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const NavbarContainer = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  height: 8rem;
  width: 100%;
  z-index: 1;
  padding: 0 2.4rem;
  max-width: 110rem;
`;

const NavLogo = styled(LinkRouter)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 2.4rem;
  font-weight: bold;
  font-size: 3rem;
  text-decoration: none;
`;

const HamburgerMenu = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 2.5rem;
    right: 2.5rem;
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

const Bar = styled(FaBars)`
  color: #fff;
  font-size: 3rem;
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 2.2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  font-size: 2rem;
  height: 8rem;
  margin: 0 1.5rem 0 1.5rem;
`;

const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    border-bottom: 2px solid #01bf71;
  }
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtnLink = styled(LinkRouter)`
  margin: 0 auto;
  outline: none;
  border: none;
  border-radius: 0.75rem;
  background: #01bf71;
  white-space: nowrap;
  padding: 0.5rem 2.4rem;
  color: #f2f2f2;
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export {
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
};
