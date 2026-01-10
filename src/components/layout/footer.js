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
                <ul className="footer-social" style={{ display: 'flex', gap: '12px', padding: 0, marginTop: '20px' }}>
                  <li style={{ listStyle: 'none' }}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.facebook.com/share/1DFAwXPWup/?mibextid=wwXIfr"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: '#1877F2',
                        color: '#fff',
                        fontSize: '16px',
                        transition: 'all 0.3s ease',
                        border: '1px solid #1877F2'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(24, 119, 242, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li style={{ listStyle: 'none' }}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/company/forestry-land-use-and-value-chains-development-in-tanzania-forland/"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: '#0A66C2',
                        color: '#fff',
                        fontSize: '16px',
                        transition: 'all 0.3s ease',
                        border: '1px solid #0A66C2'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(10, 102, 194, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li style={{ listStyle: 'none' }}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://x.com/forlandtanzania?s=11"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: '#000000',
                        color: '#fff',
                        fontSize: '16px',
                        transition: 'all 0.3s ease',
                        border: '1px solid #000000'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li style={{ listStyle: 'none' }}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.instagram.com/forlandtanzania_?igsh=MTgzaXZjZzNjcHFnbw=="
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                        color: '#fff',
                        fontSize: '16px',
                        transition: 'all 0.3s ease',
                        border: '1px solid #bc1888'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(188, 24, 136, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
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