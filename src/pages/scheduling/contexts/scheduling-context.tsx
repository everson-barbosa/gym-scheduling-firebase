import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { Parameters } from "../../../types/firebase/firestore/scheduling/Parameters";
import { useFirebase } from "../../../hooks/use-firebase";
import { DaysOfWeekMapper } from "../../../utils/mappers/days-of-week-mapper";
import { DayNumber } from "../../../types/date";
import { subscriberSchedulingParameters } from "../../../services/firebase/firestore/scheduling/subscriber-scheduling-parameters";
import { Unsubscribe } from "firebase/firestore";

export interface SchedulingContextProps {
  parameters: Parameters | null
  getTodayHours: () => number[]
}

export const SchedulingContext = createContext({} as SchedulingContextProps)

interface SchedulingProviderProps {
  readonly children: ReactNode
}

export const SchedulingProvider = ({ children }: SchedulingProviderProps) => {
  const { firestore } = useFirebase()
  const [parameters, setParameters] = useState<Parameters | null>(null)

  const getParameters = useCallback(async () => {
    let unSubscribe: Unsubscribe

    if (firestore) {
      try {
        unSubscribe = subscriberSchedulingParameters(
          { db: firestore, 
            onSnapshotData(data) {
              setParameters(data)
            }, 
          })
      } catch (error) {
        console.error({ error })
      }
    }

    return () => {
      console.log('demonstou')
      unSubscribe()
    }
  }, [firestore])

  const getTodayHours = useCallback(() => {
    if (!parameters) return []
    
    const todayWeekDayNumber = new Date().getDay() as DayNumber
    const todayWeekDayName = DaysOfWeekMapper.toName(todayWeekDayNumber)

    const hours = parameters?.days?.[todayWeekDayName]?.hours ?? []

    return hours
  }, [parameters])

  const getTodaySchedules = useCallback(() => {

  }, [])

  useEffect(() => {
    getParameters()
  }, [getParameters])

  return (
    <SchedulingContext.Provider value={{
      parameters,
      getTodayHours
    }}>
      { children }
    </SchedulingContext.Provider>
  )
}