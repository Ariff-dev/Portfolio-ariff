import {
  Blog,
  Credentials,
  Personal,
  Profiles,
  Projects,
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
    </main>
  )
}
