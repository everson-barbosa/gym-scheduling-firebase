import { Breadcrumbs } from "../../components/display/breadcrumbs";
import { SchedulingTable } from "./components/scheduling-table";
import { SchedulingProvider } from "./contexts/scheduling-context";

export function SchedulingPage() {

  return (
    <SchedulingProvider>
      <Breadcrumbs links={[ 
        { href: '/', name: 'Home' },
        { href: '/', name: 'Agendamentos' } 
      ]}/>
      <SchedulingTable />
    </SchedulingProvider>
  )
}
