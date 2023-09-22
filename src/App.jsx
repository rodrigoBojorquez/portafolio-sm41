import { createBrowserRouter, RouterProvider } from "react-router-dom"

// ROUTES
import EstadoDelTiempo from "./routes/EstadoDelTiempo"


const router = createBrowserRouter([
  {
    // FALTA PAG HOME
    path: "/",
    element: <EstadoDelTiempo/>
  },
  {
    path: "/weather",
    element: <EstadoDelTiempo/>
  }
])

function App() {
  return(
    <>
      <RouterProvider router={router}/>
    </>
  )
}



export default App
