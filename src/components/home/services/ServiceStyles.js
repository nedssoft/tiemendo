import styled, { css, keyframes } from "styled-components";
import {
  white_color,
  primary_color,
  black_color
} from "../../styled/variables";
import { flexColum, transition, mobileWidth } from '../../styled/reusables'
import { FaSuitcase, FaUsers, FaLeaf, FaUtensils } from "react-icons/fa";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const iconStyle = css`
  color: ${primary_color};
  &:hover {
    animation: ${rotate360} .2s;
  }
`;

export const SuitCaseIcon = styled(FaSuitcase)`
  ${iconStyle};
`;
export const LeafIcon = styled(FaLeaf)`
  ${iconStyle};
`;
export const UsersIcon = styled(FaUsers)`
  ${iconStyle};
`;
export const UtensilsIcon = styled(FaUtensils)`
  ${iconStyle};
`;

export const ServicesContainer = styled.section`
  ${flexColum};
  width: 100%;
  margin: auto;
  padding: 4rem 0;
  background-color: ${white_color};
`;

export const Services = styled.div`
  width: 70%;
  ${flexColum};
  flex-direction: row;
  justify-content: space-between;
  color: ${black_color};
  margin: auto;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    width: 100%;
    padding: 2rem;
  }
`;

export const Service = styled.div`
  width: 46%;
  padding: 2rem;
  ${mobileWidth};
  article {
    ${flexColum};
    width: 100%;
    h3 {
      font-size: 1.8rem;
      color: ${black_color};
      padding: 0.8rem;
      text-align: center;
      position: relative;
      padding-bottom: 1rem;

      &::after {
        content: "";
        position: absolute;
        height: 2px;
        width: 30%;
        background-color: ${primary_color};
        bottom: 0;
        right: 20px;
      }

      &:hover {
        color: ${primary_color};
        ${transition};
      }
    }
    p {
      line-height: 2;
      position: relative;
      margin: 2em auto;
      width: 100%;
      max-height: 100px;
      font-size: 1.6rem;
      overflow: hidden;
      -webkit-transition: max-height 0.5s ease;
      transition: max-height 0.5s ease;
      text-align: justify;
      &.show-all {
        max-height: 100%;
      }
    }
  }
`;
export const ToggleBtn = styled.a`
  font-size: 2rem;
  padding: 0.8rem 1rem;
  border: 2px solid ${primary_color};
  background: white;
  border-radius: 6px;
  color: ${primary_color};
  ${transition};
  text-decoration: none;
  &:hover {
    border: 2px solid ${primary_color};
    background: ${primary_color};
    color: white;
    ${transition};
  }
`;
