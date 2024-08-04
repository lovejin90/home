import React from "react";
import "../assets/css/open-iconic-bootstrap.min.css";
import "../assets/css/animate.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/css/owl.theme.default.min.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/ionicons.min.css";
import "../assets/css/bootstrap-datepicker.css";
import "../assets/css/jquery.timepicker.css";
import "../assets/css/flaticon.css";
import "../assets/css/icomoon.css";
import "../assets/css/style.css";

import AOS from "aos";
import "aos/dist/aos.css";

// import jqueryMin from "../assets/js/jquery.min.js";
// import jqueryMigrate from "../assets/js/jquery-migrate-3.0.1.min.js";
// import jqueryEasing from "../assets/js/jquery.easing.1.3.js";
// import juqeryWaypoints from "../assets/js/jquery.waypoints.min.js";
// import juqeryStellar from "../assets/js/jquery.stellar.min.js";
// import jqueryMagnificPopup from "../assets/js/jquery.magnific-popup.min.js";
// import jqueryAnimateNumber from "../assets/js/jquery.animateNumber.min.js";

// import poper from "../assets/js/popper.min.js";
// import owlCarousel from "../assets/js/owl.carousel.min.js";
// import aos from "../assets/js/aos.js";
// import scrollax from "../assets/js/scrollax.min.js";
//import googleMapApi from "../assets/https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false";
//import googleMap from "../assets/js/google-map.js";
//import main from "../assets/js/main.js";

