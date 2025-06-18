import React from 'react';

const Footer = () => {
  return (
    <footer className="xs-footer-sec">
      <div className="container">
        <div className="footer-top-item">
          <div className="xs-back-to-top">
            <a href="#" className="BackTo"><i className="fa fa-angle-double-up"></i></a>
          </div>
        </div>

        <div className="footer-item">
          <div className="row">
            <div className="col-lg-3">
              <div className="widgets">
                <div className="footer-logo">
                  <a href="./index.html"><img style={{width: 150}} src="https://res.cloudinary.com/dedfrilse/image/upload/v1745587217/opaqshqqjynmc2kpynpi.png" alt="" /></a>
                </div>
                <p>
                FORLAND aims to contribute to a Sustainable and inclusive forestry sector, contributing to Tanzania’s economic growth, poverty reduction, environmental sustainability and resilience against climate change impacts.
                </p>
                <ul className="footer-social">
                  <li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                  <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                  <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="widgets">
                <h3 className="widget-title">Useful Links</h3>
                <ul>
                  <li><a target="_blank" href="https://www.maliasili.go.tz/">MNRT</a></li>
                  <li><a target="_blank" href="https://finlandabroad.fi/web/tza/mission">FINLAND ABROAD</a></li>
                  <li><a target="_blank" href="https://www.privateforestry.or.tz/">PFP2</a></li>
                  <li><a target="_blank" href="https://forvac.or.tz/">FORVAC</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="widgets">
                <h3 className="widget-title">Navigate</h3>
                <ul className="service-link">
                  <li><a href="/background">Background</a></li>
                  <li><a href="/goal-and-outcome">Goal and Outcome</a></li>
                  <li><a href="/what-we-do">What We Do</a></li>
                  <li><a href="/focus-areas">Focus Areas</a></li>
                  <li><a href="/beneficiaries">Our Beneficiaries</a></li>
                  <li><a href="/where-we-work">Where We Work</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="widgets">
                <h3 className="widget-title">Contact Us</h3>
                <ul className="footer-contact-list">
                  <li>
                  
                    <i className="icon icon-map-marker2"></i>
                    FORLAND, P.O.Box 516, C/O Forestry and Wood Industries Training Centre, Kinyanambo, Mafinga, Tanzania.
                  </li>
                  <li>
                    <i className="icon icon-phone3"></i>
                    +255 786 165 173
                  </li>
                  <li>
                    <i className="icon icon-envelope"></i>
                    info@forland.or.tz
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-content">
          <div className="row">
            <div className="col-md-6">
              <p>2025 © All rights Reserved. Designed by: <a target="_blank"  href="https://essence.co.tz/">Essence Creative</a></p>
            </div>
            <div className="col-md-6">
              {/* <ul className="footer-bottom-menu">
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;