import React, { useState } from 'react';

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
            <h2>{numero}</h2>
            <button onClick={decremento}>-</button>
            <button onClick={incremento}>+</button>

        </>
    )
}
export default Contador