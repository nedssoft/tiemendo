import styled from "styled-components";
import { flexColum } from "../styled/reusables";
import { gray_color, black_color } from "../styled/variables";

import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const FooterContainer = styled.footer`
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


