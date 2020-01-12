import { NextPage } from 'next'
import { ThemeProvider } from 'styled-components'
import { Header } from 'components/Header'
import { Nav } from 'components/Nav'
import { Footer } from 'components/Footer'
import { Analytics } from 'components/Analytics'
import { GlobalStyle } from 'styles'
import { sections } from 'constants/sections'
import { Section } from 'components/Section'
import { Toggle } from 'components/Forms'
import { useTheme } from 'utils/useTheme'

export const config = { amp: false }

export const App: NextPage<{}> = () => {
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
      { toggleTheme && (
        <Toggle
          onLabel='Light'
          offLabel='Dark'
          onToggle={toggleTheme}
          defaultChecked={!isDarkMode}
        />
      )}
    </ThemeProvider>
  )
}

export default App
