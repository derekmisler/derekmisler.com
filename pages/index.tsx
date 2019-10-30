import Header from 'components/Header'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import Analytics from 'components/Analytics'
import { GlobalTypeStyles } from 'styles'
import { sections } from 'constants/sections'
import Section from 'components/Section'
import { SmMdLgWidths } from 'types/layout'
import { Container } from 'components/Container'

export const App = () => {
  return (
    <>
      <Analytics />
      <GlobalTypeStyles />
      <Header />
      <Nav />
      <Container as='main' width={SmMdLgWidths.Large}>
        {sections.map((section, i) => (
          <Section
            key={section.location}
            heading={section.label}
            count={`0${i + 1}`}
            id={section.location}
            Component={section.component}
          />
        ))}
      </Container>
      <Footer />
    </>
  )
}

export default App
