import { useState,useEffect } from 'react'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos'
import IconoNuevoGasto from '../img/nuevo-gasto.svg'
import { Modal } from './components/Modal';
import {generarId} from './helpers/index'
import { Filtros } from './components/Filtros';
function App() {
  const [presupuesto, setPresupuesto] = useState(
   Number( localStorage.getItem('presupuesto')) ?? 0
  );
  const [isValidPresupuesto, setisValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState(

    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) :[]
  );
  const [gastoEditar, setGastoEditar] = useState({});

  const [filtro, setFiltro] = useState('');

  const [gastosFiltrados, setGastosFiltrados] = useState([]);
 
  useEffect(() => {
    if(Object.keys(gastoEditar).length>0){
      setModal(true)
      setTimeout(() => {
      setAnimarModal(true)
   }, 500);
    }
  }, [gastoEditar]);

  useEffect(() => {
    localStorage.setItem('presupuesto',presupuesto?? 0)
    
  }, [presupuesto]);


  useEffect(() => {
    localStorage.setItem('gastos',JSON.stringify(gastos) )
  }, [gastos]);

  useEffect(() => {
   const presupuestoLS= Number( localStorage.getItem('presupuesto')) ?? 0;
   if(presupuestoLS>0){
   setisValidPresupuesto(true)
   }
  }, []);

  const HandleNuevoGasto=()=>{

   setModal(true)
   setGastoEditar({})
   setTimeout(() => {
    setAnimarModal(true)
   }, 500);

   
  }
  const guardarGasto= gasto =>{
   

    if(gasto.id){
      
      //actualizar
      const gastosActualizados=gastos.map(gastoState=> gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualizados)
      setGastoEditar({})
    }else{

      gasto.id=generarId();
      gasto.fecha=Date.now()
      
      setGastos([...gastos,gasto])
    }

    setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500);

   }

   const eliminarGasto=(id)=>{
    
    const gastosActualizados=gastos.filter(gasto=>gasto.id!==id)
    setGastos(gastosActualizados);
   }

   useEffect(() => {
    if(filtro){
      //filtrar gasto por categoria
      const gastoFiltrados=gastos.filter(gasto=> gasto.categoria===filtro)
      setGastosFiltrados(gastoFiltrados)
    }
   }, [filtro]);

  return (
   <>
   <div className={modal ? 'fijar' :''}>

   
   <Header 
   gastos={gastos}
   setGastos={setGastos}
   setPresupuesto={setPresupuesto}
   presupuesto={presupuesto}
   isValidPresupuesto={isValidPresupuesto}
   setisValidPresupuesto={setisValidPresupuesto}
   />

   {isValidPresupuesto && 
   (<> 
   <main>
    <Filtros setFiltro={setFiltro}
    filtro={filtro}/>
    <ListadoGastos gastos={gastos}
    setGastoEditar={setGastoEditar}
    eliminarGasto={eliminarGasto}
    gastosFiltrados={gastosFiltrados}
    filtro={filtro}/>
   </main>
   <div className='nuevo-gasto'>
    <img src={IconoNuevoGasto} alt="IconoNuevoGasto" onClick={HandleNuevoGasto}/>
   </div>
   </>
   )
  
  }
  {modal && <Modal setModal={setModal}
  animarModal={animarModal}
  setAnimarModal={setAnimarModal}
  guardarGasto={guardarGasto}
  gastoEditar={gastoEditar}
  setGastoEditar={setGastoEditar}/>}
   </div>
   </>
  )
}

export default App
