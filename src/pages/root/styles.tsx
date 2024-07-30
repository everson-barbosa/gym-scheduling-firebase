import { Link } from "react-router-dom";
import styled from "styled-components";

export const Insight = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const Streak = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: .5rem 2rem;
  background-color: orange;
  background-image: linear-gradient(red, orange);
`

export const History = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: .5rem 2rem;
  background-color: purple;
  background-image: linear-gradient(purple, dodgerblue);
`

export const Card = styled.section`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
`

export const Actions = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 16px;
`

export const ButtonLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: .5rem 1rem;

  text-decoration: none;
  border-radius: 4px;
  color: #f9f9ff;
  background-color: rgba(0,0,0,.2);
  transition: all .2s ease-in;

  &:hover {
    background-color: rgba(0,0,0,.4);
  }

`