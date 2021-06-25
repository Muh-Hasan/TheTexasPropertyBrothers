import React from "react"
import BulletPoint from "../components/BulletPoint"
import Layout from "../components/Layout"
import ImgThree from "../assets/img/imgThree.jpg"

const Services = props => {
  return (
    <Layout location={props.location}>
      <div className="services container d-flex">
        <div className="row align-items-center justify-content-between">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="heading">
              <h2>Services</h2>
            </div>
            <div className="gap-spacing"></div>
            <div>
              <BulletPoint description="Fully Furnished Houses" />
              <BulletPoint description="High Speed Wireless Internet" />
              <BulletPoint description="Smart TVs provided with Netflix / Roku accounts to use or login to your own accounts" />
              <BulletPoint description="Tea and Coffee with Coffee Maker and regular Kitchen accessories are available to residents." />
              <BulletPoint description="Offered delivery service using Favor a delivery service to bring food from any nearby restaurant or grocery store." />
              <BulletPoint description="Concierge booklet on things to do and nearby places to eat and shop." />
              <BulletPoint description="Weekly Cleaning service" />
              <BulletPoint description="Parking for 2 Vehicles on driveway" />
              <BulletPoint description="Plenty of Closet / Storage space " />
              <BulletPoint description="Grill in all housing available to use" />
              <BulletPoint description="Shampoo / soaps and other cleaning supplies included." />
              <BulletPoint description="Chat live support always available 24/7 to help for any needs or requests." />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 image">
            <img src={ImgThree} alt="imgThree" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Services
