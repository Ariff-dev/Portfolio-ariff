import {
  Blog,
  CallAction,
  Credentials,
  Funny,
  Personal,
  Profiles,
  Projects,
  Servicies,
  Text,
} from '@/components/page'

/*
 *The home page is divided into separate components, which are located in ./components/page/'your component
 */
export default function Home() {
  return (
    <main className='md:mx-[4%] py-[80px]'>
      <div className='flex flex-col gap-6 w-full md:flex-row md:max-h-[350px]'>
        <div className='md:w-1/2'>
          <Personal />
        </div>
        <div className='flex flex-col md:w-1/2 gap-6'>
          <div>
            <Text />
          </div>
          <div className='flex flex-col md:flex-row gap-6'>
            <Credentials />
            <Projects />
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </main>
  )
}
