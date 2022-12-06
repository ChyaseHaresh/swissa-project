import React, { useState } from 'react'
import './../stylesheets/destinationList.css';
function DestinationList() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div>
              <div className="destination-list">
        <span className="featuring">Destination List</span>
        <h1>Go Exotic Places</h1>
        <div className={showAll ? `all-places` : `places`}>
          <div class={showAll ? `dest-image-all` : `dest-image `}>
            <img
              class="dest-img"
              src={require("../images/zipline.jpg")}
              alt=""
            />
            <div class="dest-overlay">
              <div class="dest-description">
                <div class="package-name">
                  <div class="">Bhote Koshi</div>
                </div>
              </div>
            </div>
          </div>
          <div class={showAll ? `dest-image-all` : `dest-image2 `}>
            <img
              class="dest-img"
              src={require("../images/patan.webp")}
              alt=""
            />
            <div class="dest-overlay">
              <div class="dest-description">
                <div class="package-name">
                  <div class="">Kathmandu</div>
                </div>
              </div>
            </div>
          </div>
          <div class={showAll ? `dest-image-all` : `dest-image `}>
            <img class="dest-img" src={require("../images/anna.jpg")} alt="" />
            <div class="dest-overlay">
              <div class="dest-description">
                <div class="package-name">
                  <div class="">Annapurna</div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="places"> */}

          {/* 
        <div className={showAll ? `all-places` : `places`}>
          */}
          <div class={showAll ? `dest-image-all` : `dest-image2 `}>
            <img
              class="dest-img"
              src={require("../images/langtang.jpg")}
              alt=""
            />
            <div class="dest-overlay">
              <div class="dest-description">
                <div class="package-name">
                  <div class="">Langtang</div>
                </div>
              </div>
            </div>
          </div>

          <div class={showAll ? `dest-image-all` : `dest-image2 `}>
            <img class="dest-img" src={require("../images/sar.jpg")} alt="" />
            <div class="dest-overlay">
              <div class="dest-description">
                <div class="package-name">
                  <div class="">Sauraha</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? `HIDE` : `SHOW ALL `}
        </button>
      </div>
    </div>
  )
}

export default DestinationList