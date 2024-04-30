import React from 'react'
import ControlPresupuesto from './ControlPresupuesto'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = ({presupuesto,setPresupuesto,isValidPresupuesto, setisValidPresupuesto,gastos,setGastos}) => {
  return (
    <header>

        <h1>Planificador de gastos</h1>

        {isValidPresupuesto ?  (<ControlPresupuesto gastos={gastos} presupuesto={presupuesto}
        setGastos={setGastos}
        setPresupuesto={setPresupuesto}
        setisValidPresupuesto={setisValidPresupuesto}></ControlPresupuesto>) : (
        <NuevoPresupuesto
        setPresupuesto={setPresupuesto}
        presupuesto={presupuesto}
        setisValidPresupuesto={setisValidPresupuesto}/>)}
        
    </header>
  )
}

export default Header
