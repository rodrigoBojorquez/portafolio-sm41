import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard';

// IMAGENES
import homeImg from "../assets/coding.jpg";
import weatherApp from "../assets/weather-app.jpg";

function Home() {
  return (
    <>
        <Navbar/>

        <div className='ml-24 p-2 bg-slate-200'>
            <Header
                titulo = "Bienvenido!"
            />
            <main> 
                <img 
                src={homeImg} 
                alt='Coding'
                className='w-1/2 h-auto m-auto rounded-lg mt-14'
                />
                <div className='flex flex-col items-center gap-5 mb-14 mt-3'>
                    <p className='text-lg italic'>En este repositorio subiremos las prácticas de la materia <span className='font-medium text-[#3F72AF]'>Aplicaciones Web orientadas a Servicios</span></p>      
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 px-5 my-10'>
                    <ProjectCard
                        link = "/weather"
                        title= "Weather App"
                        image = {weatherApp}
                    />
                </div>

                
            </main>
            <Footer/>
        </div>
    </>
  )
}

export default Home