import styled from "styled-components";
import { primary_color, black_color } from "./variables";

const Button = styled.button`
  cursor: pointer;
  border-radius: 6px;
  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  -ms-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease;
`;
export const GetStarted = styled(Button)`
  margin-top: 4rem;
  width: 180px;
  height: 57px;
  padding: 1rem 2rem;
  background-color: #fff;
  text-align: center;
  line-height: 35px;
  font-weight: 400;
  font-size: 1.8rem;
  color: ${primary_color};
  text-transform: uppercase;
  -webkit-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
  &:hover {
    background: ${black_color};
    border: 2px solid #fff;
    color: #fff;
    -webkit-transition: all 0.25s ease-in-out;
    transition: all 0.25s ease-in-out;
  }
`;
