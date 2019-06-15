
import React from 'react'
import {Footer, Ul, StyledLink, FacebookIcon, TwitterIcon, LinkedinIcon } from './Styles'

export default function footer() {
  return (
    <Footer>
      <Ul>
        <li>
          <StyledLink to="#">
            <FacebookIcon />
          </StyledLink>
        </li>
        <li>
        <StyledLink to="#">
            <TwitterIcon />
          </StyledLink>
        </li>
        <li>
        <StyledLink to="#">
            <LinkedinIcon />
          </StyledLink>
        </li>
      </Ul>
      <p>&copy; Copyright Tieme Ndo. All Rights Reserved</p>
    </Footer>
  )
}