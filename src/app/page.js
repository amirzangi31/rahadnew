import DashboardPage from "@/components/templates/DashboardPage";
import { redirect } from "next/navigation";


export default function Home() {

 redirect("/admin")


  return (
    <DashboardPage /> 
  )
}
