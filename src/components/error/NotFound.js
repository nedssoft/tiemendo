import React from 'react'
import 'styled-components/macro'
import { Container, Button } from './Styles'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <Container>
      <h1><span>4</span> <span>0</span> <span>4</span></h1>
      <p>It Looks Like Someone is Lost!</p>
        <Button><Link  to="/" css="color: black; text-decoration: none;">Take Me Home</Link></Button>
    </Container>
  )
}