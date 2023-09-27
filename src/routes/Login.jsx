import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Formulario from '../components/Formulario'
import Footer from '../components/Footer'

function Login() {
  return (
    <>
        <Navbar/>

        <div className='ml-24 p-2 bg-slate-200'>
            <Header
                titulo= "Login"
            />
            <Formulario/>

            <Footer/>
        </div>
    </>
  )
}

export default Login