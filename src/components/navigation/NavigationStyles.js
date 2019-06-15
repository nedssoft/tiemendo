import styled from 'styled-components'
import { FaLeaf, FaBars } from 'react-icons/fa'
import { NavLink, Link } from 'react-router-dom'
import { primary_color, black_color } from '../styled/variables'


export const NavContainer = styled.header`
   position: fixed;
   z-index: 1000;
   top: 0;
   left: 0;
   width: 100%;
   transition: all 0.5s ease-in-out;
   -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
`
export const Nav = styled.nav`
  width: 100%;
  height: 72px;
  background: #fff;
  > * {
    height: 100%;
  }
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 2rem 0;
  }
`
export const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  position: absolute;
  left: 200px;
  @media (max-width: 500px) {
    position: relative;
    left: 0;
    right: 0;
    padding: 0 1.5rem;
  }
`
export const Logo = styled.div`
  display: inline-block;
  span {
    color: ${primary_color};
    font-weight: 600;
    font-size: 1.4rem;
  }
`
export const LogoIcon = styled(FaLeaf)`
  color: ${primary_color};
  font-size: 2rem;
`
export const Hamburger = styled(FaBars)`
  color: ${primary_color};
  cursor: pointer;
  font-size: 1.6rem;
  display: none;
  @media (max-width: 500px) {
    display: inline-block;
  }
  &:hover {
    border: 1px solid ${primary_color};
    border-radius: 4px;
    padding: 2px;
  }
`
export const Ul = styled.ul`
  list-style: none;
  position: absolute;
  right: 200px;
  display: flex;
  align-items: center;
  @media (max-width: 500px) {
    position: relative;
    left: 0;
    padding: 0 1.5rem;
    padding-bottom: 2rem;
    flex-direction: column;
    display: ${props => props.flex? 'flex' : 'none'};
  }
`
export const Li = styled.li`
  padding:  2rem;
  display: inline-block;
`
export const CustomNavLink = styled(NavLink)`
  color: ${black_color};
  font-size: 1.6rem;
  text-decoration: none;
  padding-bottom: 2.1rem;
  line-height: 1.5;
  text-transform: uppercase;
  &:hover, &.active {
    border-bottom: 4px solid ${primary_color};
    color: ${primary_color};
  }
`
export const CustomLink = styled(Link)`
  text-decoration: none;
`
