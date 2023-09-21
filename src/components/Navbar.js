import React from 'react'

// aqui los iconos y las imagenes
import homeIcon from "../assets/icons/home.svg"
import weatherIcon from "../assets/icons/weather.svg"

function Navbar() {
    return (
        <nav className='fixed w-24 h-full top-0 left-0 bg-[#3F72AF] py-5'>

            {/* home  */}
            <a href='#'><img src={homeIcon} className='m-auto'/></a>
            <hr className='border-2 border-[#DBE2EF] m-auto w-10/12 my-5 '/>

            <ul className='flex flex-col items-center gap-3'>
                {/* ir añadiendo los links de otras rutas aqui  */}
                <li><a href='#'><img src={weatherIcon}/></a></li>
            </ul>
        </nav>
    )
}

export default Navbar