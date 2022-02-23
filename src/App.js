import React from 'react'
// import './App.css';
// import Primeiro from './components/Primeiro'
// import MinMax from './components/MinMax';
// import Titulo from './components/Titulo'
// import Botao from './components/Botao'
// import ComponentPadrao, {Component1,Component2} from './components/Multi.js'
import Contador from './components/Contador'


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
    <React.Fragment>
      {/* <Primeiro /> */}
       {/* <Primeiro><Primeiro/> */}
      {/* <MinMax min="2" max="10"/> */}
      {/* <MinMax min={4} max={15}/> */}
      {/* <Titulo principal="Olá" secundario="tudo bem?"/> */}
      {/* <Botao/> */}
      <Contador inicial={0} passo={10} limiteMax={100}></Contador>
    </React.Fragment>
  )
}

