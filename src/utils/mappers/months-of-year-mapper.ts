import { MonthName, MonthNumber } from "../../types/date"

const monthsByName: Record<MonthName, MonthNumber> = {
  january: 0,
  february: 1,
  march: 2,
  april: 3,
  may: 4,
  june: 5,
  july: 6,
  august: 7,
  september: 8,
  october: 9,
  november: 10,
  december: 11
} 

const monthsByNumber: Record<MonthNumber, MonthName> = {
  0: 'january',
  1: 'february',
  2: 'march',
  3: 'april',
  4: 'may',
  5: 'june',
  6: 'july',
  7: 'august',
  8: 'september',
  9: 'october',
  10: 'november',
  11: 'december'
} 

export class MonthsOfYearMapper {
  static toName(raw: MonthNumber): MonthName {
    return monthsByNumber[raw]
  }

  static toNumber(raw: MonthName): MonthNumber {
    return monthsByName[raw]
  }
}