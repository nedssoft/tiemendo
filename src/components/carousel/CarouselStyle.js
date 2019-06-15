import styled from "styled-components";
import { white_color, primary_color } from "../styled/variables";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100vh;
  overflow: hidden;
  position: relative;
  @media (max-width: 500px) {
    height: 240px;
  }
`;
const ControlBtn = styled.span`
  color: ${primary_color};
  font-size: 40px;
  border-radius: 50%;
  position: absolute;
  -webkit-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  &:hover {
    color: ${white_color};
    -webkit-transition: all 0.25s ease-in-out;
    transition: all 0.25s ease-in-out;
  }
`;
export const Prev = styled(ControlBtn)`
  top: 50%;
  left: 25px;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
`;

export const Next = styled(ControlBtn)`
  top: 50%;
  right: 25px;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
`;

export const CarouselItem = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  img {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -o-object-fit: contain;
    object-fit: contain;
  }
`;

export const CarouselText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 30%;
  width: 70%;
  color: ${white_color};
  @media (max-width: 500px) {
    display: none;
  }
  h1 {
    margin-bottom: 4rem;
    color: ${white_color};
    font-size: 4.5rem;
    text-transform: uppercase;
    font-weight: 600;
    color: #fff;
    text-align: center;
    background: rgba(100, 100, 100, 0.2);
  }
  p {
    font-size: 2.5rem;
    line-height: 1.2;
    font-weight: 600;
    color: ${white_color};
    text-align: center;
    background: rgba(100, 100, 100, 0.2);
  }
`;
