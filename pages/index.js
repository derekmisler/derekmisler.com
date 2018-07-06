import resume from './utils/constants/resume'
import Layout from './components/Layout'

export const App = () => {
  const { profile } = resume
  return (
    <Layout heading={profile.fullName} subheading={profile.description} />
  )
}

export default App
