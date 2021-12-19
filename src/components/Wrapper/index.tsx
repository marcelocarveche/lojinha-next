import React, { Children } from 'react';
import NavBar from '../Navbar';
import {Container} from './styles'
import Notify from '../Notify';

const Wrapper: React.FC = (props) => {
  return (
    <>
      <NavBar/>
      <Notify />
      <Container>
        {props.children}
      </Container>
    </>
  );
};

export default Wrapper;
