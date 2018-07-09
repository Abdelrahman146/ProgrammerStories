import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'


class PageHero extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="hero is-info is-bold ">
        <div className="hero-body">
          <div className="container content">
            <h1 className="title is-size-4">
              A Programmer who wants to tell the world
            </h1>
            <h1 className="subtitle is-size-3">
              about things <strong className="is-size-1">HE LOVE!</strong>
            </h1>
            <a href="https://twitter.com/abdelrahman_146" target="_blank" className="button is-light " data-show-count="false"><span className="icon"><i className="fab fa-twitter"></i></span><span>Follow</span></a>
          </div>
        </div>
      </section>
    )
  }
}

// IndexPage.propTypes = {
//
// }

export default PageHero
