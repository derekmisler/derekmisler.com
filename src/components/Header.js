import React from 'react'

class Header extends React.Component {
  static propTypes = {
    profile: React.PropTypes.object.isRequired
  }

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

export default Header


