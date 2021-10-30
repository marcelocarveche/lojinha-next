import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.lightGray2};
  /* border-bottom: 1px solid ${props => props.theme.colors.baseBlack}; */
  padding: 0 2rem;
  /* width: 100vw; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const Logo = styled.a`
  padding: 1rem 0;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;
  cursor: pointer;
  span{
    font-weight: 300;
    font-size: 1.3rem;
    color: ${props => props.theme.colors.baseBlack};
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span{
    height: 2px;
    width: 25px;
    background: ${props => props.theme.colors.primary};
    margin-bottom: 4px;
    border-radius: 5px;;
  }

  @media(max-width: 800px){
    display: flex;
  }
`;

interface MenuProps {
  isOpen: boolean;
}
export const Menu = styled.nav<MenuProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 800px){
    overflow: hidden;
    flex-direction: column;
    width: 100vw;
    max-height: ${({isOpen}) => (isOpen ? '300px' : '0px')};
  }
  a {


  }

`;

export const MyLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover{
    color: ${props => props.theme.colors.primary};
    font-weight: 800px;
  }
  &[aria-current] {
      color: ${props => props.theme.colors.primary};
      font-weight: 800;
    }
`;

