import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import GalleryImage from "../components/GalleryImage"

const properties = ({ location, data }) => {
  const { allStrapiPropertiesImage } = data
  return (
    <Layout location={location} title="Properties">
      <div className="container properties">
        <div className="heading text-center">
          <h2>Gallery</h2>
        </div>
        <div className="gap-spacing"></div>

        <div className="row align-items-center justify-content-between">
          {allStrapiPropertiesImage.nodes[0].image.map((v, i) => (
            <GalleryImage img={`https://texas-property-brothers.herokuapp.com${v.url}`} alt={v.name} key={i}/>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default properties

export const data = graphql`
  query {
    allStrapiPropertiesImage {
      nodes {
        image {
          name
          url
        }
      }
    }
  }
`
