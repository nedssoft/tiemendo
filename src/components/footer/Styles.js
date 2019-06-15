import styled, { css } from "styled-components";
import { flexColum, transition } from "../styled/reusables";
import { gray_color, black_color } from "../styled/variables";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;

`

export const Footer = styled.footer`
  width: 100%;
  min-height: 150px;
  background: ${black_color};
  padding: 2rem;
  ${flexColum};
  color: ${gray_color};
  p {
    margin: 2rem auto;
    text-align: center;
    font-size: 1.6rem;
  }
`;

export const Ul = styled.ul`
  ${flexColum};
  flex-direction: row;
`;

const IconStyle = css`
  font-size: 9rem;
  color: ${gray_color};
  padding: 2rem;
  ${transition};
`;

export const FacebookIcon = styled(FaFacebookSquare)`
  ${IconStyle};
  &:hover {
    color     : #3B579D;
    ${transition};
  }
`
export const TwitterIcon = styled(FaTwitterSquare)`
  ${IconStyle};
  &:hover { 
    color     : #29AAE1;
    ${transition};
  }
`
export const LinkedinIcon = styled(FaLinkedin)`
  ${IconStyle};
  &:hover {
    color     : #0374B3;
    ${transition};
  }
`
