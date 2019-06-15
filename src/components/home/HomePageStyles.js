import styled, { css} from "styled-components";
import { white_color, gray_color, primary_color } from "../styled/variables";

const transition = css`
  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  -ms-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease;
`;

export const MissionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${primary_color};
  flex-wrap: nowrap;
  @media (max-width: 500px) {
    height: 500px;
  }
`;
export const Article = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${white_color};
    width: 60%;
    margin: auto;
    padding: 2rem;
    @media (max-width: 500px) {
    width: 100%;
  }
    p {
      line-height: 1.5;
      text-align: justify;
      padding-top: 2rem;
      font-size: 1.6rem;
    }

    h2 {
      position: relative;
      padding-bottom: 2rem;
      font-size: 3.2rem;
      font-weight: bold;
      &::after {
        content: " ";
        position: absolute;
        height: 2px;
        width: 30%;
        background-color: ${white_color};
        bottom: 0;
        right: 30%;
      }
      &:hover {
        color: ${gray_color};
        ${transition};
      }
    }
`
