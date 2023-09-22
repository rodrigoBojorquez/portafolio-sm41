import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

// IMAGENES
import homeImg from "../assets/coding.jpg";

function Home() {
  return (
    <>
        <Navbar/>

        <div className='ml-24 p-2'>
            <Header
                titulo = "Bienvenido!"
            />

            <main>
                
                <img 
                src={homeImg} 
                alt='Coding'
                className='w-1/2 h-auto m-auto rounded-lg mt-14'
                />

                {/* team members row */}
                <div className='flex flex-col items-center gap-5 my-3'>
                    <p className='font-lg italic'>En este repositorio subiremos las prácticas de la materia <span className='font-medium text-[#3F72AF]'>Aplicaciones Web orientadas a Servicios</span></p>
                    <p className='text-xl font-medium text-[#112D4E]'>Integrantes del equipo</p>
                    <ul>
                        <li>Rodrigo Noe Bojorquez Chi</li>
                        {/* <li>Delannie Joseline Teodoro Bocanegra</li>
                        <li>Elizabeth Chuc Tun</li> */}
                    </ul>
                </div>
            </main>
        </div>
    </>
  )
}

export default Home