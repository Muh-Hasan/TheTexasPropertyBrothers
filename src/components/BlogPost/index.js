import React from "react"
import { Link } from "gatsby"

const BlogPost = ({ img, alt, title, date }) => {
  return (
    <Link to={`/blogs/${title}`}>
      <div className="col-sm-12 col-md-6 col-lg-4 blogDisplay-blogPost">
        <div className="image blogPost-img">
          <img src={img} alt={alt} />
        </div>
        <div className="blogPost-title d-flex align-items-center justify-content-between">
          <div>
            <h3>{title}</h3>
          </div>
          <div className="blogPost-date">
            <p>
              <span>{date}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogPost
