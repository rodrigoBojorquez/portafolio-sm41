import { useState, useEffect } from 'react'
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Error from "../components/Error"
import Cargando from '../components/Cargando';

function EstadoDelTiempo() {

  const url = "https://api.datos.gob.mx/v1/condiciones-atmosfericas";
  const estadosMX = [
    { id: 1, name: 'Aguascalientes' },
    { id: 2, name: 'Baja California' },
    { id: 3, name: 'Baja California Sur' },
    { id: 4, name: 'Campeche' },
    { id: 5, name: 'Chiapas' },
    { id: 6, name: 'Chihuahua' },
    { id: 7, name: 'Ciudad de Mexico' },
    { id: 8, name: 'Coahuila' },
    { id: 9, name: 'Colima' },
    { id: 10, name: 'Durango' },
    { id: 11, name: 'Guanajuato' },
    { id: 12, name: 'Guerrero' },
    { id: 13, name: 'Hidalgo' },
    { id: 14, name: 'Jalisco' },
    { id: 15, name: 'Mexico' },
    { id: 16, name: 'Michoacan' },
    { id: 17, name: 'Morelos' },
    { id: 18, name: 'Nayarit' },
    { id: 19, name: 'Nuevo Leon' },
    { id: 20, name: 'Oaxaca' },
    { id: 21, name: 'Puebla' },
    { id: 22, name: 'Queretaro' },
    { id: 23, name: 'Quintana Roo' },
    { id: 24, name: 'San Luis Potosi' },
    { id: 25, name: 'Sinaloa' },
    { id: 26, name: 'Sonora' },
    { id: 27, name: 'Tabasco' },
    { id: 28, name: 'Tamaulipas' },
    { id: 29, name: 'Tlaxcala' },
    { id: 30, name: 'Veracruz' },
    { id: 31, name: 'Yucatan' },
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

      // uso Set para que no se repitan
      const ciudadesUnicas = new Set();

      // Filtrar los datos duplicados, true y false son porque filter filtra en base a eso
      const datosUnicos = condicionAtm.results.filter((ciudad) => {
        if (!ciudadesUnicas.has(ciudad.name)) {
          ciudadesUnicas.add(ciudad.name);
          return true;
        }
        return false;
      });

      setDatosFiltrados(datosUnicos);
      setCargando(false);
    } catch (error) {
      // Manejar errores aquí, por ejemplo:
      console.error("Error al consultar datos");
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

    if (estadoActual.length > 0) {
      setDatosFiltrados([])
      consultarDatos();
    }


  }, [estadoActual])

  return (
    <>
      <Navbar />

      {/* se recorre a la derecha por la navbar  */}
      <div className="ml-24 p-2 bg-slate-200">
        <Header
          titulo={"Estado del tiempo"}
        />

        <main>

          {/* form row  */}
          <div className='flex justify-center my-10'>
            <form
              onSubmit={handleSubmit}
              className='bg-slate-100 shadow-lg w-1/3 p-5 rounded-md flex flex-col items-center'
            >
              <h3 className='text-center text-2xl text-[#112D4E]'>Consulta el estado del tiempo</h3>
              <div className='flex flex-col my-4 w-10/12'>
                <label htmlFor="selectEstado" className='text-xl text-[#112D4E]'>Estado</label>
                <select
                  onChange={e => setEstadoActual(e.target.value)}
                  id='selectEstado'
                  className='rounded-md text-center py-2'
                >
                  <option value="">-- Selecciona un estado --</option>
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

                <label htmlFor="selectCiudad" className='text-xl text-[#112D4E]'>Ciudad</label>
                <select
                  onChange={e => {setCiudadActual(e.target.value)}}
                  id='selectCiudad'
                  className='rounded-md text-center py-2'
                  value={!cargando ? ciudadActual : ""}
                >
                  {!cargando ? (
                    <option value="">-- Selecciona una Ciudad --</option>
                  ) : (
                    <option value="" disabled>-- ... --</option>
                  )}
                  {datosFiltrados.map((opcion, key) => (
                    <option key={key} value={opcion.name}>
                      {opcion.name}
                    </option>
                  ))}
                </select>


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
            {cargando && 
              <div className='my-3'>
                <Cargando/>
              </div>
            }
            {error ?
              <Error>Todos los campos son necesarios</Error>
              :
              <></>
            }

            {mostrarDatos &&

              // from-sky-500 from-10% to-blue-300 to-90%

              <div className='bg-gradient-to-b from-sky-500 from-10% to-indigo-400 to-90% shadow-md w-2/5 m-auto p-6 rounded-md'>
                <h3 className='text-4xl font-medium text-center mb-2 text-slate-200'>{ciudad.name}</h3>

                <p className='text-6xl font-light text-center text-slate-200'>{ciudad.tempc}°</p>

                <p className='text-center font-medium italic text-xl text-slate-200 mt-2 mb-5'>{ciudad.skydescriptionlong}</p>

                <div className='flex flex-col gap-3 items-center font-medium italic text-lg  text-slate-200'>
                  <p>Precipitación:  {ciudad.probabilityofprecip}mm</p>
                  <p>Humedad:  {ciudad.relativehumidity}%</p>
                  <p>Viento: {ciudad.windspeedkm}km/h</p>
                </div>
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