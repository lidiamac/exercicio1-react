import React from 'react'
import './App.css';
import Primeiro from './components/Primeiro'
import CompPadrao,{Component1,Component2} from './components/Multi'

// function App(){
//   return <h1>Primeiro componente</h1>
// }
// export default App


//Atribuindo uma variavel ao retorno função
// const App = function(){
//   return <h1>Primeiro componente</h1>
// }


//Função anonima e exportando direto
// export default function(){
//   return <h2>Primeiro componente</h2>
// }


//usando arrow function
// export default () => {
//   return <h2>Primeiro componente</h2>
// }


//Usando arrow function com o return implícito
// export default () => <h2>Primeiro componente</h2>

export default function App(){
  return (
    <Primeiro/>
    // <Primeiro><Primeiro/>
  )
}

