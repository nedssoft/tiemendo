import React from 'react'
import {Li, CustomNavLink } from './NavigationStyles'


export default function NavItem({ children, link, exact }) {
  return (
    <Li>
      <CustomNavLink exact={exact} to={link}>
        { children }
      </CustomNavLink>
    </Li>
  )
}