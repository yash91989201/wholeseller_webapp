import React, { useState } from "react";

import {
  Navbar,
  Sidebar,
  Footer,
  ProductInfo,
  ProductReview,
  SimilarProduct,
} from "components/productPage";
import { SliderData } from "components/shopPage/sliderData";

const ProductPage = () => {
  const [menuState, setMenuState] = useState(false);
  const toggleMenuState = () => {
    setMenuState(!menuState);
  };
  const isLoggedIn = true;
  const isAdmin = false;
  return (
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
      <ProductInfo slides={SliderData} />
      <ProductReview />
      <SimilarProduct />
      <Footer />
    </>
  );
};

export default ProductPage;
