import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/router";
import { FirebaseProvider } from "./contexts/firebase-context";
import { ThemeProvider } from "./contexts/theme-context";

export function App() {
  return (
    <FirebaseProvider>
      <ThemeProvider>
        <BrowserRouter>
        <Router />
        </BrowserRouter>
      </ThemeProvider>
    </FirebaseProvider>
  )
}