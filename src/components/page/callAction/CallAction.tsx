import { IoReturnDownForward } from 'react-icons/io5'

export const CallAction = () => {
  return (
    <div className='bg-gradient-to-r from-color-bg-secundary to-black/10 p-8 rounded-2xl flex flex-col gap-8'>
      <div>
        <p className='text-3xl font-medium'>
          Comencemos a trabajar{' '}
          <span className='text-color-text-inital'>juntos</span>
        </p>
      </div>
      <div className='flex justify-end -m-4'>
        <IoReturnDownForward size={32} className='text-zinc-800' />
      </div>
    </div>
  )
}
