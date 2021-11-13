import styled from "styled-components";
import { MdOutlineClose } from "react-icons/md";
import { defaultContainer } from "components/shared/shared.styles";

/* Positioning  Properties*/
/* Display and Box Model  Properties*/
/* Color  Properties*/
/* Text  Properties*/
/* Other Properties */
/* Animation Properties */
/* Pseudo Class Properties*/
/* Media Query*/

const Container = styled(defaultContainer)`
  /* Display and Box Model  Properties*/
  padding: 0;
`;

const Wrapper = styled.div`
  /* Positioning Properties */
  position: relative;
  /* Display and Box Model  Properties*/
  padding: 24px;
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  /* Media Query*/
  @media screen and(min-width:420px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  @media screen and(min-width:768px) {
    grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
  }
`;
const ImageWrapper = styled.div`
  /* Display and Box Model  Properties*/
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  /* Other Properties */
  cursor: pointer;
  object-fit: scale-down;
`;
const Image = styled.img`
  /* Display and Box Model  Properties*/
  width: 100%;
`;
const ImageCaption = styled.p`
  /* Display and Box Model  Properties*/
  padding: 12px 0;
  max-width: 200px;
  /* Text  Properties*/
  text-align: center;
`;

const ImageShowCase = styled.section`
  /* Media Query*/
  @media screen and (min-width: 1024px) {
    /* Positioning  Properties*/
    position: fixed;
    top: 80px;
    right: 0;
    /* Display and Box Model  Properties*/
    margin-bottom: 0px;
    width: 50vw;
    height: calc(100vh - 80px);
    display: ${({ $showCaseOpen }) => ($showCaseOpen ? "flex" : "none")};
    flex-flow: column nowrap;
    /* Text  Properties*/
    /* Other Properties */
    object-fit: scale-down;
    /* Animation Properties */
    /* Pseudo Class Properties*/
  }
`;

const BtnWrapper = styled.div`
  /* Display and Box Model  Properties*/
  padding: 8px;
  /* Color  Properties*/
  background: #f5f5f5;
`;

const CloseIcon = styled(MdOutlineClose)`
  /* Text  Properties*/
  font-size: 24px;
  /* Other Properties */
  cursor: pointer;
`;

export {
  Container,
  Wrapper,
  ImageWrapper,
  Image,
  ImageCaption,
  ImageShowCase,
  BtnWrapper,
  CloseIcon,
};
