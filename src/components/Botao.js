import React from 'react';
import Botao from '../Estilos/Botao.css'

export default props => {
    function cadastrar (){
        console.log("cadastrado")
    }
    return (
        <button className="botao" onClick={cadastrar}>
            Cadastrar
        </button>
    )
}