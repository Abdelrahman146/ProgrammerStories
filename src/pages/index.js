import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import { Timeline } from 'react-twitter-widgets'

import PageHero from '../components/PageHero'
import PostCard from '../components/PostCard'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {data} = this.props
    const posts = data.allMarkdownRemark.edges
    return (
      <div>
        <Helmet>
          <title>code undefined</title>
        </Helmet>
        <div>
          <PageHero/>
          <section className="section">
            <div className="container">
              <div className="columns">
                <div className="column is-two-thirds">
                  <h1 className="title">No Posts Yet...</h1>
                  <div className="">
                  {[posts.map((post) => (
                    <PostCard
                      title={post.node.frontmatter.title}
                      img={post.node.frontmatter.image.childImageSharp.resize.src}
                      summary={post.node.frontmatter.subtitle}
                      publishDate={post.node.frontmatter.date}
                      reading_time={post.node.frontmatter.reading_time}
                      link={post.node.fields.slug}
                    />
                  ))]}
                  </div>
                </div>
                <div className="column is-one-third ">
                  <div className="content has-text-centered notification is-primary">
                    <h3 className="title">Welcome!</h3>
                    <p>Welcome to code undefined! I hope you will find all the posts on this blog useful. if you like any post, please support me by sharing this blog with your friends. Also, if you are interested in a technology topic and you want me to write about it, you can ask me with a small tweet on twitter.</p>
                  </div>
                  <div className="content has-text-centered notification is-info">
                    <h3 className="title">Why?!</h3>
                    <p>Internet, Applications, Artificial Intelligence, Business Intelligence, Internet of Things, and now Internet of Everything. surely you heard of at least one of those terms. this blog is about all of these beautiful human inventions and innovations. starting from the world of internet until we reach the big bang of data and the emergence of Artificial Intelligence</p>
                  </div>
                  <div className="content has-text-centered notification is-light">
                    <h3 className="title">About Author</h3>
                    <p>Abdel Rahman Harahsheh, software engineer, data scientist, web expert, graphic designer, nintendo fan and pokemon addict.</p>
                  </div>
                  <div className="content has-text-centered notification is-white">
                  <Timeline
                    dataSource={{
                      sourceType: 'profile',
                      screenName: 'abdelrahman_146'
                    }}
                    options={{
                      username: 'Abdel',
                      height: '400',
                      chrome: 'nofooter noborders transparent',
                    }}
                  />
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    )
  }
}

IndexPage.propTypes = {
  children: PropTypes.func,
}

export default IndexPage

export const IndexQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [id], order: ASC}, filter: {frontmatter: {type: {eq: "post"}}}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date
            subtitle
            reading_time
            image {
              childImageSharp{
                resize(width: 500) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;
