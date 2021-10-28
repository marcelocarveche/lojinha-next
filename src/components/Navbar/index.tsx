import React, { useState } from 'react';
import {Container, Logo, Hamburger, Menu, MenuLink} from '../../styles/Pages/Navbar';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Container>
      <Logo href="">
        Loja<span>E-commerce</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
      <span></span>
      <span></span>
      <span></span>
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink>Sobre</MenuLink>
        <MenuLink>Contato</MenuLink>
        <MenuLink>Entrar</MenuLink>
        <MenuLink>Cadastrar-se</MenuLink>
      </Menu>
    </Container>
  );
};

export default NavBar;
