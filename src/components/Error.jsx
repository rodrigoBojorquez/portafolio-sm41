import React from 'react'

function Error({children}) {
  return (
    <div className='bg-red-400 text-xl text-white font-bold py-2 m-auto rounded-md w-1/3'>
        <p className='text-center'>{children}</p>
    </div>
  )
}

export default Error