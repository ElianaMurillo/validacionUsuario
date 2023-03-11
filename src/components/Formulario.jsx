import React, { useState } from 'react'
import Card from './Card'

const Formulario = () => {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [cedula, setCedula] = useState(0)
    const [mostrarAlerta, setMostrarAlerta] = useState(false)
    const [mensajeAlerta, setMensajeAlerta] = useState("")
    const [mostrarCard, setMostrarCard] = useState(false)


    const handleChangeNombre = (event) => {
        setNombre(event.target.value)
    }

    const handleChangeApellido = (event) => {
        setApellido(event.target.value)
    }

    const handleChangeCedula = (event) => {
        setCedula(event.target.value)
    }

    const handleSubmitUsuario = (event) => {
        event.preventDefault()
        if (nombre.length <= 3 || nombre[0] === " ") {
            setMostrarAlerta(true)
            setMensajeAlerta("Por favor chequea que la información sea correcta.")
            return
        }
        if (apellido.length <= 6) {
            setMostrarAlerta(true)
            setMensajeAlerta("Por favor chequea que la información sea correcta.")
            return
        }
        setMostrarCard(true)
    }

    const borrarAlerta = () => {
        setMostrarAlerta(false)
        setMensajeAlerta("")
        setNombre("")
        setApellido("")
        setCedula(0)
    }


    return (
        <form onSubmit={handleSubmitUsuario}>

            <p className='titulo'>Validación de Usuario</p>
            <div className="contenedor">

                <div className="contenedorInput">
                    <label for="nombre">Ingrese su nombre:&nbsp;</label>
                    <input className="input" name="nombre" type="text" onChange={handleChangeNombre} value={nombre} />
                </div>
                
                <div className="contenedorInput">
                    <label for="apellido">Ingrese su apellido:&nbsp;</label>
                    <input className="input" name="apellido" type="text" onChange={handleChangeApellido} value={apellido} />
                </div>
                    
                <div className="contenedorInput">
                    <label for="cedula">Ingrese su cedula:&nbsp;</label>
                    <input className="input" name="cedula" type="number" min={0} max={500} onChange={handleChangeCedula} value={cedula} />
                </div>
                
                <input type="submit" value="Enviar" />

            </div>
            
            {mostrarAlerta && (
                <dialog className="mensajeAlerta" open>
                {mensajeAlerta}
                <button className="boton" onClick={() => borrarAlerta()}>&#10005;</button>
            </dialog>
            )}

            
            {mostrarCard && <Card nombre={nombre} apellido={apellido} cedula={cedula} />}
        </form>
    )
}

export default Formulario