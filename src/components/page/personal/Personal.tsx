import Image from 'next/image'
import { IoReturnDownForward } from 'react-icons/io5'

export const Personal = () => {
  return (
    <div className='bg-gradient-to-r from-color-bg-secundary to-black/10 p-8 rounded-2xl md:flex gap-2 md:max-h-[300px]'>
      <div className='flex items-center justify-center md:w-3/6'>
        <Image
          src={
            'https://res.cloudinary.com/dvppsdp4j/image/upload/v1704753631/Dise%C3%B1o_sin_t%C3%ADtulo_2_lljg60.png'
          }
          alt='Foto Principal'
          width={190}
          height={190}
          style={{ width: '100%', height: 'auto' }}
          className='rounded-lg m-4'
        />
      </div>
      <div className='flex flex-col md:items-center md:justify-center  md:min-h-[300px] md:w-3/6'>
        <div className='flex flex-col gap-2'>
          <h2 className='uppercase font-medium text-sm text-color-text-sub'>
            Ingeniero de Software
          </h2>
          <h3 className='font-medium text-3xl md:text-4xl text-color-text-inital'>
            Ariff Martínez
          </h3>
          <p className='text-sm text-color-text-sub'>
            Soy un estudiante de ingeniería de Software en la CDMX.
          </p>
        </div>
        <div className='md:w-full hidden md:block'>
          <IoReturnDownForward size={32} className='text-zinc-800' />
        </div>
      </div>
      <div className='flex justify-end -m-4 md:hidden'>
        <IoReturnDownForward size={32} className='text-zinc-800' />
      </div>
    </div>
  )
}
