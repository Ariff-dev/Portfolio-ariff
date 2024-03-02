import { IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'
export const Profiles = () => {
  return (
    <div className='bg-gradient-to-r from-color-bg-secundary to-color-bg p-8 rounded-2xl flex flex-col gap-4'>
      <div className='bg-gradient-to-r from-color-bg-secundary to-zinc-950/30  p-4 rounded-2xl  flex items-center justify-center gap-4'>
        <div className='bg-gradient-to-r from-color-bg-secundary to-color-bg p-4 rounded-full'>
          <IoLogoInstagram size={32} />
        </div>
        <div className='bg-gradient-to-r from-color-bg-secundary to-color-bg p-4 rounded-full'>
          <IoLogoLinkedin size={32} />
        </div>
      </div>
      <div>
        <p className='font-medium uppercase text-sm text-color-text-sub'>
          No te vayas
        </p>
        <h2 className='font-semibold text-2xl'>Perfiles</h2>
      </div>
    </div>
  )
}
