import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

import Nav from '../components/Nav'

import '../style/main.scss'

class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>

        <Nav/>
        <div>
          {this.props.children({...this.props})}
        </div>
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              <strong>undefined blog</strong> Developed by <a href="https://twitter.com/abdelrahman_146">Abdel Rahman Harahsheh</a>. Powered by <a href="https://gatsby.org">Gatsby JS</a>
            </p>
            <a href="https://www.netlify.com">
              <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"/>
            </a>
          </div>
        </footer>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
