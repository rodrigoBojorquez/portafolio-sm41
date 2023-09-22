import { useState, useEffect } from 'react'
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

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

  const [cargando, setCargando] = useState(false);
  const [datosFiltrados, setDatosFiltrados] = useState([])
  const [ciudad, setCiudad] = useState({});
  const [mostrarDatos, setMostrarDatos] = useState(false);
  const [estadoActual, setEstadoActual] = useState("");
  const [ciudadActual, setCiudadActual] = useState("");
  const [error, setError] = useState(false);

  // consumir api
  const consultarDatos = async () => {
    try {
      setCargando(true);
      const response = await fetch(`${url}?state=${estadoActual}`);
      const condicionAtm = await response.json();
      setDatosFiltrados(condicionAtm.results);
      setCargando(false)
    } catch (error) {
      // Manejar errores aquí, por ejemplo:
      console.error("Error al consultar datos:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (estadoActual.length > 0 && ciudadActual.length > 0) {
      const ciudadSeleccionada = datosFiltrados.find(ciudad => ciudad.name === ciudadActual);
      setCiudad(ciudadSeleccionada);
      setMostrarDatos(true);
      setError(false);
    }
    else {
      setMostrarDatos(false);
      setError(true);
    }
  }

  useEffect(() => {
    consultarDatos();

  }, [estadoActual])

  return (
    <>
      <Navbar />

      {/* se recorre a la derecha por la navbar  */}
      <div className="ml-24 p-2">
        <Header
          titulo={"Estado del tiempo"}
        />

        <main>

          {/* form row  */}
          <div className='flex justify-center my-10'>
            <form
              onSubmit={handleSubmit}
              className='bg-slate-100 shadow-md w-1/3 p-5 rounded-md flex flex-col items-center'
            >
              <h3 className='text-center text-2xl text-[#112D4E]'>Consulta el estado del tiempo</h3>
              <div className='flex flex-col my-4 w-10/12'>
                <label htmlFor="selectEstado" className='text-xl text-[#112D4E]'>Estado</label>
                <select
                  onChange={e => setEstadoActual(e.target.value)}
                  id='selectEstado'
                  className='rounded-md text-center py-2'
                >
                  <option value="">-- Selecciona uno --</option>
                  {
                    estadosMX.map(opcion => (
                      <option key={opcion.id} value={opcion.name}>
                        {opcion.name}
                      </option>
                    ))
                  }
                </select>
              </div>
              <div className='flex flex-col my-4 w-10/12'>
                { !cargando ?
                  <>
                    <label htmlFor="selectCiudad" className='text-xl text-[#112D4E]'>Ciudad</label>
                    <select
                      onChange={e => {
                        setCiudadActual(e.target.value);
                      }}
                      id='selectCiudad'
                      className='rounded-md text-center py-2'
                    >
                      <option value="">-- Selecciona una Ciudad --</option>
                      {
                        datosFiltrados.map(opcion => (
                          <option key={opcion.id} value={opcion.name}>
                            {opcion.name}
                          </option>
                        ))
                      }
                    </select>
                  </>
                :
                  <>
                  </>
                }
              </div>

              <input
                type="submit"
                value="Buscar"
                className='bg-blue-400 text-white font-semibold p-2 w-1/2 m-auto mt-7 rounded-md hover:cursor-pointer'
              />
            </form>
          </div>

          {/* results row */}
          <div className='mb-10'>
            {error ?
              <Error>Todos los campos son necesarios</Error>
              :
              <></>
            }

            {mostrarDatos &&

              <div className='bg-slate-100 shadow-md w-1/2 m-auto p-3'>
                <h3 className='text-2xl font-medium text-center text-[#112D4E]'>{ciudad.name}</h3>

                <p className='text-center font-medium text-xl text-[#112D4E] mt-2 mb-5'>{ciudad.skydescriptionlong}</p>

                <ul className='flex flex-col gap-3 items-center text-[#112D4E] italic'>
                  <li>Temperatura:  {ciudad.tempc}°</li>
                  <li>Probabilidad de precipitación:  {ciudad.probabilityofprecip}%</li>
                  <li>Humedad:  {ciudad.relativehumidity}%</li>
                  <li>Viento: {ciudad.windspeedkm}km</li>
                </ul>
              </div>
            }
          </div>

        </main>
        <Footer></Footer>
      </div>


    </>
  )
}

export default EstadoDelTiempo