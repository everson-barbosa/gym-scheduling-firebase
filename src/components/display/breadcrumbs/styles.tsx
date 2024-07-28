import { Link } from "react-router-dom";
import styled from "styled-components";

export const Breadcrumbs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin: 1rem 0;
`

export const BreadcrumbLink = styled(Link)`
  text-decoration: none;
  color: ${props => props["aria-disabled"] ? '#a9a9a9' : '#f9f9f9'};
  cursor: ${props => props["aria-disabled"] ? 'default' : 'pointer'};

  &:first-child:after {
    content: '>';
    margin: 0 0 0 .5rem;
  }

  &:last-child:after {
    content: '';
  }

`