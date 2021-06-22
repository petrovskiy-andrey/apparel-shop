import React from 'react'
import { Link } from 'react-router-dom'

import {
  HeaderWrapper,
  LogoContainer,
  HeaderOptions,
  Option,
} from './HeaderStyles'
import { ReactComponent as Logo } from '../../assets/crown.svg'

function Header() {
  const options = [
    { name: 'SHOP', link: 'shop' },
    { name: 'CONTACT', link: 'contact' },
    { name: 'SIGN IN', link: 'sign-in' },
  ]

  return (
    <HeaderWrapper>
      <Link to="/">
        <LogoContainer>
          <Logo />
        </LogoContainer>
      </Link>
      <HeaderOptions>
        {options.map(({ name, link }) => (
          <Link to={`/${link}`} key={name}>
            <Option>{name}</Option>
          </Link>
        ))}
      </HeaderOptions>
    </HeaderWrapper>
  )
}

export default Header
