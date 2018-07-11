import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import {Follow} from 'react-twitter-widgets'

class PageHero extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="hero is-info is-bold ">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-two-fifths">
                <div className="content">
                  <h1 className="title is-size-2">
                    Because coding is Fun, and Technology is Awesome!
                  </h1>
                  <a href="https://twitter.com/abdelrahman_146" target="_blank" className="button is-light " data-show-count="false"><span className="icon"><i className="fab fa-twitter"></i></span><span>Follow</span></a>
                </div>
              </div>
            </div>
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
