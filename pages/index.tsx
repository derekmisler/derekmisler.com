import Header from 'components/Header'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import Analytics from 'components/Analytics'
import { GlobalTypeStyles } from 'styles'
import { sections } from 'constants/sections'
import Section from 'components/Section'

export const App = () => {
  return (
    <>
      <Analytics />
      <GlobalTypeStyles />
      <Header />
      <Nav />
      <main>
        {sections.map((section, i) => (
          <Section
            key={section.location}
            heading={section.label}
            count={`0${i + 1}`}
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
