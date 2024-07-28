import { FirebaseApp, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { 
  createContext, 
  ReactNode, 
  useEffect, 
  useMemo, 
  useState 
} from 'react';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  apiId: import.meta.env.VITE_FIREBASE_API_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
}

export interface FirebaseContextProps {
  firestore: Firestore | null
}

export const FirebaseContext = createContext({} as FirebaseContextProps)

export interface FirebaseProvider {
  children: ReactNode
}

export const FirebaseProvider = ({ children }: FirebaseProvider) => {
  const [firestore, setFirestore] = useState<Firestore | null>(null)

  const firebaseApp: FirebaseApp = useMemo(() => 
    initializeApp(firebaseConfig),
  [])

  useEffect(() => {
    setFirestore(getFirestore(firebaseApp))
  }, [firebaseApp])

  return (
    <FirebaseContext.Provider value={{
      firestore
    }}>
      {children}
    </FirebaseContext.Provider>
  )
}
