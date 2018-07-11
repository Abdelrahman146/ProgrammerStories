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
        <div className="box">
          <div className="columns">
            <div className="column is-one-third">
              <glamorous.Figure
              backgroundImage={`url(${this.props.img})`}
              backgroundSize="cover"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              height="150px"
              width="100%"
              />
            </div>
            <div className="column is-two-thirds">
              <div className="content postContent">
                <h2 className="title"><Link to={this.props.link}>{this.props.title}</Link></h2>
                <div className="subtitle" dangerouslySetInnerHTML={{ __html: this.props.summary }}/>
              </div>
            </div>
          </div>
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <span className="icon"><i className="fas fa-calendar-alt"></i></span>
                <span> {this.props.publishDate}</span>
              </div>
              <div className="level-item">
                <span className="icon"><i className="far fa-clock"></i></span>
                <span> {this.props.reading_time}</span>
              </div>
              <div className="level-item">
                <a href={`http://twitter.com/share?text=${this.props.title}&url=https://programmerStories.com${this.props.link}&hashtags=programmerStories&via=abdelrahman_146`} target="_blank">
                  <span className="icon"><i className="fab fa-twitter"></i></span>
                  <span>tweet</span>
                </a>
              </div>
            </div>
          </div>
          {/*<div className="card-image">
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
           </footer> */}

        </div>
    )
  }
}

// PostCard.propTypes = {
//
// }

export default PostCard
