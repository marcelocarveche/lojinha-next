import styled from 'styled-components'

export const Container = styled.div`
  padding: 2rem;
  background: #fff;
  border-radius: 1rem;
  margin-top: 2rem;
  display: flex;
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
