import {
  Blog,
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
    <main>
      <Personal />
      <Text />
      <Credentials />
      <Projects />
      <Blog />
      <Profiles />
      <Servicies />
      <Funny />
    </main>
  )
}
