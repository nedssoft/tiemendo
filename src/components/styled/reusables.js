import styled, { css } from "styled-components";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { primary_color, black_color, gray_color, white_color } from "./variables";

export const transition = css`
  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  -ms-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease;
`;
export const mobileWidth = css`
  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const flexColum = css`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const H2 = styled.h2`
  position: relative;
  padding-bottom: 2rem;
  font-size: 3.2rem;
  font-weight: bold;
  color: ${props => props.color ? props.color : black_color };
  &::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 30%;
    background-color: ${props => props.lineColor ? props.lineColor : primary_color};
    bottom: 0;
    right: 40%;
  }
  &:hover {
    color: ${props => {
      if (props.color && props.color === black_color) return primary_color;
      else if (props.color && props.color === primary_color ) return white_color;
      else if (props.color && props.color === white_color ) return gray_color;
      else return primary_color;
    }};
    ${transition};
  }
`;

const IconStyle = css`
  font-size: 6rem;
  color: ${gray_color};
  padding: 0.8rem;
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
export const GitHubIcon = styled(FaGithubSquare)`
  ${IconStyle};
  &:hover {
    color: #161515;
    ${transition};
  }
`;