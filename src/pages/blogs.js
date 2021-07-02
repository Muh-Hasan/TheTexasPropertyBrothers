import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import BlogPost from "../components/BlogPost"

const Blog = ({ location, data }) => {
  const { allStrapiBlogs } = data
  return (
    <Layout location={location} title="Blogs">
      <div className='container blogDisplay'>
        <div className="row align-items-center justify-content-between">
          {allStrapiBlogs.nodes.map((v, i) => (
            <BlogPost
              title={v.title}
              img={`https://texas-property-brothers.herokuapp.com${v.blogImage.url}`}
              date={v.date}
              alt={v.blogImage.name}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query {
    allStrapiBlogs {
      nodes {
        title
        date
        blogImage {
          url
          name
        }
        description
      }
    }
  }
`
