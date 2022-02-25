import React, { useState } from 'react'
import carro from '../estilos/carro.css'

function Carro(props){
    let btnClasses = 'btn-comprar';
    btnClasses += props.azul ? '-azul' : '';
    btnClasses += props.cinza ? '-cinza' : '';
    btnClasses += props.vermelho ? '-vermelho' : '';
    btnClasses += props.amarelo ? '-amarelo' : '';
    
    

    return (
        <>
            <li className="item-lista">
                <div className="titulo">Marca: {props.marca}</div>
                <div className="titulo">Modelo: {props.modelo}</div>
                <div className="titulo">Cor: {props.cor}</div>
                <div className="">Ano: {props.ano}</div>
                <div className="detalhe">{props.portas}</div>
                <div className="detalhe">Tipo de combustível: {props.combustivel}</div>
                <div className="detalhe">Câmbio: {props.cambio}</div>
                <div className="detalhe">Aro: {props.tem_aro}</div>
                <div className="detalhe">Potência: {props.potencia}</div>
                <div className="preco">Preço: {props.preco}</div>
                <button className={btnClasses}>comprar</button>
            </li>
        </>
    )
}

export default Carro

// renderizar o componente dentro APP, criar 4 carros.