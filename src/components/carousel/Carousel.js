import React, { useState } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { GetStarted } from "../styled/Buttons";
import {
  Container,
  CarouselItem,
  CarouselText,
  Next,
  Prev
} from "./CarouselStyle";
import carouselData from "./carousel-data";

const initialState = {
  carousel: carouselData,
  currentIndex: 0
};
export default function Carousel() {
  const [state, setState] = useState(initialState);
  const { img, alt, title, text } = state.carousel[state.currentIndex];

  const next = () => {
    const imageCount = state.carousel.length - 1;
    let updatedIndex;
    if (state.currentIndex === imageCount ) {
      updatedIndex = 0;
    } else {
      updatedIndex = state.currentIndex + 1
    }
    setState(prevState => ({
      ...prevState,
      currentIndex: updatedIndex,
    }))
  }
  const prev = () => {
    const imageCount = state.carousel.length - 1;
    let updatedIndex;
    if (state.currentIndex === 0 ) {
      updatedIndex = imageCount;
    } else {
      updatedIndex = state.currentIndex - 1
    }
    setState(prevState => ({
      ...prevState,
      currentIndex: updatedIndex,
    }))
  }
  return (
    <Container>
      <Prev>
        <FaArrowCircleLeft onClick={ prev }/>
      </Prev>
      <Next>
        <FaArrowCircleRight  onClick={next}/>
      </Next>
      <CarouselItem>
        <img src={img} alt={alt} />
        <CarouselText>
          <h1>{title}</h1>
          <p>{text}</p>
          <GetStarted>Get Started</GetStarted>
        </CarouselText>
      </CarouselItem>
    </Container>
  );
}
