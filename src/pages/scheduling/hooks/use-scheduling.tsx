import { useContext } from "react";
import { SchedulingContext, SchedulingContextProps } from "../contexts/scheduling-context";

export const useScheduling = (): SchedulingContextProps => useContext(SchedulingContext)