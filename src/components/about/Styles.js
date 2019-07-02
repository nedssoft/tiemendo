import styled, { css } from "styled-components";
import {
  primary_color,
  white_color,
} from "../../components/styled/variables";
import { flexColum, transition } from "../styled/reusables";
const flexRow = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
export const Container = styled.div`
  font-family: "Work Sans", sans-serif;
  background-color: ${primary_color};
  -webkit-clip-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );
  clip-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );
  color: ${white_color};
  @media (max-width: 968px) {
    -webkit-clip-path: none;
    clip-path: none;
    width: 100%;
  }
  @media (max-width: 500px) {
    top: 0;
    -webkit-clip-path: none;
    clip-path: none;
    width: 100%;
    margin: 0;
  }
`;
export const Section = styled.section`
  ${flexColum};
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  padding: 4rem 2rem;

  @media (max-width: 500px) {
    width: 100%;
    margin: 0;
  }
`;
export const H1 = styled.h1`
  font-size: 3rem;
  margin-bottom: 4rem;
  padding-bottom: 1rem;
  font-weight: bold;
  text-align: center;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    height: 3px;
    width: 60px;
    background-color: ${white_color};
    bottom: 0;
    left: 20px;
  }
`;
export const Article = styled.article`
    margin-bottom: 3rem;
    p {
      line-height: 1.5;
      font-size: 2rem;
      text-align: center;
      @media (max-width: 500px) {
        text-align: justify;
      }
    }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Profile = styled.div`
  ${flexColum}
  margin-top: 3rem;
  @media (max-width: 500px) {
    width: 100%;
    margin: 3rem 0;
  }
`;
export const H2 = styled.h2`
  margin: 1rem auto;
  padding: 0.8rem 1rem;
  font-size: 3rem;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    height: 3px;
    width: 56px;
    bottom: 0;
    left: 20px;
    background-color: ${white_color};
  }
`;

export const Card = styled.div`
  width: 350px;
  height: 300px;
  margin: 1rem;
  ${flexRow};
  -webkit-box-shadow: 0px 3px 5px 1px rgba(48, 37, 37, 0.459);
  box-shadow: 0px 3px 5px 1px rgba(48, 37, 37, 0.459);
  background-image: url(${props => props.bgImage});
  border-radius: 6px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @media (max-width: 500px) {
    width: 100%;
    margin: auto;
  }
  ${transition};
  &:hover {
    -webkit-transform: scale(1.03, 1);
    transform: scale(1.03, 1);
    -webkit-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
  }
`;

export const CardContent = styled.div`
  ${flexColum};
  display: flex;
  background-color: rgba(37, 37, 37, 0.459);
  border-radius: 6px;
  height: 100%;
  width: 100%;
  h3 {
    font-size: 2.5rem;
    padding: 1rem 0;
  }

  p {
    margin-top: -5rem;
    color: ${white_color};
    text-align: center;
    font-size: 2.5rem;
    padding: 2rem;
  }
`;

export const SocialIcons = styled.div`
  margin-top: 7rem;
  ul {
    ${flexRow};
    margin-top: 2rem;
  }
`;




