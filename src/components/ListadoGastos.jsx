import React from 'react'
import { Gasto } from './Gasto'

export const ListadoGastos = ({gastos,setGastoEditar,eliminarGasto,gastosFiltrados,filtro}) => {
 
    
  return (
    <div className='listado-gastos contenedor'>
        
        
        {
          filtro? (
            <>
            <h2>{Object.keys(gastosFiltrados).length ? 'Gastos':'No hay gastos'}</h2>
           { gastosFiltrados.map(gasto =>(

            <Gasto
            key={gasto.id}
            gasto={gasto}
            setGastoEditar={setGastoEditar}
            eliminarGasto={eliminarGasto}
            />

          
          )
          )}
          
          </>
          ):(
            <>
            <h2>{Object.keys(gastos).length ? 'Gastos':'No hay gastos registrados'}</h2>
           { gastos.map(gasto =>(

            <Gasto
            key={gasto.id}
            gasto={gasto}
            setGastoEditar={setGastoEditar}
            eliminarGasto={eliminarGasto}
            />

        ))}
        </>
        )
        }
        
        
        
    </div>
  )
}
export default ListadoGastos