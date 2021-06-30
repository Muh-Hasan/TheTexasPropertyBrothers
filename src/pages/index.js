import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import ImgOne from "../assets/img/imgOne.jpg"
import ImgFive from "../assets/img/ImgFive.jpg"
import ImgSeven from "../assets/img/ImgSeven.png"
export default function Home(props) {
  return (
    <Layout location={props.location}>
      <div className="home">
        <section className="section-one">
          <div className="gap"></div>
          <div className="contain">
            <div className="row align-items-center justify-content-between d-flex">
              <div className="col-sm-12 col-md-6 col-lg-6 section-div">
                <div className="heading ">
                  <h2 className="section-one-head">
                    <span>travel</span>{" "}
                    <span style={{ color: "#154a40" }}>free,</span>{" "}
                    <span>Stay In Beautiful</span>{" "}
                    <span style={{ color: "black" }}>spaces</span>
                  </h2>
                </div>
                <div>
                  <p>
                    Career Hatch Corporate Housing allows companies to book
                    groups of workers for short term stays in the San Antonio /
                    Austin area and get good rates per night in great properties
                    that are beautifully maintained, furnished and set up for
                    work.
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 image section-one-img sections-img">
                <img src={ImgOne} alt="ImgOne" />
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
                <img src={ImgFive} alt="ImgOne" />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 section-div">
                <div className="section-two-head">
                  <h2 className="section-one-head">
                    <span style={{ color: "black" }}>Houses and</span>{" "}
                    <span style={{ color: "#154a40" }}>Apartments</span>{" "}
                    <span>the most flexibility</span>
                  </h2>
                </div>
                <div className="gap-spacing"></div>
                <div>
                  <p>
                    We offer flexible stay lengths that is given by days and not
                    limited to long term leases. Corporate houses are fully
                    furnished and have coffee / tea and other small amenities
                    around the house to make your workers enjoy their stay.
                  </p>
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
              <h2>Why Corporate Housing?</h2>
            </div>
            <div className="gap-spacing"></div>
            <div className="section-three-para">
              <p>
                We take extra care of our properties by maintaining excellent
                landscaping, quiet and convenient areas of town, weekly maid
                cleanings, and on call maintenance assistance should any need
                arise. We are also able to offer purchased services for
                breakfast and dinner arrangements to be delivered in the home or
                a personal chef to cook home meals for the guests 5 days out of
                the week. Unlike hotels you are able to house many more
                employees in one spot for 1 rate per night rather than getting
                separate rooms at higher rates per night. It is a win win for
                companies that travel and have employees or contractors that
                travel that need housing.
              </p>
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
                      Why we beat our competition?
                    </span>
                  </h2>
                </div>
                <div>
                  <p>
                    A typical hotel stay for 5 employees runs around $500 ($100
                    a night per employee) a night even with the best discounts
                    and deals. A 4 bedroom 2 bath or 2 and half bath corporate
                    housing costs around $200 a night and can house many more
                    than 5 employees with proper arrangements. They also get
                    services geared to them for their stay. That is nearly half
                    the price!
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 image sections-img">
                <img src={ImgSeven} alt="ImgOne" />
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
                  <span style={{ color: "#154a40" }}>Why wait?</span>
                </h2>
              </div>
              <div>
                <p>
                  Contact us and let us know your travel plans and schedule to
                  stay in San Antonio / Austin area and we will be happy to
                  serve you!
                </p>
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
