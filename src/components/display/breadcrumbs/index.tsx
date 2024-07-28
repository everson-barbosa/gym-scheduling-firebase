import { Link } from "react-router-dom"
import * as S from './styles'

interface Link {
  readonly name: string
  readonly href: string
}

interface BreadcrumbsProps {
  readonly links: Link[]
}

export function Breadcrumbs({ links }: BreadcrumbsProps) {
  return (
    <S.Breadcrumbs>
      {
        links.map((link, index) => {
          const isTheLastLink = links.length === (index + 1)

          return (
            <S.BreadcrumbLink 
              aria-disabled={isTheLastLink} 
              to={link.href} 
              key={link.name}
            >
              {link.name}
            </S.BreadcrumbLink>
          )
        })
      }
    </S.Breadcrumbs>
  )
}