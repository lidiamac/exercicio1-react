import React from 'react'
import CadastroNome from './classes/CadastroNome'
// import DigiteSeuNome from './estadoControlado/DigiteSeuNome'
// import ListaProdutos from './produtos/ListaProdutos'
// import ParImpar from './components/parImpar/ParImpar'
// import UsuarioLogado from './components/condicional2/UsuarioLogado'
// import Familia from './components/children/Familia'
// import Membro from './components/children/Membro'
// import Filho from './components/indireta/Pai'
// import Pai from './components/direta/Pai'
// import Carro from '../src/components/carro/Carro'
// import './App.css';
// import Primeiro from './components/Primeiro'
// import MinMax from './components/MinMax';
// import Titulo from './components/Titulo'
// import Botao from './components/Botao'
// import ComponentPadrao, {Component1,Component2} from './components/Multi.js'
// import Contador from './components/Contador'



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

export default function App() {
  return (
    <>
      <CadastroNome/>


      {/* <DigiteSeuNome /> */}

      {/* <ListaProdutos /> */}


     {/* <UsuarioLogado usuario={{nome: 'Gui', email: 'gui@gmail.com'}}/>
      <UsuarioLogado usuario={{nome: 'Ana'}}/>
      <UsuarioLogado usuario={{email: 'carlos@empresa.com.br'}}/>
      <UsuarioLogado usuario={{}}/>
      <UsuarioLogado usuario={{}}/> */}


    {/* <ParImpar num={3}/>
    <ParImpar num={2}/> */}
      {/* <Familia>
        <Membro nome="Jonas" sobrenome="Oliveira"/>
        <Membro nome="Ronaldo" sobrenome="Oliveira"/>
        <Membro nome="Zina" sobrenome="Oliveira"/>
      </Familia>

      <Familia>
        <Membro nome="Lidia" sobrenome="Maciel"/>
        <Membro nome="Samoel" sobrenome="Maciel"/>
        <Membro nome="Sandra" sobrenome="Reis"/>
      </Familia> */}

      {/* <Primeiro /> */}
      {/* <Primeiro><Primeiro/> */}
      {/* <MinMax min="2" max="10"/> */}
      {/* <MinMax min={4} max={15}/> */}
      {/* <Titulo principal="Olá" secundario="tudo bem?"/> */}
      {/* <Botao/> */}
      {/* <Contador inicial={0} passo={10} limiteMax={100}></Contador> */}
      {/* <ul>
        <Carro modelo="M4 CS" marca="BMW" cor="Preto" ano="2022" portas="4 Portas" combustivel="Gasolina" cambio="AUTOMÁTICO DE 1 VELOCIDADE" tam_aro="" potencia="720 CV" preco="R$ 790.000,00" cinza></Carro>

        <Carro modelo="Monza SP1" marca="Bugatti" cor="Azul" ano="2020" portas="4 Portas" combustivel="Gasolina" cambio="AUTOMÁTICO 9 MARCHAS" tam_aro="" potencia="390 CV" preco="R$ R$ 22.000.000,00" ></Carro>

        <Carro modelo="Roma" marca="Ferrari" cor="Vermelho" ano="2021" portas="2 Portas" combustivel="Gasolina" cambio="PDK" tam_aro="" potencia="500 CV" preco="R$ 3.600.000,00" vermelho></Carro>

        <Carro modelo="Urus" marca="Lamborghini" cor="Amarelo" ano="2020" portas="4 Portas" combustivel="Gasolina" cambio="AUTOMÁTICO 6 MARCHAS" tam_aro="" potencia="650 CV" preco="R$ 3.140.000,00"amarelo></Carro>
      </ul> */}
      {/* <Pai/> */}
      {/* <Filho/> */}
      </>
  )
}
