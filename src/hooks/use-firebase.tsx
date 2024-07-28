import { useContext } from "react";
import { FirebaseContext, FirebaseContextProps } from "../contexts/firebase-context";

export const useFirebase = (): FirebaseContextProps => useContext(FirebaseContext)