import React, { useEffect, useState } from 'react'

export const Filtros = ({setFiltro,filtro}) => {

    const handleFilter=(value)=>{

        setFiltro(value)
    }
  return (
    <div className='filtros sombra contenedor' >
        <form action="">
            <div className="campo">
                <label htmlFor="">Filtrar Gastos</label>
                <select value={filtro} onChange={e=>handleFilter(e.target.value)}
                 name="" id="">
                    <option value="">-- Todas Las Categorías --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos">Gastos Varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="suscripciones">Suscripciones</option>
                    <option value="salud">Salud</option>   
                </select>
            </div>

        </form>
    </div>
  )
}
