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
  const [estadoActual, setEstadoActual] = useState("Quintana Roo");
  
  // consumir api
  const consultarDatos = () => {
    return fetch(url)
      .then(res => res.json())
      .then(condicionAtm => setDatos(condicionAtm.results))
  }

  // solo se ejecuta una vez
  useEffect(() => {
    consultarDatos()
  }, [])

  return (
    <>
      <Navbar />

      {/* se recorre a la derecha por la navbar  */}
      <div className="ml-24 p-3">
        <Header />

        <main>
          <select onChange={e => setEstadoActual(e.target.value)}>
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