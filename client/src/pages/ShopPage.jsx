import React, { useState } from "react";

import {
  Navbar,
  Sidebar,
  ScrollToTop,
  Footer,
  GoBack,
  BannerSection,
  SearchandSort,
  ProductSection,
} from "components/shopPage";
import { SliderData } from "components/shopPage/sliderData";
const ShopPage = () => {
  const [menuState, setMenuState] = useState(false);
  const toggleMenuState = () => {
    setMenuState(!menuState);
  };
  const isLoggedIn = true;
  const isAdmin = false;
  return (
    <>
      <ScrollToTop />
      {isLoggedIn ? (
        <>
          <Navbar
            menuState={menuState}
            toggleMenuState={toggleMenuState}
            isLoggedIn={isLoggedIn}
            isAdmin={isAdmin}
          />
          <Sidebar
            sidebarState={menuState}
            toggleMenuState={toggleMenuState}
            isLoggedIn={isLoggedIn}
            isAdmin={isAdmin}
          />
        </>
      ) : (
        <>
          <GoBack />
        </>
      )}
      <BannerSection slides={SliderData} />
      <SearchandSort />
      <ProductSection />
      <Footer />
    </>
  );
};

export default ShopPage;
