import React from 'react'
import PropTypes from 'prop-types'

const Header = props => {
  const { profile } = props
  return (
    <header id="top" className="jumbotron">
      <div className="container">
        <h1>{profile.firstName} {profile.lastName}<small>{profile.description}</small></h1>
      </div>
      <div className="overlay" />
      <a className="down-arrow" href="#about-derek-misler"><span className="icon-arrow-down" /></a>
    </header>
  )
}

Header.propTypes = {
  profile: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
}

export default Header
