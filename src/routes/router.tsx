import { Route, Routes } from "react-router-dom";
import { SchedulingPage } from "../pages/scheduling";
import { PrivateLayout } from "../layouts/private";
import { RootPage } from "../pages/root";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<PrivateLayout />}>
        <Route path="/" element={<RootPage />} />
        <Route path="/scheduling" element={<SchedulingPage />} />
      </Route> 

    </Routes>
  )
}