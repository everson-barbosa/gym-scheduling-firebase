import { DayName } from "../../../date"

interface Day {
  hours: number[]
}

export interface Parameters {
  days: Record<DayName, Day>
}