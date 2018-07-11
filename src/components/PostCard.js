import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

class PostCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className=" card">

          <div className="card-image">
            <figure className="image is-5by3">
              <img src={this.props.img} alt={this.props.alt}/>
            </figure>
          </div>

          <div className="card-content">
            <div className="content postContent">
              <h3 className="title"><Link to={this.props.link}>{this.props.title}</Link></h3>
              <div className="subtitle is-size-6" dangerouslySetInnerHTML={{ __html: this.props.summary }}/>

            </div>
          </div>

          <footer className="card-footer">
             <p className="card-footer-item">
              <span>
                <span className="icon"><i className="fas fa-calendar-alt"></i></span>
                <span> {this.props.publishDate}</span>
              </span>
             </p>
             <p className="card-footer-item">
               <a href={`http://twitter.com/share?text=${this.props.title}&url=https://programmerStories.com${this.props.link}&hashtags=programmerStories&via=abdelrahman_146`} target="_blank">
                 <span className="icon"><i className="fab fa-twitter"></i></span>
                 <span>tweet</span>
               </a>
             </p>
           </footer>

        </div>
    )
  }
}

// PostCard.propTypes = {
//
// }

export default PostCard
