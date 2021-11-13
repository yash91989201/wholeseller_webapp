import { useState } from "react";
import { useRouteMatch } from "react-router";

import {
  Navbar,
  Sidebar,
  Footer,
  GalleryNavigation,
  ImageSection,
  VideoSection,
} from "components/galleryPage";

const Gallery = () => {
  const { url } = useRouteMatch();
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
      <GalleryNavigation />
      {url === "/gallery/videos" ? <VideoSection /> : <ImageSection />}
      <Footer />
    </>
  );
};

export default Gallery;
