import React, { useState } from 'react';
import '../components/estilos/contador-style.css'

function Contador (props) {
    const [numero, setNumero] = useState(props.inicial);

    const incremento = () => {
        if (numero == props.limiteMax){
            alert("MÁXIMO ATINGIDO")
            return
        } else {
            setNumero (numero + props.passo)
        }
        
    }

    const decremento = () => {
        if (numero == props.inicial){
            alert("MINIMO ATINGIDO!")
            return
        } else{
            setNumero (numero - props.passo)
        }
        
    }

    return (
        <>
            <div className="container">
                <h2 className="titulo">{numero}</h2>
                <button onClick={decremento} className="botao">-</button>
                <button onClick={incremento} className="botao">+</button>
            </div>
        </>
    )
}
export default Contador