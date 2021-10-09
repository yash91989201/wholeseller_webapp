import styled, { css } from "styled-components";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

import { defaultContainer, defaultHeading } from "../shared/shared.styles";

const Container = styled(defaultContainer)`
  /* Display and Box Model  Properties*/
  padding: 24px 0;
  flex-flow: row nowrap;
`;

const Wrapper = styled.div`
  /* Display and Box Model  Properties*/
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const Heading = styled(defaultHeading)`
  /* Display and Box Model  Properties*/
  padding: 0;
`;

const Text = styled.p`
  /* Display and Box Model  Properties*/
  padding: 24px 0;

  /* Color  Properties*/
  color: #505d68;

  /* Text  Properties*/
  text-align: center;
`;

const HLine = styled.div`
  /* Display and Box Model  Properties*/
  width: 85%;
  height: 1px;

  /* Color  Properties*/
  background-color: #c2d1d9;

  /* Media Query*/
  @media only screen and (min-width: 420px) {
    display: none;
  }
`;

const InfoWrapper = styled.div`
  /* Display and Box Model  Properties*/
  width: min(768px, 85%);
  padding: clamp(16px, 8px, 4vh) 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
const ContactWrapper = styled.div`
  /* Display and Box Model  Properties*/
  margin: 16px 32px;
  max-width: 175px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;

  /* Text  Properties*/
  letter-spacing: 1.5px;
  text-align: center;
`;
const IconWrapper = styled.span`
  /* Display and Box Model  Properties*/
  width: 75px;
  height: 75px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;

  /* Color  Properties*/
  background-color: #f2f5f7;
`;

const IconStyling = css`
  /* Positioning  Properties*/
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* Color  Properties*/
  color: #424b5a;

  /* Text  Properties*/
  font-size: 24px;
`;

const EmailIcon = styled(MdEmail)`
  ${IconStyling}
`;
const PhoneIcon = styled(FaPhoneAlt)`
  ${IconStyling}
`;
const MapMarkerIcon = styled(FaMapMarkerAlt)`
  ${IconStyling}
`;

const Type = styled.p`
  /* Display and Box Model  Properties*/
  padding: 8px 0;

  /* Color  Properties*/
  color: #505d68;
`;
const Detail = styled.h4`
  /* Display and Box Model  Properties*/
  padding: 8px 0;

  /* Color  Properties*/
  color: #a1aeb7;
`;

export {
  Container,
  Wrapper,
  Heading,
  Text,
  HLine,
  InfoWrapper,
  ContactWrapper,
  IconWrapper,
  EmailIcon,
  PhoneIcon,
  MapMarkerIcon,
  Type,
  Detail,
};
