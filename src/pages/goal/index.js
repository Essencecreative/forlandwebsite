import React from 'react';
import Layout from '../../components/layout';
import BannerHeader from '../../components/BannerHeader';
import { Helmet } from 'react-helmet-async';

const Goal = () => {
  return (
    <Layout>
        <div className="about-us-page">
        <Helmet>
        <title>Goal - FORLAND</title>
        </Helmet>
      {/* Breadcrumb Banner Section */}
      <BannerHeader title="Goal And Outcome" breadcrumb="Goal And Outcome" />

      {/* About Company Section */}
      <section className="about-inner section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="300ms">
              <div className="about-inner-img">
                <img src="assets/images/bg2.png" alt="Our company" />
              </div>
            </div>
            
            <div className="col-lg-7 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="400ms">
              <div className="about-inner-content">
                <h2 className="column-title2 column-title">The Project’s Impact Statement</h2>
                
                <div className="single-about-content">
                  <p>
                  The Project´s impact statement is: Sustainable and inclusive forestry sector, contributing to
Tanzania’s economic growth, poverty reduction, environmental sustainability and resilience against climate change impacts.

                  </p>
                </div>
                
                <div className="single-about-content">
                  <h3>Indicators:                  </h3>
                  <p>
                  <strong>1.</strong> Differences in changes in forest and plantation cover (and GHG emissions) between the Project supported villages and other public forest areas.
                  </p>
                  <p>
                 <strong> 2.</strong> Value of the private forestry sector and the proportion of its contribution to the Tanzanian economy.
                  </p>
                  <p>
                  <strong>3.</strong> Percentage of households being income poor.
                  </p>
                </div>
                
               
                

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Ready to Contact Section */}
      {/* <section 
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
      </section> */}
      <section style={{backgroundColor: '#eeeeee'}} className="about-inner section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="300ms">
              <div className="about-inner-img">
                <img src="assets/images/bg4.png" alt="Our company" />
              </div>
            </div>
            
            <div className="col-lg-7 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="400ms">
              <div className="about-inner-content">
                <h2 className="column-title2 column-title">The Project’s Outcome and Outputs</h2>
                
                <div className="single-about-content">
                  <p>
                  The outcome of the Project is: Increased income and improved livelihoods of communities, smallholder tree growers and MSMEs from viable and sustainable forest-based value chains.
                  </p>
                </div>
                
                <div className="single-about-content">
                  <h3>The Outcome will be achieved through four results and related outputs as follows:</h3>
                  <p>
                  <strong>Result 1:</strong> Tree growers and organisations effectively manage plantations.
                  </p>
                  <p>
                  <strong>Result 2:</strong> Communities implement sustainable CBFM systems.
                  </p>
                  <p>
                  <strong>Result 3:</strong> CBFM communities, tree growers and MSMEs run viable forestry enterprises.
                  </p>
                  <p>
                  <strong>Result 4:</strong> Improved enabling environment for the forestry sector, supporting smallholder
forestry, CBFM, and MSMEs in the forest value chain.

                  </p>
                </div>          
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>  
    </Layout>
  
  );
};

export default Goal;