import { SeccionTienda } from "./Components/SeccionTienda"
import { Header } from "./Components/Header"
export const App = () => {
  return (
    <>
      <Header
        headerColor="bg-green"
        header2Color="bg-lightColor"
        mitad= "mitad"
      />
     <SeccionTienda/>
     
    </>
  )
}
