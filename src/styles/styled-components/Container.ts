import styled from 'styled-components'

export const Container = styled.div`
  padding: 2rem;
  background: #fff;
  border-radius: 1rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  form {
    flex-grow: 5;
  }
  & > span {
    width: 400px;
    flex-grow: 5;
    background-image: url('/Scenes/Scenes07.svg');
    background-repeat: no-repeat;
    background-size: 700px;
    @media (max-width: 1000px) {
      display: none;
    }
  }
`

export const ContainerLogin = styled(Container)`
justify-content: center;
  form {
    flex-grow: 15;
  }
  & > span {
    background-image: url('/Scenes/Scenes08.svg');
    background-size: 400px;
  }
`;