const BoardList = () => {
  return (
    <div class="wrap">
      <nav id="navbar" class="navbar">
        <ul class="nav-menu">
          <li>
            <a data-scroll="home" href="#home" class="dot active">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a data-scroll="about" href="#about" class="dot">
              <span>About</span>
            </a>
          </li>
          <li>
            <a data-scroll="services" href="#services" class="dot">
              <span>Services</span>
            </a>
          </li>
          <li>
            <a data-scroll="work" href="#work" class="dot">
              <span>Gallery</span>
            </a>
          </li>
          <li>
            <a data-scroll="testimonial" href="#testimonial" class="dot">
              <span>Testimony</span>
            </a>
          </li>
          <li>
            <a data-scroll="contact" href="#contact" class="dot">
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>

      <section id="home" class="hero-wrap js-fullheight">
        <div class="overlay"></div>
        <div class="container">
          <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
            <div class="col-lg-7 ftco-animate d-flex align-items-center">
              <div class="text text-center">
                <h1 class="logo">
                  <a href="index.html">
                    <span class="flaticon-camera-shutter"></span>Snapshot
                    <small>Photographer / San Francisco</small>
                  </a>
                </h1>
                <h1 class="mb-4">
                  We Make <br />
                  Something Great
                </h1>
                <p class="mb-4">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts.
                </p>
                <p class="mt-5">
                  <a href="#" class="btn-custom">
                    Contact us <span class="ion-ios-arrow-round-forward"></span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-about img ftco-section" id="about">
        <div class="container">
          <div class="row d-flex no-gutters">
            <div class="col-md-6 col-lg-6 d-flex">
              <div class="img-about img d-flex align-items-stretch">
                <div class="overlay"></div>
                <div class="img img-video d-flex align-self-stretch align-items-center img-about-img">
                  <div class="video justify-content-center">
                    <a
                      href="https://vimeo.com/45830194"
                      class="icon-video popup-vimeo d-flex justify-content-center align-items-center"
                    >
                      <span class="ion-ios-play"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 pl-md-5">
              <div class="heading-section ftco-animate">
                <h2 class="mb-4">
                  Snapshot is A Creative Direction, <br />
                  Photography Agency
                </h2>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.Far
                  far away, behind the word mountains, far from the countries
                  Vokalia and Consonantia, there live the blind texts. Separated
                  they live in Bookmarksgrove right at the coast of the
                  Semantics, a large language ocean.
                </p>

                <div class="counter-wrap ftco-animate d-flex my-md-4">
                  <div class="text">
                    <p class="mb-4">
                      <span class="number" data-number="120">
                        0
                      </span>
                      <span>Project complete</span>
                    </p>
                  </div>
                </div>
                <div class="d-flex w-100">
                  <div class="img img-about-2 mr-2 img-about-img-1"></div>
                  <div class="img img-about-2 ml-2 img-about-img-2"></div>
                </div>
                <blockquote class="blockquote mt-5">
                  <p class="mb-2">
                    "Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia.."
                  </p>
                  <span>&mdash; Lucy Lee</span>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" class="ftco-section">
        <div class="container">
          <div class="row">
            <div class="col-md-9">
              <div class="row">
                <div class="col-md-5 heading-section ftco-animate pb-5">
                  <h2 class="mb-4">Photography Services</h2>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country.
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="media block-6 services d-block ftco-animate">
                    <div class="icon">
                      <span class="flaticon-video-camera"></span>
                    </div>
                    <div class="media-body">
                      <h3 class="heading mb-3">
                        Movies &amp; Advertising Videos
                      </h3>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="media block-6 services d-block ftco-animate">
                    <div class="icon">
                      <span class="flaticon-video-player"></span>
                    </div>
                    <div class="media-body">
                      <h3 class="heading mb-3">Clip &amp; Music Videos</h3>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="media block-6 services d-block ftco-animate">
                    <div class="icon">
                      <span class="flaticon-video-player-1"></span>
                    </div>
                    <div class="media-body">
                      <h3 class="heading mb-3">Short Film Productions</h3>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 d-flex align-items-stretch">
              <div
                class="img w-100"
                style={{
                  backgroundImage: "url('/public/images/about.jpg')",
                }}
              ></div>
            </div>
          </div>
          <div class="row progress-circle pt-md-5">
            <div class="col-md-7 order-md-last py-md-5">
              <div class="row">
                <div class="col-md-4 mb-md-0 mb-4 ftco-animate">
                  <div class="">
                    <h2 class="text-center mb-4">Creation</h2>

                    <div class="progress mx-auto" data-value="90">
                      <span class="progress-left">
                        <span class="progress-bar border-primary"></span>
                      </span>
                      <span class="progress-right">
                        <span class="progress-bar border-primary"></span>
                      </span>
                      <div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                        <div class="h5">
                          90<sup class="small">%</sup>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 mb-md-0 mb-4 ftco-animate">
                  <div class="">
                    <h2 class="text-center mb-4">Development</h2>

                    <div class="progress mx-auto" data-value="80">
                      <span class="progress-left">
                        <span class="progress-bar border-primary"></span>
                      </span>
                      <span class="progress-right">
                        <span class="progress-bar border-primary"></span>
                      </span>
                      <div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                        <div class="h5">
                          80<sup class="small">%</sup>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 mb-md-0 mb-4 ftco-animate">
                  <div class="">
                    <h2 class="text-center mb-4">Production</h2>

                    <div class="progress mx-auto" data-value="75">
                      <span class="progress-left">
                        <span class="progress-bar border-primary"></span>
                      </span>
                      <span class="progress-right">
                        <span class="progress-bar border-primary"></span>
                      </span>
                      <div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                        <div class="h5">
                          75<sup class="small">%</sup>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="p-md-4 mt-4">
                  <div class="col-md-8 ftco-animate">
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-5 d-flex align-items-stretch">
              <div
                class="img w-100"
                style={{
                  backgroundImage: 'url("/public/images/about-2.jpg")',
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" class="ftco-section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-4 heading-section text-center ftco-animate pb-5">
              <h2 class="mb-4">Selected Projects</h2>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country.
              </p>
            </div>
          </div>
        </div>
        <div class="container-fluid px-md-0">
          <div class="row no-gutters">
            <div class="col-md-4 ftco-animate">
              <div
                class="model img d-flex align-items-end"
                style={{
                  backgroundImage: `url(
                    ${process.env.PUBLIC_URL} + "/images/model-1.jpg"
                  })`,
                }}
              >
                <a
                  href="images/model-1.jpg"
                  class="icon image-popup d-flex justify-content-center align-items-center"
                >
                  <span class="icon-expand"></span>
                </a>
                <div class="desc w-100 px-4">
                  <div class="text w-100 mb-3">
                    <span>Nature</span>
                    <h2>
                      <a href="work-single.html">Beautiful Work</a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 ftco-animate">
              <div
                class="model img d-flex align-items-end"
                style={{
                  backgroundImage: "url('/public/images/model-2.jpg')",
                }}
              >
                <a
                  href="images/model-2.jpg"
                  class="icon image-popup d-flex justify-content-center align-items-center"
                >
                  <span class="icon-expand"></span>
                </a>
                <div class="desc w-100 px-4">
                  <div class="text w-100 mb-3">
                    <span>Nature</span>
                    <h2>
                      <a href="work-single.html">Beautiful Work</a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 ftco-animate">
              <div
                class="model img d-flex align-items-end"
                style={{
                  backgroundImage: "url('/public/images/model-3.jpg')",
                }}
              >
                <a
                  href="images/model-3.jpg"
                  class="icon image-popup d-flex justify-content-center align-items-center"
                >
                  <span class="icon-expand"></span>
                </a>
                <div class="desc w-100 px-4">
                  <div class="text w-100 mb-3">
                    <span>Nature</span>
                    <h2>
                      <a href="work-single.html">Beautiful Work</a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 ftco-animate">
              <div
                class="model img d-flex align-items-end"
                style={{
                  backgroundImage: "url('/public/images/model-4.jpg')",
                }}
              >
                <a
                  href="images/model-4.jpg"
                  class="icon image-popup d-flex justify-content-center align-items-center"
                >
                  <span class="icon-expand"></span>
                </a>
                <div class="desc w-100 px-4">
                  <div class="text w-100 mb-3">
                    <span>Nature</span>
                    <h2>
                      <a href="work-single.html">Beautiful Work</a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 ftco-animate">
              <div
                class="model img d-flex align-items-end"
                style={{
                  backgroundImage: "url('/public/images/model-5.jpg')",
                }}
              >
                <a
                  href="images/model-5.jpg"
                  class="icon image-popup d-flex justify-content-center align-items-center"
                >
                  <span class="icon-expand"></span>
                </a>
                <div class="desc w-100 px-4">
                  <div class="text w-100 mb-3">
                    <span>Nature</span>
                    <h2>
                      <a href="work-single.html">Beautiful Work</a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 ftco-animate">
              <div
                class="model img d-flex align-items-end"
                style={{
                  backgroundImage: "url('/public/images/model-6.jpg')",
                }}
              >
                <a
                  href="images/model-6.jpg"
                  class="icon image-popup d-flex justify-content-center align-items-center"
                >
                  <span class="icon-expand"></span>
                </a>
                <div class="desc w-100 px-4">
                  <div class="text w-100 mb-3">
                    <span>Nature</span>
                    <h2>
                      <a href="work-single.html">Beautiful Work</a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 ftco-animate">
              <div
                class="model img d-flex align-items-end"
                style={{
                  backgroundImage: "url('/public/images/model-7.jpg')",
                }}
              >
                <a
                  href="images/model-7.jpg"
                  class="icon image-popup d-flex justify-content-center align-items-center"
                >
                  <span class="icon-expand"></span>
                </a>
                <div class="desc w-100 px-4">
                  <div class="text w-100 mb-3">
                    <span>Nature</span>
                    <h2>
                      <a href="work-single.html">Beautiful Work</a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 ftco-animate">
              <div
                class="model img d-flex align-items-end"
                style={{
                  backgroundImage: "url('/public/images/model-8.jpg')",
                }}
              >
                <a
                  href="images/model-8.jpg"
                  class="icon image-popup d-flex justify-content-center align-items-center"
                >
                  <span class="icon-expand"></span>
                </a>
                <div class="desc w-100 px-4">
                  <div class="text w-100 mb-3">
                    <span>Nature</span>
                    <h2>
                      <a href="work-single.html">Beautiful Work</a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 ftco-animate">
              <div
                class="model img d-flex align-items-end"
                style={{
                  backgroundImage: "url('/public/images/model-9.jpg')",
                }}
              >
                <a
                  href="images/model-9.jpg"
                  class="icon image-popup d-flex justify-content-center align-items-center"
                >
                  <span class="icon-expand"></span>
                </a>
                <div class="desc w-100 px-4">
                  <div class="text w-100 mb-3">
                    <span>Nature</span>
                    <h2>
                      <a href="work-single.html">Beautiful Work</a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 ftco-animate">
              <div
                class="model img d-flex align-items-end"
                style={{
                  backgroundImage: "url('/public/images/model-10.jpg')",
                }}
              >
                <a
                  href="images/model-10.jpg"
                  class="icon image-popup d-flex justify-content-center align-items-center"
                >
                  <span class="icon-expand"></span>
                </a>
                <div class="desc w-100 px-4">
                  <div class="text w-100 mb-3">
                    <span>Nature</span>
                    <h2>
                      <a href="work-single.html">Beautiful Work</a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 ftco-animate">
              <div
                class="model img d-flex align-items-end"
                style={{
                  backgroundImage: "url('/public/images/model-11.jpg')",
                }}
              >
                <a
                  href="images/model-11.jpg"
                  class="icon image-popup d-flex justify-content-center align-items-center"
                >
                  <span class="icon-expand"></span>
                </a>
                <div class="desc w-100 px-4">
                  <div class="text w-100 mb-3">
                    <span>Nature</span>
                    <h2>
                      <a href="work-single.html">Beautiful Work</a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 ftco-animate">
              <div
                class="model img d-flex align-items-end"
                style={{
                  backgroundImage: "url('/public/images/model-12.jpg')",
                }}
              >
                <a
                  href="images/model-12.jpg"
                  class="icon image-popup d-flex justify-content-center align-items-center"
                >
                  <span class="icon-expand"></span>
                </a>
                <div class="desc w-100 px-4">
                  <div class="text w-100 mb-3">
                    <span>Nature</span>
                    <h2>
                      <a href="work-single.html">Beautiful Work</a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section testimony-section" id="testimonial">
        <div class="container">
          <div class="row justify-content-center mb-5 pb-3">
            <div class="col-md-4 heading-section ftco-animate">
              <span class="subheading">Testimony</span>
              <h2 class="mb-4">Our satisfied customer says</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in
              </p>
            </div>
          </div>
          <div class="row ftco-animate">
            <div class="col-md-12">
              <div class="carousel-testimony owl-carousel">
                <div class="item">
                  <div class="testimony-wrap p-4 pb-5">
                    <div
                      class="user-img mb-4"
                      style={{
                        backgroundImage: "url('/public/images/person_1.jpg')",
                      }}
                    >
                      <span class="quote d-flex align-items-center justify-content-center">
                        <i class="icon-quote-left"></i>
                      </span>
                    </div>
                    <div class="text">
                      <p class="mb-5 pl-4 line">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div class="pl-5">
                        <p class="name">Garreth Smith</p>
                        <span class="position">
                          CEO Founder of Commercial Building
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="testimony-wrap p-4 pb-5">
                    <div
                      class="user-img mb-4"
                      style={{
                        backgroundImage: "url('/public/images/person_2.jpg')",
                      }}
                    >
                      <span class="quote d-flex align-items-center justify-content-center">
                        <i class="icon-quote-left"></i>
                      </span>
                    </div>
                    <div class="text">
                      <p class="mb-5 pl-4 line">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div class="pl-5">
                        <p class="name">Garreth Smith</p>
                        <span class="position">
                          CEO Founder of Interior Design
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="testimony-wrap p-4 pb-5">
                    <div
                      class="user-img mb-4"
                      style={{
                        backgroundImage: "url('/public/images/person_3.jpg')",
                      }}
                    >
                      <span class="quote d-flex align-items-center justify-content-center">
                        <i class="icon-quote-left"></i>
                      </span>
                    </div>
                    <div class="text">
                      <p class="mb-5 pl-4 line">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div class="pl-5">
                        <p class="name">Garreth Smith</p>
                        <span class="position">Exterior Designer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="testimony-wrap p-4 pb-5">
                    <div
                      class="user-img mb-4"
                      style={{
                        backgroundImage: "url('/public/images/person_1.jpg')",
                      }}
                    >
                      <span class="quote d-flex align-items-center justify-content-center">
                        <i class="icon-quote-left"></i>
                      </span>
                    </div>
                    <div class="text">
                      <p class="mb-5 pl-4 line">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div class="pl-5">
                        <p class="name">Garreth Smith</p>
                        <span class="position">Landscape Designer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="testimony-wrap p-4 pb-5">
                    <div
                      class="user-img mb-4"
                      style={{
                        backgroundImage: "url('/public/images/person_1.jpg')",
                      }}
                    >
                      <span class="quote d-flex align-items-center justify-content-center">
                        <i class="icon-quote-left"></i>
                      </span>
                    </div>
                    <div class="text">
                      <p class="mb-5 pl-4 line">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div class="pl-5">
                        <p class="name">Garreth Smith</p>
                        <span class="position">System Analyst</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section contact-section" id="contact">
        <div class="container">
          <div class="row justify-content-center mb-5 pb-3">
            <div class="col-md-4 heading-section text-center ftco-animate">
              <h2 class="mb-4">Contact Me</h2>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country.
              </p>
            </div>
          </div>

          <div class="row mb-5">
            <div class="col-md-3 d-flex ftco-animate">
              <div class="align-self-stretch box text-center p-4">
                <div class="icon d-flex align-items-center justify-content-center">
                  <span class="icon-map-signs"></span>
                </div>
                <div>
                  <h3 class="mb-4">Address</h3>
                  <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                </div>
              </div>
            </div>
            <div class="col-md-3 d-flex ftco-animate">
              <div class="align-self-stretch box text-center p-4">
                <div class="icon d-flex align-items-center justify-content-center">
                  <span class="icon-phone2"></span>
                </div>
                <div>
                  <h3 class="mb-4">Contact Number</h3>
                  <p>
                    <a href="tel://1234567920">+ 1235 2355 98</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3 d-flex ftco-animate">
              <div class="align-self-stretch box text-center p-4">
                <div class="icon d-flex align-items-center justify-content-center">
                  <span class="icon-paper-plane"></span>
                </div>
                <div>
                  <h3 class="mb-4">Email Address</h3>
                  <p>
                    <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3 d-flex ftco-animate">
              <div class="align-self-stretch box text-center p-4">
                <div class="icon d-flex align-items-center justify-content-center">
                  <span class="icon-globe"></span>
                </div>
                <div>
                  <h3 class="mb-4">Website</h3>
                  <p>
                    <a href="#">yoursite.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="row block-9">
            <div class="col-md-6 ftco-animate">
              <form action="#" class="contact-form p-4 p-md-5 py-md-5">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="7"
                    class="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div class="form-group">
                  <input
                    type="submit"
                    value="Send Message"
                    class="btn btn-primary py-3 px-5"
                  />
                </div>
              </form>
            </div>

            <div class="col-md-6 d-flex align-items-stretch">
              <div id="map"></div>
            </div>
          </div>
        </div>
      </section>

      <footer class="ftco-footer py-5">
        <div class="container text-center">
          <div class="row">
            <div class="col-md-12 text-center">
              <p>
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This template is made with{" "}
                <i class="icon-heart" aria-hidden="true"></i> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
              </p>

              <ul class="ftco-footer-social p-0">
                <li class="ftco-animate">
                  <a href="#">
                    <span class="icon-twitter"></span>
                  </a>
                </li>
                <li class="ftco-animate">
                  <a href="#">
                    <span class="icon-facebook"></span>
                  </a>
                </li>
                <li class="ftco-animate">
                  <a href="#">
                    <span class="icon-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* <div id="ftco-loader" class="show fullscreen">
        <svg class="circular" width="48px" height="48px">
          <circle
            class="path-bg"
            cx="24"
            cy="24"
            r="22"
            fill="none"
            stroke-width="4"
            stroke="#eeeeee"
          />
          <circle
            class="path"
            cx="24"
            cy="24"
            r="22"
            fill="none"
            stroke-width="4"
            stroke-miterlimit="10"
            stroke="#F96D00"
          />
        </svg>
      </div> */}
    </div>
  );
};

export default BoardList;
