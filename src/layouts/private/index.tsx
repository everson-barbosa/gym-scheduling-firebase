import { Outlet } from "react-router-dom";
import  * as S from './styles'
import { AuthGuard } from "./auth-guard";

export function PrivateLayout() {
  const todayInDateFormatted = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
  }).format(new Date())

  return (
    <AuthGuard>
      <S.Header>
        {todayInDateFormatted}
      </S.Header>

      <S.Main>
        <Outlet />
      </S.Main>

      <S.Footer>
        <p>All rights reserved</p>
        <span>everson.silva</span>
      </S.Footer>
    </AuthGuard>
  )
}