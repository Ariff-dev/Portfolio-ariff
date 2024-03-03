// Documentation in text.css
import './css/text.css'

export const Text = () => {
  return (
    <div className='bg-gradient-to-tr from-color-bg-secundary to-color-bg p-4 rounded-2xl overflow-hidden'>
      <p className='text-xs uppercase container-dev moving-text font-medium '>
        <span>
          *Últimos <span className='text-color-text-sub'>trabajos</span> y
          características*
        </span>
        <span>
          *Últimos <span className='text-color-text-sub'>trabajos</span> y
          características*
        </span>{' '}
        {/* Texto duplicado para el bucle */}
        <span>
          Rename folder and file *Últimos{' '}
          <span className='text-color-text-sub'>trabajos</span> y
          características*
        </span>{' '}
        {/* Texto duplicado para el bucle */}
      </p>
    </div>
  )
}
