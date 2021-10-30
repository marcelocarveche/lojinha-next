import React, { useState } from 'react'
import { Container, Logo, Hamburger, Menu, MyLink } from './styles'
import Link from 'next/link'
import NavLink from '../NavLink'

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <Container>
      <Link href="/">
        <Logo>
          Loja<span>E-commerce</span>
        </Logo>
      </Link>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <Menu isOpen={isOpen}>
        <NavLink href="/sobre">
          <MyLink>Sobre</MyLink>
        </NavLink>
        <NavLink href="/contato">
          <MyLink>Contato</MyLink>
        </NavLink>
        <NavLink href="/entrar">
          <MyLink>Entrar</MyLink>
        </NavLink>
        <NavLink href="/register/user">
          <MyLink>Cadastrar-se</MyLink>
        </NavLink>
      </Menu>
    </Container>
  )
}

export default NavBar
