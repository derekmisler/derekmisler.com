'use client'
import { Header } from '@/molecules/Header'
import { GlobalStyle } from '@/styles/global'
import { sections } from '@/constants/sections'
import { Section } from '@/molecules/Section'
import { useTheme } from '@/utils/useTheme'

export default function App() {
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
    </>
  )
}

