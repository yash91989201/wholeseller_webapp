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

const ShopPage = () => {
  const [menuState, setMenuState] = useState(false);
  const toggleMenuState = () => {
    setMenuState(!menuState);
  };
  const isLoggedIn = false;
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
          <BannerSection />
        </>
      )}
      <SearchandSort />
      <ProductSection />
      <Footer />
    </>
  );
};

export default ShopPage;
