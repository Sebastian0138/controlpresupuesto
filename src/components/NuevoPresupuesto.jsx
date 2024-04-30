import React from 'react'
import Mensaje from './Mensaje';
import { useState } from 'react';
const NuevoPresupuesto = ({presupuesto,setPresupuesto,setisValidPresupuesto}) => {

  const [mensaje, setMensaje] = useState("")
  const handlePresupuesto= (e) =>{
    e.preventDefault();
    
    if(!(presupuesto) || (presupuesto<0)){

      setMensaje('No es un presupuesto válido')
      return
    }
    setMensaje('')
    setisValidPresupuesto(true)

  }


  return (
    <div className='contenerdor-presupuesto contenerdor sombra'>
     <form onSubmit={handlePresupuesto} className='formulario' action="">
        <div className="campo">
            <label htmlFor="">Definir presupuesto</label>
            <input className='nuevo-presupuesto' type="number" placeholder='Añade tu presupuesto' value={presupuesto} onChange={e=>setPresupuesto(Number(e.target.value))}/>
        </div>
        <input type="submit" value='Añadir' />
        {mensaje && <Mensaje tipo={"error"}>{mensaje}</Mensaje>}
     </form>
    </div>
  )
}

export default NuevoPresupuesto
