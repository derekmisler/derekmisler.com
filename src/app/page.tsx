'use client'
import { NextPage } from 'next'
import { Header } from '@/molecules/Header'
import { Footer } from '@/molecules/Footer'
import { GlobalStyle } from '@/styles/global'
import { sections } from '@/constants/sections'
import { Section } from '@/molecules/Section'
import { Toggle } from '@/molecules/Forms/Toggle'
import { useTheme } from '@/utils/useTheme'

export const config = { amp: false }

const App: NextPage<{}> = () => {
  const [{ theme, isDarkMode }, toggleTheme] = useTheme()

  return (
    <>
      <GlobalStyle theme={theme} />
      <Header />
      <main>
        {sections.map(section => (
          <Section
            key={section.id}
            heading={section.heading}
            id={section.id}
            Component={section.Component}
          />
        ))}
      </main>
      <Footer />
      <Toggle onLabel='Light' offLabel='Dark' onToggle={toggleTheme} defaultChecked={!isDarkMode} />
    </>
  )
}

export default App
