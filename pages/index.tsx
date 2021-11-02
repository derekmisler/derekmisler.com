import { NextPage } from 'next'
import { ThemeProvider } from 'styled-components'
import { Header } from 'molecules/Header'
import { Nav } from 'molecules/Nav/NavWrapper'
import { Footer } from 'molecules/Footer'
import { GlobalStyle } from 'styles'
import { sections } from 'constants/sections'
import { Section } from 'molecules/Section'
import { Toggle } from 'molecules/Forms/Toggle'
import { useTheme } from 'utils/useTheme'

export const config = { amp: false }

const App: NextPage<{}> = () => {
  const [{ theme, isDarkMode }, toggleTheme] = useTheme()

  return (
    <ThemeProvider theme={theme}>
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
      <Toggle onLabel='Light' offLabel='Dark' onToggle={toggleTheme} defaultChecked={!isDarkMode} />
    </ThemeProvider>
  )
}

export default App
