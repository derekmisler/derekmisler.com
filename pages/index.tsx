import { Header } from 'components/Header'
import { Nav } from 'components/Nav'
import { Footer } from 'components/Footer'
import { Analytics } from 'components/Analytics'
import { GlobalTypeStyles } from 'styles'
import { sections } from 'constants/sections'
import { Section } from 'components/Section'

export const config = { amp: false }

export const App = () => {
  return (
    <>
      <Analytics />
      <GlobalTypeStyles />
      <Nav />
      <Header />
      <main>
        {sections.map(section => (
          <Section
            key={section.location}
            heading={section.label}
            id={section.location}
            Component={section.component}
          />
        ))}
      </main>
      <Footer />
    </>
  )
}

export default App
