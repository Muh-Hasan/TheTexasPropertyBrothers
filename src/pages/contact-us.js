import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ContactInfo from "../components/ContactInfo"
import Envelope from "../assets/img/envelope.png"
import Mark from "../assets/img/marker.png"
import Phone from "../assets/img/phone.png"

const Contact = ({ location, data }) => {
  const { allStrapiContactUs } = data
  return (
    <Layout location={location}>
      <div className="container contact">
        <div className="gap-contact"></div>
        <div className="contact-heading">
          <h2 className="text-center">
            <span>
              Get in <span style={{ color: "#154a40" }}>touch</span> with us
            </span>
          </h2>
        </div>
        <div className="gap-contact"></div>
        <div className="row d-flex align-items-center justify-content-between">
          <div className="contact-info col-sm-12 col-md-12 col-lg-6">
            <div>
              <div className="gap-contact"></div>
              <ContactInfo
                description={allStrapiContactUs.nodes[0].email}
                title="Email"
                img={Envelope}
              />
              <ContactInfo
                description={allStrapiContactUs.nodes[0].phone}
                title="Phone"
                img={Phone}
              />
              <ContactInfo
                title="Address"
                description={allStrapiContactUs.nodes[0].address}
                img={Mark}
              />
            </div>
          </div>
          <div className="contact-form col-sm-12 col-md-12 col-lg-6">
            <div>
              <div className="d-flex flex-column">
                <label>Your phone</label>
                <input required />
              </div>
              <div className="d-flex flex-column">
                <label>Your email</label>
                <input required />
              </div>
              <div>
                <label>Your message (optional)</label>
                <textarea />
              </div>
              <div>
                <button className="submit-contact">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact

export const query = graphql`
  query {
    allStrapiContactUs {
      nodes {
        email
        address
        phone
      }
    }
  }
`
