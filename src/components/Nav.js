import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'


class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuActive: '',
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu(){
    if (this.state.menuActive == '') {
      this.setState({
        menuActive: 'is-active'
      })
    }else {
      this.setState({
        menuActive: ''
      })
    }
  }

  render() {
    return (
      <nav className="navbar is-dark">
        <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <p className="is-size-5"><span className="icon"><i className="fas fa-chevron-left"></i></span><span className="icon"><i className="fas fa-marker "></i></span><span className="icon"><i className="fas fa-chevron-right"></i></span><span>undefined blog</span></p>
          </Link>
          <a role="button" className={`navbar-burger ${this.state.menuActive}`} onClick={this.toggleMenu} data-target="navMenu" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${this.state.menuActive}`} id="navMenu">
          <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          </div>
        </div>

        </div>
      </nav>
    )
  }
}

// Nav.propTypes = {
//
// }

export default Nav
