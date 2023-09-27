import { createBrowserRouter, RouterProvider } from "react-router-dom"

// ROUTES
import EstadoDelTiempo from "./routes/EstadoDelTiempo";
import Home from "./routes/Home";
import Login from "./routes/Login";


const router = createBrowserRouter([
  {
    // FALTA PAG HOME
    path: "/",
    element: <Home/>
  },
  {
    path: "/weather",
    element: <EstadoDelTiempo/>
  },
  {
    path: "/login",
    element: <Login/>
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
