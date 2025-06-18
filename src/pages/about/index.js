import React from 'react';
import Layout from '../../components/layout';

const AboutUs = () => {
  return (
    <Layout>
        <div className="about-us-page">
      {/* Breadcrumb Banner Section */}
      <section 
        className="banner-inner-sec" 
        style={{backgroundImage: "url('assets/images/banner/about-banner.jpg')"}}
      >
        <div className="banner-table">
          <div className="banner-table-cell">
            <div className="container">
              <div className="banner-inner-content">
                <h2 className="banner-inner-title">About Us</h2>
                <ul className="xs-breadcumb">
                  <li><a href="/"> Home / </a> About</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="about-inner section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="300ms">
              <div className="about-inner-img">
                <img src="assets/images/about/about_2.jpg" alt="Our company" />
              </div>
            </div>
            
            <div className="col-lg-6 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="400ms">
              <div className="about-inner-content">
                <h2 className="column-title2 column-title">About our Company</h2>
                
                <div className="single-about-content">
                  <h3>You will morning man open green fruitful</h3>
                  <p>
                    And face of forth days for his lesser earth thing sea fourth. Brought. Fifth of form. Together.
                    Female whose said lights greater open gathered gathering.
                  </p>
                </div>
                
                <div className="single-about-content">
                  <h3>That had air creature us</h3>
                  <p>
                    Multiply made after, herb man Won't a good open darkness 
                    our deep heaven seasons they're day.
                  </p>
                </div>
                
                <div className="row about-funfact">
                  <div className="col-sm-4">
                    <div className="single-about-funfact">
                      <i className="icon-fun_fact_1"></i>
                      <h4 className="funfact-title">25 +</h4>
                      <p>year of experience</p>
                    </div>
                  </div>
                  
                  <div className="col-sm-4">
                    <div className="single-about-funfact">
                      <i className="icon-fun_fact_2"></i>
                      <h4 className="funfact-title">502 +</h4>
                      <p>happy customers</p>
                    </div>
                  </div>
                  
                  <div className="col-sm-4">
                    <div className="single-about-funfact">
                      <i className="icon-fun_fact_4"></i>
                      <h4 className="funfact-title">100</h4>
                      <p>professional awards</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline Section */}
      <section 
        className="company-timeline-sec section-padding" 
        style={{background: "url(assets/images/about/compnay-timeline.jpg)"}}
      >
        <div className="container-fluid">
          <div className="section-title-item section-title-v2-item white">
            <h2 className="section-title">
              <span className="xs-title">History time</span>
              Company Timeline
            </h2>
            <span className="section-bar"></span>
          </div>

          <div className="row company-timeline-item">
            <div className="col-md col-sm-6 single-timeline-item xs-padding-0">
              <div className="history-of-timeline">
                <span className="circle-border"></span>
                <label>2012</label>
              </div>
              <div className="single-timeline-content">
                <img src="assets/images/about/timeline_img_1.jpg" alt="2012" />
                <h3>2012</h3>
                <p>
                  Be brought first whales he signs thing our give were all 
                  fowl sea upon make firmament called face together.
                </p>
              </div>
            </div>
            
            <div className="col-md col-sm-6 single-timeline-item xs-padding-0">
              <div className="history-of-timeline">
                <span className="circle-border"></span>
                <label>2013</label>
              </div>
              <div className="single-timeline-content">
                <img src="assets/images/about/timeline_img_2.jpg" alt="2013" />
                <h3>2013</h3>
                <p>
                  Be brought first whales he signs thing our give were all 
                  fowl sea upon make firmament called face together.
                </p>
              </div>
            </div>
            
            <div className="col-md col-sm-6 single-timeline-item xs-padding-0 active">
              <div className="history-of-timeline">
                <span className="circle-border"></span>
                <label>2014</label>
              </div>
              <div className="single-timeline-content">
                <img src="assets/images/about/timeline1.jpg" alt="2014" />
                <h3>2014</h3>
                <p>
                  Be brought first whales he signs thing our give were all 
                  fowl sea upon make firmament called face together.
                </p>
              </div>
            </div>
            
            <div className="col-md col-sm-6 single-timeline-item xs-padding-0">
              <div className="history-of-timeline">
                <span className="circle-border"></span>
                <label>2015</label>
              </div>
              <div className="single-timeline-content">
                <img src="assets/images/about/timeline_img_3.jpg" alt="2015" />
                <h3>2015</h3>
                <p>
                  Be brought first whales he signs thing our give were all 
                  fowl sea upon make firmament called face together.
                </p>
              </div>
            </div>
            
            <div className="col-md col-sm-6 single-timeline-item xs-padding-0">
              <div className="history-of-timeline">
                <span className="circle-border"></span>
                <label>2016</label>
              </div>
              <div className="single-timeline-content">
                <img src="assets/images/about/timeline_img_4.jpg" alt="2016" />
                <h3>2016</h3>
                <p>
                  Be brought first whales he signs thing our give were all 
                  fowl sea upon make firmament called face together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us-sec why-choose-inner section-padding section-bg-v2">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="400ms">
              <div className="why-choose-content">
                <h2 className="column-title2 column-title">Why Choose Us</h2>
                <div className="row">
                  <div className="col-md-6">
                    <div className="single-why-choose-list">
                      <i className="icon-why-choose-1"></i>
                      <h3>We are ISO certifide</h3>
                      <p>
                        Be, brought first whales he signs thing our give were all fowl sea upon make called face together.
                      </p>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="single-why-choose-list">
                      <i className="icon-why-choose-2"></i>
                      <h3>Best support</h3>
                      <p>
                        Be, brought first whales he signs thing our give were all fowl sea upon make called face together.
                      </p>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="single-why-choose-list">
                      <i className="icon-why-choose-3"></i>
                      <h3>Expert team members</h3>
                      <p>
                        Be, brought first whales he signs thing our give were all fowl sea upon make called face together.
                      </p>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="single-why-choose-list">
                      <i className="icon-why-choose-4"></i>
                      <h3>No hidden cost</h3>
                      <p>
                        Be, brought first whales he signs thing our give were all fowl sea upon make called face together.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 align-self-center wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="500ms">
              <div className="why-choose-inner-img">
                <img src="assets/images/about/why-choose-us-inner.png" alt="Why choose us" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-sec section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-item section-title-v2-item">
                <h2 className="section-title">
                  <span className="xs-title">Our experts</span>
                  Meet with our Team
                </h2>
                <h3 className="hidden-title">experts</h3>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-team">
                <div className="team-img">
                  <img src="assets/images/team/team_1.jpg" alt="Mr. Jon miller" />
                  <div className="team-social">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-google-plus"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                  </div>
                </div>
                <h3>Mr. Jon miller</h3>
                <p>Gardener</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-sm-6">
              <div className="single-team">
                <div className="team-img">
                  <img src="assets/images/team/team_2.jpg" alt="Mr. Kibria mou" />
                  <div className="team-social">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-google-plus"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                  </div>
                </div>
                <h3>Mr. Kibria mou</h3>
                <p>Gardener</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-sm-6">
              <div className="single-team">
                <div className="team-img">
                  <img src="assets/images/team/team_3.jpg" alt="Mis. Jaqulin" />
                  <div className="team-social">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-google-plus"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                  </div>
                </div>
                <h3>Mis. Jaqulin</h3>
                <p>Gardener</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-sm-6">
              <div className="single-team">
                <div className="team-img">
                  <img src="assets/images/team/team_4.jpg" alt="Mr. Pongvan" />
                  <div className="team-social">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-google-plus"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                  </div>
                </div>
                <h3>Mr. Pongvan</h3>
                <p>Gardener</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Contact Section */}
      <section 
        className="ready-to-contact section-padding" 
        style={{background: "url(./assets/images/about/ready-to-contact.jpg) no-repeat center center /cover"}}
      >
        <div className="container">
          <div className="col-lg-8 offset-lg-2">
            <div className="ready-to-contact-content">
              <h2>Are you ready to take our service?</h2>
              <p>
                Be brought first whales he signs thing our give were all fowl sea upon make firmament called face, together.
                I third deep days fifth spirit you're is you're saw bearing 
              </p>
              <a href="#" className="xs-btn fill">CONTACT US</a>
            </div>
          </div>
        </div>
      </section>
    </div>  
    </Layout>
  
  );
};

export default AboutUs;