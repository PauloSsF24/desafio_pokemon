import DashboardHeader from "@/components/dashboard/DashboardHeader"
import DashboardCards from "@/components/dashboard/DashboardCards"
import PokemonTable from "@/components/dashboard/PokemonTable"

export default function DashboardPage(){

  return(

    <div className="p-8">

      <DashboardHeader />

      <DashboardCards />

      <PokemonTable />

    </div>

  )

}