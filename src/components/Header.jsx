import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const Header = props => {
  const { profile } = props
  const subheading = profile.description
    .replace(/\s([^\s]+)\s*$/, '\u00A0$1')

  return (
    <header>
      <div className="container">
        <h1 className="heading">
          {profile.firstName} {profile.lastName}
          <br />
          <small className="subheading">{subheading}</small>
        </h1>
      </div>
      <div className="overlay" />
      <NavLink className="downArrow" to="#about-derek-misler">Down</NavLink>
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
