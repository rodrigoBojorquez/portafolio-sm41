import React from 'react'

function Header({titulo}) {
  return (
    <header className='h-20 flex items-center justify-center rounded-md bg-gray-800'>
      <h2 className='text-3xl font-medium text-[#F9F7F7]'>{titulo}</h2>
    </header>
  )
}

export default Header