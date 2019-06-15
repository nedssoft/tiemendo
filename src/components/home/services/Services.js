import React from "react";
import {
  ServicesContainer,
  Services,
  Service,
  ToggleBtn,
  SuitCaseIcon,
  UsersIcon,
  UtensilsIcon,
  LeafIcon
} from "./ServiceStyles";
import { H2 } from '../../styled/reusables'

export default function services() {

  const toggleParagragh = (e) => {
    e.preventDefault()
    const btn = e.target;
    const el = btn.parentElement.querySelector('p');
    const height = getComputedStyle(el).getPropertyValue('max-height');
    if (height === '100px') {
      el.classList.add('show-all');
      btn.textContent = 'Less...'
      btn.setAttribute('aria-expanded', true);
    } else {
      el.classList.remove('show-all');
      btn.textContent = 'More...'
      btn.setAttribute('aria-expanded', false);
    }
  }
  return (
    <ServicesContainer>
      <H2>Our Core Services</H2>
      <Services>
        <Service>
          <article>
            <h3>
              <span><SuitCaseIcon /> </span>
              SAD
            </h3>
            <p>
              In the bid to transform smallholder farmers into semi-commercial
              farmers and agripreneurs, Tieme Ndo empower farmers to take
              advantage of business opportunities along the agricultural value
              chain through SAD (Small Agribusiness Development). The aim of SAD
              is to train farmers on entrepreneurship and value addition.
            </p>
            <ToggleBtn href="#" aria-expanded="false" onClick={toggleParagragh}>
              More...
            </ToggleBtn>
          </article>
        </Service>
        <Service>
          <article>
            <h3>
              <span><LeafIcon /> </span>
              Credit Extension Package
            </h3>
            <p>
              CEP is our innovative package that eliminates the capital
              constraints limiting farmers ability to increase crop productivity
              and the adoption of improved farm technologies. With our CEP,
              farmers access fertilizers and seeds when they most need it at
              their convenience. They receive training and field extension to
              enforce appropriate usage of inputs and implementation of good
              agricultural practices. Without markets, farmers are less
              motivated to increase production – linking farmers to favorable
              markets is our topmost priority.
            </p>
            <ToggleBtn href="#" aria-expanded="false" onClick={toggleParagragh}>
              More...
            </ToggleBtn>
          </article>
        </Service>
        <Service>
          <article>
            <h3>
              <span><UtensilsIcon /> </span>
              Food Security
            </h3>
            <p>
              We understand the importance of food security and the need for a
              society to be stable enough to sustain itself – at least, as far
              as food is concerned. That is why Tieme Ndo goes at length to
              assists rural farmers to access quality farming inputs in a timely
              manner. With this strategy, farmers can improve their yield by
              harnessing these inputs, and food remains available, accessible,
              utilizable and stable.
            </p>
            <ToggleBtn href="#" aria-expanded="false" onClick={toggleParagragh}>
              More...
            </ToggleBtn>
          </article>
        </Service>
        <Service>
          <article>
            <h3>
              <span><UsersIcon /> </span>
              Farmers' Cooperative
            </h3>
            <p>
              Multitude they say is strength, at Tieme Ndo, we believe in the
              power of numbers. Hence, we have designed a formidable structure
              which enables the farmers to leverage on the power of numbers
              through our farmers' cooperative society. Farmers who enrol in the
              Cooperative program have more opportunities to more loans and
              assistance within the cooperative society.
            </p>
            <ToggleBtn href="#" aria-expanded="false" onClick={toggleParagragh}>
              More...
            </ToggleBtn>
          </article>
        </Service>
      </Services>
    </ServicesContainer>
  );
}
