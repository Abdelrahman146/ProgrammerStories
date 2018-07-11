import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

import PageHero from '../components/PageHero'
import PostCard from '../components/PostCard'

class PostPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const { data } = this.props
    return (
      <div>
        <div>
          <section className="section">
            <div className="container ">
              <div className="columns is-centered">
                <div className="column is-two-thirds content postContent">
                    <h1 className="title is-size-1">{data.post.frontmatter.title}</h1>
                    <p className="subtitle">{data.post.frontmatter.subtitle}</p>
                    <p className="has-text-info">Published: {data.post.frontmatter.date}</p>
                </div>
              </div>
            </div>
          </section>

          <glamorous.Figure
          backgroundImage={`url(${data.post.frontmatter.image.childImageSharp.resize.src})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundAttachment="fixed"
          height="350px"
          width="100%"
          />

          <section className="section">
            <div className="container">
              <div className="columns is-centered">
                <div className="column is-two-thirds">
                  <article className="media">
                    <figure className="media-left">
                      <p className="image is-avatar is-64x64">
                        <img src={data.author.frontmatter.image.childImageSharp.resize.src}/>
                      </p>
                    </figure>
                    <div className="media-content">
                      <div className="content is-medium">
                        <p className="has-text-grey-dark">
                        <span className="level is-mobile"><span className="level-left"><strong className="level-item">{data.author.frontmatter.nickname}</strong><a href={this.props.twitter_link} target="_blank" className="button level-item is-info is-small is-rounded is-outlined"><span className="icon"><i className="fab fa-twitter"></i></span>
                        <span>follow</span></a></span></span>
                          {data.author.frontmatter.intro}
                        </p>
                      </div>
                    </div>
                  </article>
                  <br/>
                  <div className="content is-medium postContent" dangerouslySetInnerHTML={{ __html: data.post.html }}/>
                </div>
              </div>
            </div>
          </section>

          <br/>
          <br/>
          <br/>
          <br/>
          <section className="section hero is-small is-info">
            <div className="hero-body container content">
            <article className="media is-block-mobile">
              <div className="media-left ">
                <span className="icon is-large">
                  <i className="fab fa-twitter fa-3x"></i>
                </span>
              </div>
              <div className="media-content">
                <div className="content">
                    <h2 className="title">Did you Enjoy Reading ?!</h2>
                    <p className="is-size-5">If you enjoyed reading, please follow me on twitter to recieve any new article I have uploaded, and show this article some love us by a small writing a small tweet about it. also if you would like to me to write about any topic in mind. please don&#39;t hestitate to ask me on twitter.</p>
                </div>
                <nav className="level is-mobile">
                  <div className="level-left">
                    <a href={this.props.twitter_link} target="_blank" className="level-item" aria-label="reply">
                      <span className="icon is-small">
                        <i className="fas fa-user-plus" aria-hidden="true"></i>
                      </span>
                    </a>
                    <a href={`http://twitter.com/share?text=${data.post.frontmatter.title}&url=https://programmerStories.com${data.post.fields.slug}&hashtags=programmerStories&via=abdelrahman_146`} target="_blank" className="level-item" aria-label="retweet">
                      <span className="icon is-small">
                        <i className="fas fa-retweet" aria-hidden="true"></i>
                      </span>
                    </a>
                  </div>
                </nav>
              </div>
            </article>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

PostPage.propTypes = {
}

export default PostPage

export const query = graphql`
  query PostPageQuery($slug: String!, $author_id: Int!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        subtitle
        date
        image {
          childImageSharp {
            resize(width: 1920) {
              src
            }
          }
        }
      }
    }
    author: markdownRemark(frontmatter: { type: { eq: "author" }, id: {eq: $author_id} }) {
      html
      frontmatter {
        name
        nickname
        twitter_account
        twitter_link
        intro
        image {
          childImageSharp {
            resize(width: 128, height: 128) {
              src
            }
          }
        }
      }
    }
  }
`;
