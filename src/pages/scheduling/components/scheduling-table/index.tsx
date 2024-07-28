import { useScheduling } from "../../hooks/use-scheduling"
import * as S from './styles'

export function SchedulingTable() {
  const { getTodayHours } = useScheduling()

  const hours = getTodayHours()

  return (
    <div>
      {
        hours?.map(hour => {
          const field = hour.toString().padStart(2, '0')
          const isMyScheduling = hour === 12
          const isSomeoneScheduling = hour === 11
          const isAvailableScheduling = !isMyScheduling && !isSomeoneScheduling

          return (
            <S.ScheduleItem key={hour}>
              <S.ScheduleHour>
                {field}h
              </S.ScheduleHour>
              {isMyScheduling && <S.MyScheduling>Everson - 36A</S.MyScheduling>}
              {isSomeoneScheduling && <S.SomeoneScheduling>Lucero - 54B</S.SomeoneScheduling>}
              {isAvailableScheduling && <S.AvailableScheduling>Reservar</S.AvailableScheduling>}
            </S.ScheduleItem>
          )
        })
      }
    </div>
  )
}