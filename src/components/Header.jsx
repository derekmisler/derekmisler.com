import React from 'react'
import PropTypes from 'prop-types'

class Header extends React.Component {
  render() {
    const { profile } = this.props
    return (
      <div id="top" className="jumbotron">
        <div className="container">
          <h1>{profile.first_name} {profile.last_name}<small>{profile.description}</small></h1>
        </div>
        <div className="overlay"></div>
        <a className="down-arrow" href="#about-derek-misler"><span className="icon-arrow-down"></span></a>
      </div>
    )
  }
}

Header.propTypes = {
  profile: PropTypes.object.isRequired
}

export default Header


