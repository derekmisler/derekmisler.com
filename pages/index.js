import '../static/styles/style.scss'
import resume from './utils/constants/resume'
import Nav from './components/Nav'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Qualifications from './components/Qualifications'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Analytics from './components/Analytics'

export const App = () => (
  <Analytics>
    <Header profile={resume.profile} />
    <Nav />
    <About />
    <Experience />
    <Qualifications />
    <Projects />
    <Footer />
  </Analytics>
)

export default App
