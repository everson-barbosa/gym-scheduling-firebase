import styled from "styled-components";

export const Content = styled.div`
  background-color: ${(props) => props.theme.gray[0]};
  color: ${(props) => props.theme.gray[1000]};
  transition: color .3s linear;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-Content: space-between;
  height: 3rem;
  padding: 0 1rem;
  background-image: linear-gradient(
    ${(props => props.theme.gray['0'])}, 
    transparent
  );
  position: sticky;
  top: 0;
  left: 0;
`

export const Main = styled.main`
  min-height: 100vh;
  padding: 0 1rem;
`

export const Footer = styled.footer`
  background-color: rgba(0,0,0,.1);
  padding: .5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: .875rem;
  }

  span {
    font-size: .75rem;
  }
`