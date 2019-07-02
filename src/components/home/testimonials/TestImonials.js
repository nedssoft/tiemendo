import React from "react";
import { Section, Container, Article, TextBox, Image, P } from "./Styles";
import { H2 } from "../../styled/reusables";
import { white_color } from "../../styled/variables";
import data from "./data";

export default function Testimonials() {
  let isReversed = false;
  return (
    <Section>
      <H2 lineColor={white_color} color={white_color}>
        Hear What Our Happy Clients Say
      </H2>
      <Container>
        {data.map((testimony, i) => {
          if (i % 2 === 0) {
            isReversed = true;
          } else isReversed = false;
          return (
            <Article reversed={isReversed} key={i}>
              <TextBox>
                <P>{testimony.text}</P>
                <P author="true">{testimony.author}</P>
              </TextBox>
              <Image src={testimony.img} alt={testimony.alt} />
            </Article>
          );
        })}
      </Container>
    </Section>
  );
}
