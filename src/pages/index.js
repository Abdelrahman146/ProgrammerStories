import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

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
        <div>

          <PageHero/>

          <section className="section">
            <div className="container">
              <div className="columns">
                <div className="column is-two-thirds">
                  <h1 className="title">Last Posts</h1>
                  <div className="columns is-multiline">
                  {[posts.map((post) => (
                    <div className="column is-half">
                    <PostCard
                      title={post.node.frontmatter.title}
                      img={post.node.frontmatter.image.childImageSharp.resize.src}
                      summary={post.node.frontmatter.subtitle}
                      publishDate={post.node.frontmatter.date}
                      link={post.node.fields.slug}
                    />
                    </div>
                  ))]}
                  </div>
                </div>
                <div className="column is-one-third ">
                  <div className="content has-text-centered notification is-primary">
                    <h3 className="title">Welcome!</h3>
                    <p>Hello! Thank you for visiting Programmer Stories Blog, I hope that I was helpful and provided you with the infomarion that you want to learn. if you have</p>
                  </div>
                  <div className="content has-text-centered notification is-info">
                    <h3 className="title">Why?!</h3>
                    <p>Hello! Thank you for visiting Programmer Stories Blog, I hope that I was helpful and provided you with the infomarion that you want to learn. if you have</p>
                  </div>
                  <div className="content has-text-centered notification is-light">
                    <h3 className="title">About Author</h3>
                    <p>Hello! Thank you for visiting Programmer Stories Blog, I hope that I was helpful and provided you with the infomarion that you want to learn. if you have</p>
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
