import React, { useState } from "react";
import DestinationList from "../components/DestinationList";
import Layout from "../components/Layout";
import Parallax from "../components/Parallax";
import Carousel from "../components/slider";
import WhyUs from "../components/Why_Us";

function Home() {
  const [showLocation, setLocation] = useState(false);
  const [selected, setSelection] = useState("Destination");

  const [showActivity, setActivity] = useState(false);
  const [selectedActivity, setSelectActivity] = useState("Activity");

  const [showDuration, setDuration] = useState(false);
  const [selectedDuration, setSelectDuration] = useState("Days");

  const [showGuest, setGuest] = useState(false);
  const [selectedGuest, setSelectGuest] = useState("0");

  return (
    <Layout>
      <div class="body-container">
        <div className="contents">
          <div className="explore">
            <span className="exploration">Let's Explore</span>
            <h1>Where would you like to go?</h1>
            <p>Checkout beautiful places around the world</p>
          </div>
          <div className="search-filter">
            <ul class="navbar-nav">
              <li class="nav-item menus">
                <div class={showLocation ? `dropdowns is-open` : `dropdowns`}>
                  <div
                    class="d-flex"
                    onClick={() => setLocation(!showLocation)}
                  >
                    <i class="zmdi zmdi-pin"></i>
                    <div class="dropbtn">
                      <span>Location</span>
                      <strong>{selected}</strong>
                    </div>
                    <i
                      class={
                        showLocation
                          ? `zmdi menu-arrow zmdi-chevron-up`
                          : `zmdi menu-arrow zmdi-chevron-down`
                      }
                    ></i>
                  </div>
                  <div class="dropdowns-content">
                    <span
                      onClick={(e) => {
                        setSelection(e.target.innerText);
                        setLocation(false);
                      }}
                    >
                      Bhotekoshi
                    </span>
                    <span
                      onClick={(e) => {
                        setSelection(e.target.innerText);
                        setLocation(false);
                      }}
                    >
                      Annapurna
                    </span>
                  </div>
                </div>
              </li>

              <li class="nav-item menus">
                <div class={showActivity ? `dropdowns is-open` : `dropdowns`}>
                  <div
                    class="d-flex"
                    onClick={() => setActivity(!showActivity)}
                  >
                    <i class="zmdi zmdi-bike"></i>
                    <div class="dropbtn">
                      <span>Activity</span>
                      <strong>{selectedActivity}</strong>
                    </div>
                    <i
                      class={
                        showActivity
                          ? `zmdi menu-arrow zmdi-chevron-up`
                          : `zmdi menu-arrow zmdi-chevron-down`
                      }
                    ></i>
                  </div>
                  <div class="dropdowns-content">
                    <span
                      onClick={(e) => {
                        setSelectActivity(e.target.innerText);
                        setActivity(false);
                      }}
                    >
                      Trekking
                    </span>

                    <span
                      onClick={(e) => {
                        setSelectActivity(e.target.innerText);
                        setActivity(false);
                      }}
                    >
                      Bungy
                    </span>
                    <span
                      onClick={(e) => {
                        setSelectActivity(e.target.innerText);
                        setActivity(false);
                      }}
                    >
                      Rafting
                    </span>
                    <span
                      onClick={(e) => {
                        setSelectActivity(e.target.innerText);
                        setActivity(false);
                      }}
                    >
                      Sightseeing
                    </span>
                    <span
                      onClick={(e) => {
                        setSelectActivity(e.target.innerText);
                        setActivity(false);
                      }}
                    >
                      Mountain Tour
                    </span>
                  </div>
                </div>
              </li>

              <li class="nav-item menus">
                <div class={showDuration ? `dropdowns is-open` : `dropdowns`}>
                  <div
                    class="d-flex"
                    onClick={() => setDuration(!showDuration)}
                  >
                    <i class="zmdi zmdi-time"></i>
                    <div class="dropbtn">
                      <span>Duration</span>
                      <strong>{selectedDuration}</strong>
                    </div>
                    <i
                      class={
                        showDuration
                          ? `zmdi menu-arrow zmdi-chevron-up`
                          : `zmdi menu-arrow zmdi-chevron-down`
                      }
                    ></i>
                  </div>
                  <div class="dropdowns-content">
                    <span
                      onClick={(e) => {
                        setSelectDuration(e.target.innerText);
                        setDuration(false);
                      }}
                    >
                      5 Days
                    </span>
                    <span
                      onClick={(e) => {
                        setSelectDuration(e.target.innerText);
                        setDuration(false);
                      }}
                    >
                      6 Days
                    </span>
                    <span
                      onClick={(e) => {
                        setSelectDuration(e.target.innerText);
                        setDuration(false);
                      }}
                    >
                      4 Days
                    </span>
                  </div>
                </div>
              </li>
              <li class="nav-item menus">
                <div class={showGuest ? `dropdowns is-open` : `dropdowns`}>
                  <div class="d-flex" onClick={() => setGuest(!showGuest)}>
                    <i class="zmdi zmdi-accounts"></i>
                    <div class="dropbtn">
                      <span>Guest</span>
                      <strong>{selectedGuest}</strong>
                    </div>
                    <i
                      class={
                        showGuest
                          ? `zmdi menu-arrow zmdi-chevron-up`
                          : `zmdi menu-arrow zmdi-chevron-down`
                      }
                    ></i>
                  </div>
                  <div class="dropdowns-content">
                    <span
                      onClick={(e) => {
                        setSelectGuest(e.target.innerText);
                        setGuest(false);
                      }}
                    >
                      Nepal
                    </span>
                    <span
                      onClick={(e) => {
                        setSelectGuest(e.target.innerText);
                        setGuest(false);
                      }}
                    >
                      Nepal
                    </span>
                    <span
                      onClick={(e) => {
                        setSelectGuest(e.target.innerText);
                        setGuest(false);
                      }}
                    >
                      Nepal
                    </span>
                  </div>
                </div>
              </li>
            </ul>
            <button className="search-btn">Search</button>
          </div>
        </div>
      </div>
      <Carousel />
      <WhyUs />

      <div className="featured-tours">
        <div>
          <span className="featuring"> Featured Tours</span>
          <h1>Most Popular Tours</h1>
        </div>

        <div className="featured-items">
          <div class="image">
            <img
              class="image__img"
              src={require("../images/zipline.jpg")}
              alt=""
            />
            <div class="image__overlay image__overlay--primary">
              <div class="buttons">
                <button className="featured-button">FEATURED</button>
                <button className="wishlist-button">
                  <i class="zmdi zmdi-favorite-outline"></i> WISHLIST
                </button>
              </div>
              <div class="image__description">
                <div className="stars">
                  <i class="zmdi zmdi-star"></i>
                  <i class="zmdi zmdi-star"></i>
                  <i class="zmdi zmdi-star"></i>
                  <i class="zmdi zmdi-star"></i>
                  <i class="zmdi zmdi-star-outline"></i>
                </div>
                <div class="package-name">
                  <div class="">The Ultimate Adrenaline Fix</div>
                </div>
                <div class="package-loaction">
                  <p>
                    <i className="zmdi zmdi-pin"></i> Bhote Khosi
                  </p>
                </div>
                <div class="package-price">
                  From <span class="price">$130</span>
                </div>
              </div>
            </div>
          </div>
          <div class="image">
            <img
              class="image__img"
              src={require("../images/sauraha.jpg")}
              alt=""
            />
            <div class="image__overlay image__overlay--primary">
              <div class="buttons">
                <button className="featured-button">FEATURED</button>
                <button className="wishlist-button">
                  <i class="zmdi zmdi-favorite-outline"></i> WISHLIST
                </button>
              </div>
              <div class="image__description">
                <div className="stars">
                  <i class="zmdi zmdi-star"></i>
                  <i class="zmdi zmdi-star"></i>
                  <i class="zmdi zmdi-star"></i>
                  <i class="zmdi zmdi-star"></i>
                  <i class="zmdi zmdi-star-outline"></i>
                </div>
                <div class="package-name">
                  <div class="">The Ultimate Adrenaline Fix</div>
                </div>
                <div class="package-loaction">
                  <p>
                    <i className="zmdi zmdi-pin"></i> Bhote Khosi
                  </p>
                </div>
                <div class="package-price">
                  From <span class="price">$130</span>
                </div>
              </div>
            </div>
          </div>
          <div class="image">
            <img
              class="image__img"
              src={require("../images/landing.webp")}
              alt=""
            />
            <div class="image__overlay image__overlay--primary">
              <div class="buttons">
                <button className="featured-button">FEATURED</button>
                <button className="wishlist-button">
                  <i class="zmdi zmdi-favorite-outline"></i> WISHLIST
                </button>
              </div>
              <div class="image__description">
                <div className="stars">
                  <i class="zmdi zmdi-star"></i>
                  <i class="zmdi zmdi-star"></i>
                  <i class="zmdi zmdi-star"></i>
                  <i class="zmdi zmdi-star"></i>
                  <i class="zmdi zmdi-star-outline"></i>
                </div>
                <div class="package-name">
                  <div class="">The Ultimate Adrenaline Fix</div>
                </div>
                <div class="package-loaction">
                  <p>
                    <i className="zmdi zmdi-pin"></i> Bhote Khosi
                  </p>
                </div>
                <div class="package-price">
                  From <span class="price">$130</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DestinationList />

      <div className="offerings">
        <div className="offering-text">
          <span>What we are offering to customers.</span>
        </div>
        <div className="card">
          <div className="icon-wrap">
            <i class="zmdi zmdi-sun"></i>
          </div>
          <span>Awesome Experience</span>
        </div>
        <div className="card">
          <div className="icon-wrap">
            <i class="zmdi zmdi-flower-alt"></i>
          </div>
          <span>Great Hospitality</span>
        </div>
        <div className="card">
          <div className="icon-wrap">
            <i class="zmdi zmdi-input-antenna"></i>
          </div>
          <span>Exotic Memories</span>
        </div>
      </div>

      <Parallax />
    </Layout>
  );
}

export default Home;
