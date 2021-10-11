import React from "react";

import { BtnLinkWrapper, BtnLink, RightArrow } from "./goBack.styles";

const GoBack = () => {
  return (
    <BtnLinkWrapper>
      <RightArrow />
      <BtnLink to="/">Go Back</BtnLink>
    </BtnLinkWrapper>
  );
};

export default GoBack;
