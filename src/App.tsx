import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/router";
import { FirebaseProvider } from "./contexts/firebase-context";

export function App() {
  return (
    <FirebaseProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </FirebaseProvider>
  )
}