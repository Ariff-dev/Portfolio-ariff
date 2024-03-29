import Image from 'next/image'

export const Projects = () => {
  return (
    <div className='bg-gradient-to-r from-color-bg-secundary to-black/10 p-8 rounded-2xl w-full'>
      <div className='flex justify-center items-center'>
        <Image
          src={
            'https://res.cloudinary.com/dvppsdp4j/image/upload/v1709345608/trabajos_sypmkd.png'
          }
          alt='jobs'
          width={150}
          height={150}
          style={{ width: '50%', height: 'auto' }}
        />
      </div>
      <div>
        <p className='font-medium uppercase text-sm text-color-text-sub'>
          Mostrador
        </p>
        <h2 className='font-semibold text-2xl'>Proyectos</h2>
      </div>
    </div>
  )
}
