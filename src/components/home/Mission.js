import React from "react";
import { MissionContainer, Article } from "./HomePageStyles";
import { GetStarted } from "../styled/Buttons";

export default function Mission() {
  return (
    <MissionContainer>
      <Article>
        <h2>What We Can Offer</h2>
        <p>
          At Tieme Ndo, we promise every rural farmer convenient and timely
          access to improved farm inputs and technologies that doubles crop
          yield annually without capital requirements. It is a collaborative
          effort to achieve Zero Hunger! No Poverty! We stop at nothing to
          ensure we deliver our promises to our clients.
        </p>
        <GetStarted>Learn More</GetStarted>
      </Article>
    </MissionContainer>
  );
}
