import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => {
  const { profile } = props
  return (
    <div id="top" className="jumbotron">
      <div className="container">
        <h1>{profile.first_name} {profile.last_name}<small>{profile.description}</small></h1>
      </div>
      <div className="overlay" />
      <a className="down-arrow" href="#about-derek-misler"><span className="icon-arrow-down" /></a>
    </div>
  )
}

Header.propTypes = {
  profile: PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
}

export default Header
