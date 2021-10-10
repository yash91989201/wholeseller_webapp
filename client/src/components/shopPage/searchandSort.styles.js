import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

import { defaultContainer } from "components/shared/shared.styles";

const Container = styled(defaultContainer)``;

const Wrapper = styled.div`
  /* Display and Box Model  Properties*/
  width: min(100%, 1100px);
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  /* Media Query */
  @media screen and (min-width: 1024px) {
    /* Display and Box Model  Properties*/
    width: min(75%, 65vw);
    flex-flow: row nowrap;
    justify-content: space-evenly;
  }
`;

const SearchBarWrapper = styled.div`
  /* Positioning  Properties*/
  position: relative;
  /* Display and Box Model  Properties*/
  margin: 16px;
  width: min(70%, 450px);
  flex-shrink: 0;
  @media screen and (max-width: 468px) {
    width: 85%;
  }
`;

const SearchBar = styled.input`
  /* Display and Box Model  Properties*/
  padding: 12px 8px;
  width: 100%;
  /* Text  Properties*/
  font-size: 14px;
  letter-spacing: 0.75px;
`;

const SortWrapper = styled.div`
  /* Display and Box Model  Properties*/
  width: min(40%, 200px);
  flex-shrink: 0;
  /* Media Query */
  @media screen and (max-width: 468px) {
    width: fit-content;
  }
`;

const SearchIcon = styled(FiSearch)`
  /* Positioning  Properties*/
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
`;

export {
  Container,
  Wrapper,
  SearchBarWrapper,
  SearchBar,
  SortWrapper,
  SearchIcon,
};
