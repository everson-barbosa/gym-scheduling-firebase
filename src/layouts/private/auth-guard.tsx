import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { ReactNode, useEffect, useState } from "react";

interface AuthGuardProps {
  children: ReactNode
}

export function AuthGuard({ children }: AuthGuardProps) {
  // const []
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const auth = getAuth();
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user)

        console.log({ user })        
      } else {
        console.log('logout')
      }
    })
  }, [auth])

  console.log(currentUser)

  return (
    children
  )
}