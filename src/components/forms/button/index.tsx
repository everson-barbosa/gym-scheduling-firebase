import { HTMLAttributes, ReactNode } from 'react'
import * as S from './styles'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  readonly children: ReactNode
}

export function Button({ children }: ButtonProps) {
  return (
    <S.Button>
      {children}
    </S.Button>
  )
}