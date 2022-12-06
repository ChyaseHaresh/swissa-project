import React from 'react'   
import './../stylesheets/footer.css';

function Footer() {
  function componentDidMount() {
    window.scrollTo(0, 0)
  }
  return (
    <div>
         <div class="footer">
        <div class="pt-5">
          <div class="footer-container py-5">
            <div class="footer-rows">
              <div class="col px-3">
                <div class="">
                  Welcome to our Swissa Travel
                  <span class="text-white"> Kathmandu</span> . History, Culture
                  and much more.
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
                      Bank Of KTM Building, Thamel, Kathmandu
                    </span>
                  </div>
                </div>
              </div>
              <div class="col px-3">
                <div class="">
                  Welcome to our Swissa Travel
                  <span class="text-white"> Pokhara</span>. Nature, Adventure
                  and much more.
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
                    <span>In front of Global IME Bank, Lakeside, Pokhara</span>
                  </div>
                </div>
              </div>
              <div class="quick-links">
                <div class="footer-heading">Company</div>
                <ul class="mt-3">
                  <li>
                    <a href="#/about">About Us</a>
                  </li>
                  <li>
                    <a href="#/destination">Destination</a>
                  </li>
                  <li>
                    <a href="#/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
            <div class="copy-right-wrapper">
              <div class="scroll-top-container" onClick={()=>componentDidMount()}>
              <i class="zmdi zmdi-long-arrow-up"></i>
              </div>
              <div class="social-media">
                <a
                  class="search-container"
                  target="_blank"
                  href="https://www.facebook.com/SwissaTravel" rel="noreferrer"
                >
                  <i class="zmdi zmdi-facebook"></i>
                </a>
                <a
                  class="search-container"
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=%2B9779846047176&amp;fbclid=IwAR0Dn18WslAuAYug-nHCQufuckGscboZ3c0aJ2oNxZKK0qXrtVFKeDZZKss" rel="noreferrer"
                >
                  <i class="zmdi zmdi-whatsapp"></i>
                </a>
              </div>
              <div class="copyright-text">
                  <p>© Copyright 2022 by Swissa's</p>
                  <p>
                    Developed By
                    <a
                      class="text-decoration-none text-primary"
                      href="https://www.elscript.com/"
                    >
                      : Elscript Technology
                    </a>
                  </p>
              
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer