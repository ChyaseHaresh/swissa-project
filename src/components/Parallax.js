import React from 'react'
import CountUp from "react-countup";
import './../stylesheets/parallax.css';

function Parallax() {
  return (
    <div>
              <div class="parallex-home">
        <div class="parallax">
          <div class="my-auto">
            <div class="my-auto">
              <div class="fancy-font">Are you ready to travel?</div>
              <div class="parallax-title">
                Swissa's is a World Leading Online Tour Booking Platform
              </div>
            </div>
          </div>
        </div>
        <div class="stats-box py-5">
          <div class="all-stats">
            <div class="statistics">
              <div class="fancy-font package-num">
                <CountUp
                  start={0}
                  end={2}
                  duration={3}
                  delay={0}
                  enableScrollSpy={1}
                />
              </div>
              <div class="statistics">Total Package</div>
            </div>
            <div class="statistics">
              <div class="fancy-font package-num">
                <CountUp
                  start={0}
                  end={423}
                  duration={3}
                  delay={0}
                  enableScrollSpy={1}
                />
              </div>
              <div class="context-stats">Satisfied Customer</div>
            </div>
            <div class="statistics">
              <div class="fancy-font package-num">
                <CountUp
                  start={0}
                  end={3}
                  duration={3}
                  delay={0}
                  enableScrollSpy={1}
                />
              </div>
              <div class="context-stats">Partners</div>
            </div>
            <div class="statistics">
              <div class="fancy-font package-num">
                <CountUp
                  start={0}
                  end={5}
                  duration={3}
                  delay={0}
                  enableScrollSpy={1}
                />
              </div>
              <div class="context-stats">Local Guides</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Parallax