'use client'
import { NextPage } from 'next'
import { Header } from '@/molecules/Header'
import { Footer } from '@/molecules/Footer'
import { GlobalStyle } from '@/styles/global'
import { sections } from '@/constants/sections'
import { Section } from '@/molecules/Section'
import { useTheme } from '@/utils/useTheme'

export const config = { amp: false }

const App: NextPage<{}> = () => {
  const { theme } = useTheme()

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
    </>
  )
}

export default App
