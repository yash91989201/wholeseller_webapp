import React, { useState } from "react";
import {
  Navbar,
  Sidebar,
  HeroSection,
  ProductShowcase,
  InfoSection,
  TestimonialSection,
  ContactSection,
  Footer,
} from "components/landingPage";

const LandingPage = () => {
  const [menuState, setMenuState] = useState(false);
  const toggleMenuState = () => {
    setMenuState(!menuState);
  };
  return (
    <>
      <Navbar menuState={menuState} toggleMenuState={toggleMenuState} />
      <Sidebar sidebarState={menuState} toggleMenuState={toggleMenuState} />
      <HeroSection />
      <ProductShowcase />
      <InfoSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default LandingPage;
