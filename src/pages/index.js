import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import ImgOne from "../assets/img/imgOne.jpg"
import ImgFive from "../assets/img/ImgFive.jpg"
import ImgSeven from "../assets/img/ImgSeven.png"

export default function Home({ location, data }) {
  const {
    allStrapiHomeSectionOne,
    allStrapiHomeSectionTwo,
    allStrapiHomeSectionThree,
    allStrapiHomeSectionFour,
    allStrapiHomeContactBox,
  } = data
  const uri = "https://texas-property-brothers.herokuapp.com"

  return (
    <Layout location={location} title="Home">
      <div className="home">
        <section className="section-one">
          <div className="gap"></div>
          <div className="contain">
            <div className="row align-items-center justify-content-between d-flex">
              <div className="col-sm-12 col-md-6 col-lg-6 section-div">
                <div className="heading ">
                  <h2 className="section-one-head">
                    <span>{allStrapiHomeSectionOne.nodes[0].title}</span>
                  </h2>
                </div>
                <div>
                  <p>{allStrapiHomeSectionOne.nodes[0].description}</p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 image section-one-img sections-img">
                <img
                  src={`${uri}${allStrapiHomeSectionOne.nodes[0].image.url}`}
                  alt={allStrapiHomeSectionOne.nodes[0].image.name}
                />
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <section className="section-one">
          <div className="gap"></div>
          <div className="contain">
            <div className="row align-items-center justify-content-between d-flex section-two-div">
              <div className="col-sm-12 col-md-6 col-lg-6 image sections-img">
                <img
                  src={`${uri}${allStrapiHomeSectionTwo.nodes[0].image.url}`}
                  alt={allStrapiHomeSectionTwo.nodes[0].image.name}
                />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 section-div">
                <div className="section-two-head">
                  <h2 className="section-one-head">
                    <span>{allStrapiHomeSectionTwo.nodes[0].title}</span>
                  </h2>
                </div>
                <div className="gap-spacing"></div>
                <div>
                  <p>{allStrapiHomeSectionTwo.nodes[0].description}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <section className="section-three">
          <div className="gap-spacing"></div>
          <div className="gap-spacing"></div>
          <div className="container text-center">
            <div className="section-three-head">
              <h2>{allStrapiHomeSectionThree.nodes[0].title}</h2>
            </div>
            <div className="gap-spacing"></div>
            <div className="section-three-para">
              <p>{allStrapiHomeSectionThree.nodes[0].description}</p>
            </div>
            <div className="gap-spacing"></div>
            <div className="gap-spacing"></div>
          </div>
        </section>
        <br />
        <br />
        <section>
          <div className="contain">
            <div className="row align-items-center justify-content-between d-flex">
              <div className="col-sm-12 col-md-6 col-lg-6 section-div">
                <div className="section-two-head">
                  <h2 className="section-one-head">
                    <span style={{ color: "#154a40" }}>
                      {allStrapiHomeSectionFour.nodes[0].title}
                    </span>
                  </h2>
                </div>
                <div>
                  <p>{allStrapiHomeSectionFour.nodes[0].description}</p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 image sections-img">
                <img
                  src={`${uri}${allStrapiHomeSectionFour.nodes[0].image.url}`}
                  alt={allStrapiHomeSectionFour.nodes[0].image.name}
                />
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <section className="container section-five">
          <div className="section-five-bg">
            <div className="gap-spacing"></div>
            <div>
              <div className="section-two-head">
                <h2 className="section-one-head">
                  <span style={{ color: "#154a40" }}>
                    {allStrapiHomeContactBox.nodes[0].title}
                  </span>
                </h2>
              </div>
              <div>
                <p>{allStrapiHomeContactBox.nodes[0].description}</p>
              </div>
              <div className="section-five-btn">
                <Link to="/contact-us">
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
            <div className="gap-spacing"></div>
          </div>
        </section>
        <br />
        <br />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiHomeSectionOne {
      nodes {
        title
        description
        image {
          url
          name
        }
      }
    }
    allStrapiHomeSectionTwo {
      nodes {
        title
        description
        image {
          name
          url
        }
      }
    }
    allStrapiHomeSectionThree {
      nodes {
        title
        description
      }
    }
    allStrapiHomeSectionFour {
      nodes {
        title
        description
        image {
          url
          name
        }
      }
    }
    allStrapiHomeContactBox {
      nodes {
        title
        description
      }
    }
  }
`
