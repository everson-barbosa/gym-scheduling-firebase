import { CalendarClockIcon, CalendarFoldIcon, CalendarX2Icon, FlameIcon, Link } from "lucide-react";
import * as S from './styles'

export function RootPage() {
  const isAlreadyReserved = true

  return (
    <div>
      <S.Insight>
        <S.Streak>
          <span>Investida</span>
          <FlameIcon size={24}/>
        </S.Streak>
        <S.History>
          <span>Histórico</span>
          <FlameIcon size={24}/>
        </S.History>
      </S.Insight>
      <div>
        {
          !isAlreadyReserved && 
            <div>
              <h3>Deseja utilizar a academia hoje?</h3>

              <Link to='/scheduling'><CalendarFoldIcon /> Agendar horário</Link>
            </div>
        }

        {
          isAlreadyReserved && 
          <S.Card>
            <h3>Você tem um horário agendado para as (15h)</h3>

            <S.Actions>
              <S.ButtonLink to='/scheduling'>
                <CalendarClockIcon /> Alterar horário
              </S.ButtonLink>
              <S.ButtonLink to='/scheduling'>
                <CalendarX2Icon /> Cancelar horário
              </S.ButtonLink>
            </S.Actions>
          </S.Card>
        }

      </div>
    </div>
  )
}