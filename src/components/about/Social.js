import React from 'react'
import { SocialIcons } from './Styles'
import { FacebookIcon, TwitterIcon, LinkedinIcon, GitHubIcon } from '../styled/reusables'
import 'styled-components/macro'


export default function SocialLink({ links }) {
  return (
    <SocialIcons>
      <ul>
        <li>
          <a href={`https://facebook.com/${links[0].username}`}>
            <FacebookIcon />
          </a>
        </li>
        <li>
          <a href={`https://twitter.com/${links[1].username}`} >
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a href={`https://linkedin.com/${links[2].username}`}>
            <LinkedinIcon />
          </a>
        </li>
        <li>
          <a href={`https://github.com/${links[3].username}`} >
          <GitHubIcon />
          </a>
        </li>
      </ul>
    </SocialIcons>
  )
}