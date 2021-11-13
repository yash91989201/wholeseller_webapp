import React from "react";

import { Container, Wrapper, BtnLink } from "./GalleryNavigation.styles.js";

const galleryNavigation = ({ activeTab }) => {
  return (
    <Container>
      <Wrapper>
        <BtnLink to="/gallery/images" $activeTab={activeTab}>
          Images
        </BtnLink>
        <BtnLink to="/gallery/videos" $activeTab={activeTab}>
          Product Videos
        </BtnLink>
      </Wrapper>
    </Container>
  );
};

export default galleryNavigation;
