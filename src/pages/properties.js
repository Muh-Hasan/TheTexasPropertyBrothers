import React from "react"
import GalleryImage from "../components/GalleryImage"
import Layout from "../components/Layout"
import ImgTwo from "../assets/img/imgTwo.jpeg"

const properties = props => {
  return (
    <Layout location={props.location}>
      <div className="container properties">
        <div className="heading text-center">
          <h2>Gallery</h2>
        </div>
        <div className="gap-spacing"></div>

        <div className="row align-items-center justify-content-between">
          <GalleryImage img={ImgTwo} alt="some" />
          <GalleryImage img={ImgTwo} alt="some" />
          <GalleryImage img={ImgTwo} alt="some" />
          <GalleryImage img={ImgTwo} alt="some" />
          <GalleryImage img={ImgTwo} alt="some" />
          <GalleryImage img={ImgTwo} alt="some" />
        </div>
      </div>
    </Layout>
  )
}

export default properties
