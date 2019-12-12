
import { ThemeProvider } from 'styled-components'
import { Header } from 'components/Header'
import { Nav } from 'components/Nav'
import { Footer } from 'components/Footer'
import { Analytics } from 'components/Analytics'
import { GlobalStyle } from 'styles'
import { sections } from 'constants/sections'
import { Section } from 'components/Section'
import { useTheme } from 'utils/useTheme'

export const config = { amp: false }

export const App = () => {
  const [theme, toggleTheme] = useTheme()
  return (
    <ThemeProvider theme={theme}>
      <>
        <Analytics />
        <GlobalStyle />
        <Nav />
        <Header />
        <main>
          {sections.map(section => (
            <Section
              key={section.id}
              heading={section.heading}
              id={section.id}
              width={section.width}
              Component={section.Component}
            />
          ))}
        </main>
        <Footer handleClick={toggleTheme} />
      </>
    </ThemeProvider>
  )
}

export default App
