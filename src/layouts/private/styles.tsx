import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-Content: center;
  height: 3rem;
  background-image: linear-gradient(#060612, #161622, transparent);
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