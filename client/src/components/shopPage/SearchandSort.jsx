import React from "react";
import Select from "react-select";
import {
  Container,
  Wrapper,
  SearchBarWrapper,
  SearchBar,
  SortWrapper,
  SearchIcon,
} from "./searchandSort.styles";
const SearchandSort = () => {
  const sortOptions = [
    { label: "Featured", value: "featured" },
    { label: "Recently Added", value: "recentlyAdded" },
    { label: "On Offer", value: "onOffer" },
    { label: "Price : Low to High", value: "priceAscending" },
    { label: "Price : High to Low", value: "priceDescending" },
  ];
  return (
    <Container>
      <Wrapper>
        <SearchBarWrapper>
          <SearchBar placeholder="Search Product..." />
          <SearchIcon />
        </SearchBarWrapper>
        <SortWrapper>
          <Select
            isSearchable={false}
            placeholder="Sort By"
            selectedOption={sortOptions[0]}
            options={sortOptions}
          />
        </SortWrapper>
      </Wrapper>
    </Container>
  );
};

export default SearchandSort;
