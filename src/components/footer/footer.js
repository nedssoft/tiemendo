
import React from 'react'
import {FooterContainer, Ul, StyledLink} from './Styles'
import {  FacebookIcon, TwitterIcon, LinkedinIcon } from '../styled/reusables'

export default function Footer() {
  return (
    <FooterContainer>
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
    </FooterContainer>
  )
}