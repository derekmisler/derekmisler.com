import { useEffect } from 'react'
import { NextPage } from 'next'
import { ThemeProvider } from 'styled-components'
import { Header } from 'molecules/Header'
import { Nav } from 'molecules/Nav'
import { Footer } from 'molecules/Footer'
import { Analytics } from 'atoms/Analytics'
import { GlobalStyle } from 'styles'
import { sections } from 'constants/sections'
import { Section } from 'molecules/Section'
import { Toggle } from 'molecules/Forms'
import { useTheme } from 'utils/useTheme'

export const config = { amp: false }

export const App: NextPage<{}> = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .catch(err => console.error('Service worker registration failed, but that\'s fine, this is a really small website. I wouldn\'t be very good at my job if it reloaded slowly.', err))
    }
  }, [])
  const [{ theme, isDarkMode }, toggleTheme] = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <Analytics />
      <GlobalStyle theme={theme} />
      <Nav />
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
      <Toggle
        onLabel='Light'
        offLabel='Dark'
        onToggle={toggleTheme}
        defaultChecked={!isDarkMode}
      />
    </ThemeProvider>
  )
}

export default App
