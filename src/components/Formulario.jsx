import React, { useState } from 'react'

function Formulario() {

    const [campos, setCampos] = useState({
        usuario: "",
        contrasena: ""
    });

    const handleSubmit = e => {
        e.preventDefault()

        console.log("se envia el form")
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Nombre de usuario</label>
                <input 
                type="text"
                placeholder='Nombre de usuario' 
                id="username" 

                // INTERESANTE 
                onChange={e => setCampos({...campos, usuario: e.target.value})}
                />
            </div>

            <div>
                <label htmlFor="password">Contraseña</label>
                <input 
                type="text" 
                placeholder='Contraseña' 
                id="password" 
                onChange={e => setCampos({...campos, contrasena: e.target.value})}
                />
            </div>

            <input type="submit" placeholder='Ingresar' />
        </form>
    )
}

export default Formulario