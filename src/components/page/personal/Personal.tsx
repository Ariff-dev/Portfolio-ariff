import Image from 'next/image'
import { IoReturnDownForward } from 'react-icons/io5'

export const Personal = () => {
  return (
    <div className='bg-gradient-to-r from-color-bg-secundary to-color-bg p-8 rounded-2xl'>
      <div className='flex items-center justify-center w-full'>
        <Image
          src={
            'https://res.cloudinary.com/dvppsdp4j/image/upload/v1704753631/Dise%C3%B1o_sin_t%C3%ADtulo_2_lljg60.png'
          }
          alt='Foto Principal'
          width={500}
          height={500}
          style={{ width: '100%', height: '100%' }}
          className='rounded-lg m-4'
        />
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='uppercase font-medium text-sm text-color-text-sub'>
          Ingeniero de Software
        </h2>
        <h3 className='font-medium text-3xl text-blue-500'>Ariff Martínez</h3>
        <p className='text-sm text-color-text-sub'>
          Soy un estudiante de ingeniería en la CDMX.
        </p>
      </div>
      <div className='flex justify-end -m-4'>
        <IoReturnDownForward size={32} className='text-zinc-800' />
      </div>
    </div>
  )
}
