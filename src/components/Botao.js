import React from 'react';
import '../components/estilos/botao.css'

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