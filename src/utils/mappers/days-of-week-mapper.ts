import { DayName, DayNumber } from "../../types/date"

const daysByNumber: Record<DayNumber, DayName> = {
  0: 'sunday',
  1: 'monday',
  2: 'tuesday',
  3: 'wednesday', 
  4: 'thursday', 
  5: 'friday',
  6: 'saturday',
}

const daysByName: Record<DayName, DayNumber> = {
  'sunday': 0,
  'monday': 1,
  'tuesday': 2,
  'wednesday': 3,
  'thursday': 4,
  'friday': 5,
  'saturday': 6
}

export class DaysOfWeekMapper {
  static toName(day: DayNumber): DayName {
    return daysByNumber[day]
  }

  static toNumber(day: DayName): DayNumber {
    return daysByName[day]
  }
}