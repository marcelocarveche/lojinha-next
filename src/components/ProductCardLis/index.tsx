import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-wrap: wrap;
`;

const index: React.FC = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  );
};

export default index;
