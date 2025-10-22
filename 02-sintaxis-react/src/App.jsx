// va mos a importar los estilos y el component infocard 
import { InfoCard } from "./assets/components/InfoCard"
import "./App.css"
import { UserCard } from "./assets/components/UserCard"
import { InfoLibros } from "./assets/components/InfoLibros"


export function App () {
  return (
    <div>
    <h1>App</h1>
    <InfoCard />
    <UserCard 
    image= "https://rickandmortyapi.com/api/character/avatar/138.jpeg"
    userName="pepe"

    />
     <UserCard 
    image= "https://rickandmortyapi.com/api/character/avatar/157.jpeg"
    userName="hola"
    />
    <UserCard 
    image= "https://rickandmortyapi.com/api/character/avatar/635.j"
    userName="chao"
    />
      <UserCard 
    image= "https://rickandmortyapi.com/api/character/avatar/742.jpeg"
    userName="ahh"

    />
      <UserCard 
    image= "https://rickandmortyapi.com/api/character/avatar/635.jpeg"
    userName="ahh"

    />
    <InfoLibros 
    titulo= "soledad"
    portadalibro= "https://sites.utexas.edu/ransomcentermagazine/files/2017/05/BK_GarciaMarquezG_7_1_001-205x300.jpg"

    />
    <InfoLibros 
    titulo= "Al 90% le gustó este libro Usuarios de Google Cien años de soledad es una novela del escritor colombiano ganador del Premio Nobel de Literatura Gabriel García Márquez. Es opinión general que se trata de una obra maestra de la literatura hispanoamericana y universal, y es una de las obras más traducidas y leídas en español.​"

    portadalibro= " https://i.pinimg.com/originals/d3/11/f8/d311f8d9d6bfc0d36038ed26b66d0927.jpg"


    />
    

    
    
    
     
    </div>
  )
}