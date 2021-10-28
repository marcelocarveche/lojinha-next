import React, { Children } from 'react';
import NavBar from '../Navbar';
import {Container} from '../../styles/Pages/Wrapper'

const Wrapper: React.FC = (props) => {
  return (
    <>
      <NavBar/>
      <Container>
        {props.children}
      </Container>
    </>
  );
};

export default Wrapper;
