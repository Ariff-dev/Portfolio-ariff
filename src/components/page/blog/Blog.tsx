import Image from 'next/image'

export const Blog = () => {
  return (
    <div className='bg-gradient-to-r from-color-bg-secundary to-color-bg p-8 rounded-2xl flex flex-col gap-4'>
      <div className='flex justify-center items-center'>
        <Image
          src={
            'https://res.cloudinary.com/dvppsdp4j/image/upload/v1709395432/blog_fqzufs.png'
          }
          alt='blog logo'
          width={150}
          height={150}
        />
      </div>
      <div>
        <p className='font-medium uppercase text-sm text-color-text-sub'>
          Blog
        </p>
        <h2 className='font-semibold text-2xl'>One by one</h2>
      </div>
    </div>
  )
}
