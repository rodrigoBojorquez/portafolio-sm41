import { createBrowserRouter, RouterProvider } from "react-router-dom"

// ROUTES
import EstadoDelTiempo from "./routes/EstadoDelTiempo";
import Home from "./routes/Home";


const router = createBrowserRouter([
  {
    // FALTA PAG HOME
    path: "/",
    element: <Home/>
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
