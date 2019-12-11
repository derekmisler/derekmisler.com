import { createContext } from 'react'
import { Header } from 'components/Header'
import { Nav } from 'components/Nav'
import { Footer } from 'components/Footer'
import { Analytics } from 'components/Analytics'
import { GlobalStyle } from 'styles'
import { themes } from 'styles'
import { sections } from 'constants/sections'
import { Section } from 'components/Section'

export const config = { amp: false }
const ThemeContext = createContext(themes.dark)

export const App = () => {
  return (
    <ThemeContext.Provider value={themes.dark}>
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
        <Footer />
      </>
    </ThemeContext.Provider>
  )
}

export default App
