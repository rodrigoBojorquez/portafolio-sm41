import React from 'react'

function Footer() {
  return (
    <footer>
      <div className='h-30 flex items-center  text-white rounded-ch bg-[#3F72AF]'>


        <ul className='text-xch m-auto  text-white font-small'>
          <p className='text-center text-aline'>Integrantes</p>
          <li className='padding: z-10 margin:20%'>Rodrigo Bojorquez</li>
          <li>Delannie Teodoro</li>
          <li>Elizabeth Chuc</li>
        </ul>
      </div>

      <div >
        <div
          class="w-full p-4 text-center text-neutral-70  bg-[#3F72AF]  text-white">
          © 2023 Copyright:
          <a
            class=" text-white  text-white:text-neutral-400"
            href="https://tailwind-elements.com/"
          > SM41</a
          >
        </div>
      </div>
    </footer>
  )
};

export default Footer