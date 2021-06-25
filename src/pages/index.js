import React from "react"
import Layout from "../components/Layout"

import ImgOne from "../assets/img/imgOne.jpg"

export default function Home(props) {
  return (
    <Layout location={props.location}>
      <div>
        <div className="hero-section-bgOne">
          <section>
            <div className="">
              <div className="contain">
                <div className="spacing row justify-content-between">
                  <div className="spacing col-sm-12 col-md-5 col-lg-5 hero-section-one-description">
                    <h2>
                      <span className="main">
                        Travel <span style={{ color: "#154a40" }}>Free,</span>
                        <br />
                        <span style={{ color: "#333333" }}>
                          Stay In Beautiful
                        </span>{" "}
                        Spaces
                        <br />
                      </span>
                    </h2>
                    <div className="gap" />
                    <p>
                      <span>
                        Career Hatch Corporate Housing allows companies to book
                        groups of workers for short term stays in the San
                        Antonio / Austin area and get good rates per night in
                        great properties that are beautifully maintained,
                        furnished and set up for work.
                      </span>
                    </p>
                  </div>
                  {/* <div > */}
                  <div className="spacing col-sm-12 col-md-5 col-lg-5 hero-section-one-img">
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}
