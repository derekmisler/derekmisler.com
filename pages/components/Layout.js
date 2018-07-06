import '../../static/styles/style.scss'
import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import { initGA, logPageView } from '../utils/helpers/analytics'

class Layout extends React.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  render() {
    const { children, heading, subheading } = this.props
    return (
      <>
        <Header heading={heading} subheading={subheading} />
        <Nav />
        {
          children &&
          <main>
            {children}
          </main>
        }
        <Footer />
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]),
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string
}
Layout.defaultProps = {
  children: null,
  subheading: null
}

export default Layout
