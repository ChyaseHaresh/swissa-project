/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
import React from "react";
import Layout from "../components/Layout";
import "./../stylesheets/contact.css";

function Contact() {
  return (
    <Layout>
      <div className="contact">
        <span className="f-text">Get in touch with us</span>
        <h3>Our Headquater</h3>
        <div className="headquater-detail">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.024467094242!2d85.30744721512853!3d27.716530831695025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fcca32ad87%3A0x878cd8fd4663f85b!2zU3dpc3NhIEFnZW5jeSBOZXBhbCAtIFJlZCBTd2lzc2EgLSDXodeV15XXmdeh15Qg15TXkNeT15XXnQ!5e0!3m2!1sen!2snp!4v1667105637657!5m2!1sen!2snp"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{border: 0+'px', width: 100+'%', height: 100+'%'}}
            ></iframe>
          </div>
          <div className="contact-detail">
            <div class="ti">
              Located at the center of attraction for toursit,
              <strong> Our Headquater</strong>
            </div>
            <hr />
            <div class="contact-details">
              <div class="mb-3">
                <i class="zmdi zmdi-phone"></i>
                <span>+977-61-453839</span>
              </div>
              <div class="mb-3">
                <i class="zmdi zmdi-email"></i>
                <span>mail@swissatravel.com.np</span>
              </div>

              <div class="mb-3">
                <i class="zmdi zmdi-pin"></i>
                <span class="ms-3">
                  Bank Of KTM Building
                </span>
              </div>
            </div>
          </div>
        </div>

        <h3>Our Branch</h3>
        <div className="headquater-detail">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.800210599312!2d83.95804961513717!3d28.21338200967796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39959527ecf673b9%3A0x677e60cbd31624aa!2sSwissa%20Agency%20pokhara!5e0!3m2!1sen!2snp!4v1667105904656!5m2!1sen!2snp"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{border: 0+'px', width: 100+'%', height: 100+'%'}}
            ></iframe>
          </div>
          <div className="contact-detail">
            <div class="ti">
              Located at the center of attraction for toursit,
              <strong> Our Headquater</strong>
            </div>
            <hr />
            <div class="contact-details">
              <div class="mb-3">
                <i class="zmdi zmdi-phone"></i>
                <span>+977-61-453839</span>
              </div>
              <div class="mb-3">
                <i class="zmdi zmdi-email"></i>
                <span>mail@swissatravel.com.np</span>
              </div>

              <div class="mb-3">
                <i class="zmdi zmdi-pin"></i>
                <span class="ms-3">
                  Bank Of KTM Building
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
