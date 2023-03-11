//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

import React from 'react'

const Card = ({ nombre, apellido, cedula }) => {
  return (
    <div>
        <h1>{nombre}</h1>
        <h2>{apellido}</h2>
        <h3>{cedula}</h3>
    </div>
  )
}

export default Card