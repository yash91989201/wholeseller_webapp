import styled from "styled-components";

import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

import { defaultContainer } from "../shared/utilityStyling";

const Container = styled(defaultContainer)`
  flex-flow: row nowrap;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;
const Heading = styled.h1`
  text-align: center;
  color: #505d68;
`;
const Text = styled.p`
  text-align: center;
  padding: 24px 0;
  color: #505d68;
`;
const HLine = styled.div`
  height: 1px;
  width: 85%;
  background-color: #c2d1d9;
  @media only screen and (min-width: 420px) {
    display: none;
  }
`;
const InfoWrapper = styled.div`
  width: 85%;
  max-width: 768px;
  padding: 32px 0;

  display: flex;
  flex-flow: row wrap;
  /* justify-content: center; */
  /* align-items: center; */
`;
const ContactWrapper = styled.div`
  margin: 16px auto;
  max-width: 175px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  letter-spacing: 1.5px;
  text-align: center;
`;
const IconWrapper = styled.span`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  position: relative;
  background-color: #f2f5f7;

  display: flex;
  justify-content: center;
  align-content: center;
`;

const IconStyling = `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: #424b5a;
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
  color: #505d68;
  padding: 8px 0;
`;
const Detail = styled.h4`
  padding: 8px 0;
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
