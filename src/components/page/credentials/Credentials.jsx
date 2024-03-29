import Image from 'next/image'
import React from 'react'

export const Credentials = () => {
  return (
    <div className='bg-gradient-to-r from-color-bg-secundary to-black/10 p-8 rounded-2xl flex flex-col  '>
      <div className='flex items-center justify-center'>
        <Image
          src='https://res.cloudinary.com/dvppsdp4j/image/upload/v1709344773/firma_ypqduo.png'
          alt='firma'
          width={120}
          height={120}
          style={{ width: '50%', height: 'auto' }}
        />
      </div>
      <div>
        <p className='font-medium uppercase text-sm text-color-text-sub'>
          Más sobre mí
        </p>
        <h2 className='font-semibold text-2xl'>Credenciales</h2>
      </div>
    </div>
  )
}
