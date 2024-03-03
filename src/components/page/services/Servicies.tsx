import {
  IoBrushOutline,
  IoLaptopOutline,
  IoColorFilterOutline,
  IoCodeOutline,
  IoPhonePortraitOutline,
} from 'react-icons/io5'

export const Servicies = () => {
  return (
    <div className='bg-gradient-to-r from-color-bg-secundary to-black/10 p-8 rounded-2xl flex flex-col gap-8'>
      <div className='flex justify-center gap-4'>
        <IoBrushOutline size={28} />
        <IoCodeOutline size={28} />
        <IoLaptopOutline size={28} />
        <IoColorFilterOutline size={28} />
        <IoPhonePortraitOutline size={28} />
      </div>
      <div>
        <p className='font-medium uppercase text-sm text-color-text-sub'>
          Especialización
        </p>
        <h2 className='font-semibold text-2xl'>Servicios</h2>
      </div>
    </div>
  )
}
