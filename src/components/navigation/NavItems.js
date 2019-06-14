import React from 'react'

import { Ul } from './NavigationStyles'
import NavItem from './NavItem'

export default function NavItems({ flex }) {
  return (
    <Ul flex={flex}>
      <NavItem  exact link="/">Home</NavItem>
      <NavItem link="/about-us">About</NavItem>
    </Ul>
  )
}