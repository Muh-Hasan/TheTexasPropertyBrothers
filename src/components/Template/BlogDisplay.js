import React from "react"
import Layout from "../Layout"

const BlogDisplay = ({ location, pageContext: { data } }) => {
  return (
    <Layout location={location} title={data.title}>
      <div className="blog-container">
        <div className="blog-margin">
          <div className="blog-title">
            <h1>{data.title}</h1>
          </div>
          <div className="blog-date">
            <p>
              <span>{data.date}</span>
            </p>
          </div>
          <div className="image">
            <img
              src={`http://localhost:1337${data.blogImage.url}`}
              alt={data.blogImage.name}
            />
          </div>
          <div className="blog-description">
            <p>{data.description}</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogDisplay
