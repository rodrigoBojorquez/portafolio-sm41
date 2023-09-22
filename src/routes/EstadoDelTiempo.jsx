import {useState, useEffect} from 'react'
import Header from "../components/Header";
import Navbar from "../components/Navbar"

function EstadoDelTiempo() {

  const url = "https://api.datos.gob.mx/v1/condiciones-atmosfericas";
  const estadosMX = [
    { id: 1, name: 'Aguascalientes' },
    { id: 2, name: 'Baja California' },
    { id: 3, name: 'Baja California Sur' },
    { id: 4, name: 'Campeche' },
    { id: 5, name: 'Chiapas' },
    { id: 6, name: 'Chihuahua' },
    { id: 7, name: 'Ciudad de México' },
    { id: 8, name: 'Coahuila' },
    { id: 9, name: 'Colima' },
    { id: 10, name: 'Durango' },
    { id: 11, name: 'Guanajuato' },
    { id: 12, name: 'Guerrero' },
    { id: 13, name: 'Hidalgo' },
    { id: 14, name: 'Jalisco' },
    { id: 15, name: 'México' },
    { id: 16, name: 'Michoacán' },
    { id: 17, name: 'Morelos' },
    { id: 18, name: 'Nayarit' },
    { id: 19, name: 'Nuevo León' },
    { id: 20, name: 'Oaxaca' },
    { id: 21, name: 'Puebla' },
    { id: 22, name: 'Querétaro' },
    { id: 23, name: 'Quintana Roo' },
    { id: 24, name: 'San Luis Potosí' },
    { id: 25, name: 'Sinaloa' },
    { id: 26, name: 'Sonora' },
    { id: 27, name: 'Tabasco' },
    { id: 28, name: 'Tamaulipas' },
    { id: 29, name: 'Tlaxcala' },
    { id: 30, name: 'Veracruz' },
    { id: 31, name: 'Yucatán' },
    { id: 32, name: 'Zacatecas' }
  ];

  const [datos, setDatos] = useState([]);
  const [datosFiltrados, setDatosFiltrados] =useState([])
  const [mostrarDatos, setMostrarDatos] = useState(false);
  const [estadoActual, setEstadoActual] = useState("");
  
  // consumir api
  const consultarDatos = () => {
    return fetch(url)
      .then(res => res.json())
      .then(condicionAtm => setDatos(condicionAtm.results))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const ciudades = datos.filter((ciudad) => estadoActual === ciudad.state)

    if(estadoActual.length > 0) {
      setDatosFiltrados(ciudades);
      console.log(datosFiltrados);
      setMostrarDatos(true);
    }
  }

  // solo se ejecuta una vez
  useEffect(() => {
    consultarDatos()
  }, [])

  return (
    <>
      <Navbar />

      {/* se recorre a la derecha por la navbar  */}
      <div className="ml-24 p-2">
        <Header 
          titulo = {"Estado del tiempo"}
        />

        <main className='grid'>

          {/* form row  */}
          <div className='flex justify-center'>
            <form 
              onSubmit={handleSubmit}
              className='bg-slate-100 shadow-md w-1/3 self-center p-5 rounded-md'
            >
              <h3 className='text-center text-2xl text-[#112D4E]'>Consulta el estado del tiempo</h3>
              <div className='flex flex-col my-4'>
                <label htmlFor="selectEstado" className='text-xl text-[#112D4E]'>Estado</label>
                <select 
                  onChange={e => setEstadoActual(e.target.value)} 
                  className='rounded-md text-center py-2'
                >
                <option id='selectEstado' value="">-- Selecciona uno --</option>
                {
                  estadosMX.map(opcion => (
                    <option key={opcion.id} value={opcion.name}>
                      {opcion.name}
                    </option>
                  ))
                }
                </select>

                <input 
                  type="submit" 
                  value="Buscar"
                  className='bg-blue-400 text-white font-semibold p-2 w-1/2 m-auto mt-7 rounded-md hover:cursor-pointer'
                />
              </div>
            </form>
          </div>
          
          {/* results row */}
          {mostrarDatos &&
          <div>
          </div>
          }


          {/* <select onChange={e => setEstadoActual(e.target.value)}>
            <option value="">-- Selecciona un estado --</option>
            {
              estadosMX.map(opcion => (
                <option key={opcion.id} value={opcion.name}>
                  {opcion.name}
                </option>
              ))
            }
          </select>

          {estadoActual}

          <h1>Estado del tiempo</h1>
          */}
          {
            datos.map((ciudad, index) => (
              <div>
                <p>{ciudad.name} - <i>{ciudad.skydescriptionlong}</i></p>
              </div>
            ))
          } 
            
        </main>
      </div>
    </>
  )
}

export default EstadoDelTiempo