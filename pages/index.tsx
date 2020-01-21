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
