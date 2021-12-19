import React, { useState } from 'react'
import { Container, Logo, Hamburger, Menu, MyLink } from './styles'
import Link from 'next/link'
import NavLink from '../NavLink'
import { useContext } from 'react'
import { DataContext } from '../../store/GlobalState'
import { useRouter } from 'next/router'
import { Button } from '@material-ui/core'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const router = useRouter()
  const { state, dispatch } = useContext(DataContext)
  const { auth, cart } = state

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
        <NavLink href="/">
          <MyLink>Produtos</MyLink>
        </NavLink>

        <NavLink href="/sobre">
          <MyLink>Sobre</MyLink>
        </NavLink>
        <NavLink href="/contato">
          <MyLink>Contato</MyLink>
        </NavLink>
        {Object.keys(auth).length === 0 ? (
          <NavLink href="/entrar">
            <MyLink>Entrar</MyLink>
          </NavLink>
        ) : (
          <button
            onClick={() => {
              localStorage.removeItem('primeiroLogin')
              router.push('/')
            }}
          >
            Logout
          </button>
        )}
        <NavLink href="/register/user">
          <MyLink>Cadastrar-se</MyLink>
        </NavLink>
        <NavLink href="/cart">
          <MyLink>
            <AiOutlineShoppingCart size="30px"></AiOutlineShoppingCart>
            <span style={{ position: 'relative', background: 'red', borderRadius: '30%', color: 'white', top: '-22px', left: '-13px', padding: '2px 4px', fontSize: '14px'}}>
              {cart.length}
            </span>
          </MyLink>
        </NavLink>
      </Menu>
    </Container>
  )
}

export default NavBar
