import { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    if (window.$) {
      if (window.$("#navigation1").length > 0) {
        window.$("#navigation1").navigation({
          effect: "slide"
        });
      }
    } else {
      console.error("jQuery is not loaded.");
    }
  }, []);

  return (
    <>
      {/* Header Top Section */}
      <section className="xs-header-top header-top-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-8">
              <div className="header-top-info">
                {/* <ul>
                  <li><a href="#">Why us</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Get a quote</a></li>
                </ul> */}
              </div>
            </div>
            <div className="col-lg-6 align-self-center col-md-4">
              <div className="header-top-search">
                <ul>
                  <li className="search-item">
                    <a href="#" className="search-icon"><span>ENGLISH &nbsp;&nbsp;| &nbsp;&nbsp;   SWAHILI</span></a>
                  </li>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Header Middle Section */}
      <section className="xs-header-middle header-v2-top">
        <div className="container">
          <div className="row">
            <div  style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} className="col-md-12 header-middle-info align-self-center">
              <div className="logo">
                <a href="./index.html">
                  <img style={{width: 600, objectFit: 'contain'}} src="https://res.cloudinary.com/dedfrilse/image/upload/v1745587115/tijfiixui0xnhvtzvv06.png" alt="" />
                </a>
              </div>
            </div>
            {/* <div className="align-self-center col-md-9">
              <div className="header-middle-info float-right">
                <ul>
                  <li>
                    <i className="icon icon-map-marker2"></i>
                    <label>Visit Our Office</label>
                    <p>76/A, North road, Newyork</p>
                  </li>
                  <li>
                    <i className="icon icon-envelope4"></i>
                    <label>Mail Us</label>
                    <p>example@gmail.com</p>
                  </li>
                  <li className="header-social">
                    <label>Follow Us</label>
                    <div className="header-v2-social">
                      <a href="#"><span className="fa fa-facebook-f"></span></a>
                      <a href="#"><span className="fa fa-twitter"></span></a>
                      <a href="#"><span className="fa fa-google-plus"></span></a>
                      <a href="#"><span className="fa fa-instagram"></span></a>
                    </div>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Header Navigation Section */}
      <header className="xs-header-nav xs-heder-nav-v2">
        <div className="container">
          <div className="row menu-item">
            <div className="col-lg-12">
              <nav id="navigation1" className="navigation header-nav clearfix">
                <div className="nav-header">
                  <a href="./index.html" className="mobile-logo">
                    <img src="assets/images/mobile_logo.png" alt="" />
                  </a>
                  <div className="nav-toggle"></div>
                </div>
                <div className="nav-menus-wrapper clearfix">
                  <ul className="nav-menu">
                  <li><a href="/">Home</a></li>
                    <li>
                      <a href="#">About Us</a>
                      <ul className="nav-dropdown">
                        <li><a href="/background">Background</a></li>
                        <li><a href="/goal-and-outcome">Goal and Outcome</a></li>
                        <li><a href="/organization-structure">Organization Structure</a></li>
                        <li><a href="/management-team">Management Team</a></li>
                        <li><a href="/partners-and-collaborators">Partners & Collaborators</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Our Work</a>
                      <ul className="nav-dropdown">
                        <li><a href="/what-we-do">What We Do</a></li>
                        <li><a href="/focus-areas">Focus Areas</a></li>
                        <li><a href="/beneficiaries">Our Beneficiaries</a></li>
                        <li><a href="/where-we-work">Where We Work</a></li>
                        <li><a href="/forland-impact">FORLAND Impact</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Publications</a>
                      <ul className="nav-dropdown">
                        <li><a href="/pfp-technical-reports"> ⁠PFP Technical Reports</a></li>
                        <li><a href="/forvac-technical-reports">⁠FORVAC Technical Reports</a></li>
                        <li>
                      <a href="#">⁠FORLAND Reports</a>
                      <ul className="nav-dropdown">
                        <li><a href="/forland/administration-and-financial-reports">⁠Administration and Financial Reports</a></li>
                        <li><a href="/forland/project-technical-reports">Project Technical Reports</a></li>
                        <li><a href="/forland/forms-and-guidelines">Forms and Guidelines</a></li>
                        <li><a href="/forland/brochure-and-newsletters">⁠Brochure & Newsletters</a></li>
                        <li><a href="/forland/institutional-support">Institutional Support</a></li>
                      </ul>
                      </li>
                      </ul>
                      </li>
                    <li><a href="#">News and Events</a>
                      <ul className="nav-dropdown">
                        <li><a href="/general-news">General News</a></li>
                        <li><a href="/media-news">Media News </a></li>
                        <li><a href="/events-and-training">Events and Training</a></li>
                        <li><a href="/radio-programmes">Radio Programmes </a></li>
                        <li><a href="/institutional-support">Institutional Support</a></li>
                        <li><a href="/gallery">Photo Gallery</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Opportunities</a>
                      <ul className="nav-dropdown">
                        <li><a href="/call-for-proposals">Call for Proposals</a></li>
                        <li><a href="/job-vacancies">Job Vacancies</a></li>
                      </ul>
                    </li>
                    <li><a href="/contactus">Contact</a></li>
                  </ul>
                  {/* <div className="header-nav-right-info align-to-right">
                    <label><i className="icon icon-phone3"></i> 000 2672 561</label>
                  </div> */}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
