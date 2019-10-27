import { resume } from 'constants/resume'
import Header from 'components/Header'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import Analytics from 'components/Analytics'
import About from 'sections/About'
import Experience from 'sections/Experience'
import Qualifications from 'sections/Qualifications'
import Projects from 'sections/Projects'
import Contact from 'sections/Contact'
import { GlobalTypeStyles } from 'styles'

export const App = () => {
  const { profile } = resume
  return (
    <>
      <Analytics />
      <GlobalTypeStyles />
      <Header heading={profile.fullName} subheading={profile.description} />
      <Nav />
      <main>
        <About />
        <Experience />
        <Qualifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
