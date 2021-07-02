import React from "react"
import { graphql } from "gatsby"
import BulletPoint from "../components/BulletPoint"
import Layout from "../components/Layout"
const Services = ({ data, location }) => {
  const { allStrapiServicesImage, allStrapiServicesBulletPoints } = data
  return (
    <Layout location={location} title="Services">
      <div className="services container d-flex">
        <div className="row align-items-center justify-content-between">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="heading">
              <h2>Services</h2>
            </div>
            <div className="gap-spacing"></div>
            <div>
              {allStrapiServicesBulletPoints.nodes.map((v, i) => (
                <BulletPoint key={i} description={v.point} />
              ))}
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 image">
            <img
              src={`https://texas-property-brothers.herokuapp.com${allStrapiServicesImage.nodes[0].image.url}`}
              alt={allStrapiServicesImage.nodes[0].image.name}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Services

export const query = graphql`
  query {
    allStrapiServicesImage {
      nodes {
        image {
          name
          url
        }
      }
    }
    allStrapiServicesBulletPoints {
      nodes {
        point
      }
    }
  }
`
