import React from 'react'
import PropTypes from 'prop-types'
import { initGA, logPageView } from '../utils/helpers/analytics'

class Analytics extends React.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  render() {
    const { children } = this.props
    return (
      <main>
        {children}
      </main>
    )
  }
}

Analytics.propTypes = { children: PropTypes.arrayOf(PropTypes.element).isRequired }

export default Analytics
