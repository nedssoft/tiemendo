import React, {useState} from 'react'
import { Nav, NavContainer } from './NavigationStyles'
import Header from './NavHeader'
import NavItems from './NavItems'

export default function Navigation() {

  const [isOpen, setState ] = useState(false)

  const toggleNav = () => {
    setState(prevState => !prevState);
  }

  return (
    <NavContainer>
    <Nav>
      <Header toggle={toggleNav} />
      <NavItems flex={isOpen}/>
    </Nav>
    </NavContainer>
  )
}