
import { Comic } from "./Components/Comic"
import { Tienda } from "./Components/Tienda"
export const App = () => {
  return (
    <>
     {/*  <Tienda
        headerColor="bg-green"
        header2Color="bg-lightColor"
        mitad= "mitad"
      />
     */}
     <Comic
         headerColor="bg-green"
         header2Color="bg-lightColor"
         edificios="edificios"
        />
     
    </>
  )
}
