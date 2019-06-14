import React from 'react'
import Logo from './Logo'
import {NavHeader, Hamburger } from './NavigationStyles'

export default function Header({toggle}) {
  return (
    <NavHeader>
      <Logo />
      <Hamburger onClick={() => toggle()} />
    </NavHeader>
  )
}