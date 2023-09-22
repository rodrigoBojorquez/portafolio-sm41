import React from 'react'
import { Link } from 'react-router-dom'

// aqui los iconos y las imagenes
import homeIcon from "../assets/icons/home.svg"
import weatherIcon from "../assets/icons/weather.svg"

function Navbar() {
    return (
        <nav className='fixed w-24 h-full top-0 left-0 bg-gray-900 py-5'>

            {/* home  */}
            <Link to="/"><img src={homeIcon} alt='Home' className='m-auto transform duration-500 hover:scale-105'/></Link>
            <hr className='border-2 border-[#DBE2EF] m-auto w-10/12 my-5 '/>

            <ul className='flex flex-col items-center gap-3'>
                {/* ir añadiendo los links de otras rutas aqui  */}
                <li><Link to="/weather"><img src={weatherIcon} alt='Estado del tiempo' className='transform duration-500 hover:scale-105'/></Link></li>
            </ul>
        </nav>
    )
}

export default Navbar