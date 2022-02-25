import React from 'react'
import Membro from './Membro'

export default props => {

  return (
    <>
      <h2>[Inicio da familia]</h2>
        {props.children}
      <h2>[Fim da familia]</h2>
    </>
  )
}
