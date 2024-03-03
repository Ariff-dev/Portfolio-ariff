export const Funny = () => {
  return (
    <div className='bg-gradient-to-r from-color-bg-secundary to-black/10 p-8 rounded-2xl flex flex-col gap-8'>
      <div className='bg-gradient-to-r from-color-bg-secundary to-color-bg p-8 rounded-md flex flex-col items-center gap-4'>
        <p className='font-bold text-2xl'>+03</p>
        <p className=' uppercase text-color-text-sub text-sm'>
          Años de experiencia
        </p>
      </div>
      <div className='bg-gradient-to-r from-color-bg-secundary to-color-bg p-8 rounded-md flex flex-col items-center gap-4 text-center'>
        <p className='font-bold text-2xl'>+30</p>
        <p className='uppercase text-color-text-sub text-sm'>
          Proyectos en colaboración
        </p>
      </div>
      <div className='bg-gradient-to-r from-color-bg-secundary to-color-bg p-8 rounded-md flex flex-col items-center gap-4'>
        <p className='font-bold text-2xl'>+400</p>
        <p className='uppercase  text-color-text-sub text-sm'>Tasas de café</p>
      </div>
    </div>
  )
}
