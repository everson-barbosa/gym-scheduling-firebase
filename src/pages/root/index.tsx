import { CalendarFoldIcon, FlameIcon } from "lucide-react";
import { Link } from "react-router-dom";

export function RootPage() {
  const isAlreadyReserved = true

  return (
    <div>
      <div>
        <div>
          <span>Investida</span>
          <FlameIcon />
        </div>
      </div>
      <div>
        {
          !isAlreadyReserved && 
            <div>
              <h3>Deseja utilizar a academia hoje?</h3>

              <Link to='/scheduling'><CalendarFoldIcon /> Agendar horário</Link>
            </div>
        }

        {
          isAlreadyReserved && 
          <div>
            <h3>Você tem um horário agendado para as (15h)</h3>

            <Link to='/scheduling'><CalendarFoldIcon /> Cancelar horário</Link>
            <Link to='/scheduling'><CalendarFoldIcon /> Alterar horário</Link>
          </div>
        }

      </div>
    </div>
  )
}