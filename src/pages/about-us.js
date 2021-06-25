import React from "react"
import ImgFour from "../assets/img/imgFour.jpg"

const About = () => {
  return (
    <div className="container about">
      <div className="row align-items-center justify-content-between">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="heading">
            <h2>About Us</h2>
          </div>
          <div className="gap-spacing"></div>
          <div>
            <p className="description">
              <span>
                We are a real estate corporate housing company that started in
                2019 and slowly built up properties in the popular San Antonio
                and Austin area. The owners are from Texas and love to provide
                businesses all over with the most flexible options to host their
                traveling employees or contractors.
              </span>
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 image">
          <img src={ImgFour} alt="ImgFour" />
        </div>
      </div>
    </div>
  )
}

export default About
