import { useState } from "react";
import styled from "styled-components";
const Text = styled.p`
  /* Display and Box Model  Properties*/
  width: 100%;
  /* Text  Properties*/
  font-size: inherit;
  font-weight: inherit;
  line-height: 20px;
`;
const ReadMoreBtn = styled.span`
  /* Display and Box Model  Properties*/
  display: inline-block;
  margin: 0 8px;
  /* Color  Properties*/
  color: #2874f0;
  /* Text  Properties*/
  font-weight: bold;
  /* Other Properties */
  cursor: pointer;
`;

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <Text>
      {isReadMore ? text.slice(0, 150) : text}
      <ReadMoreBtn onClick={toggleReadMore}>
        {isReadMore ? "... Read More" : ". Show Less"}
      </ReadMoreBtn>
    </Text>
  );
};

export default ReadMore;
