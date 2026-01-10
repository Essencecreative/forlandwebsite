import React from 'react';
import Layout from '../../components/layout';
import BannerHeader from '../../components/BannerHeader';
import { Helmet } from 'react-helmet-async';

const Background = () => {
  return (
    <Layout>
        <div className="about-us-page">
        <Helmet>
        <title>Background - FORLAND</title>
        </Helmet>
      {/* Breadcrumb Banner Section */}
      <BannerHeader title="Background" breadcrumb="Background" />

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
                <h2 className="column-title2 column-title">Rationale for Launching the Project
                </h2>
                
                <div className="single-about-content">
                  <p>
                  The Project responds closely to the development policies and priorities of the Government of Finland and the Government of Tanzania, and aims at contributing to poverty alleviation, job creation and climate resilience. In terms of poverty, the supported districts in the South, targeted for CBFM, are falling in the areas with the highest poverty incidence. A socio-economic study undertaken in 2022 in the FORVAC supported regions1 confirmed that around half of the population was considered poor. For the Southern Highlands, the poverty figures of the districts range from low to above average. However, as shown in the socio-economic studies conducted by PFP, the distribution of wealth is uneven and most of the targeted beneficiaries belong to the poorer sections. 

                  </p>
                </div>
                
                

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Ready to Contact Section */}
      <section 
        className="ready-to-contact section-padding" 
        style={{background: "url(./assets/images/bg3.png) no-repeat center center /cover"}}
      >
        <div className="container">
          <div className="col-lg-12">
            <div className="ready-to-contact-content">
              <h2>Supporting Smallholder Plantations and MSMEs</h2>
              <p>
              The support to forestry provides a good opportunity for poverty reduction and economic growth. The focus on smallholder plantation forestry and small entrepreneurs is highly relevant as smallholders own the largest plantation area and MSMEs are the main producers of sawn wood in the Southern Highlands, though mostly operating through inefficient processes, resulting in low quality products. The Project’s focus on improved silvicultural practices and wood processing technologies is therefore highly relevant.

              </p>
              {/* <a href="/contactus" className="xs-btn fill">CONTACT US</a> */}
            </div>
          </div>
        </div>
      </section>
      <section className="about-inner section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="300ms">
              <div className="about-inner-img">
                <img src="assets/images/bg4.png" alt="Our company" />
              </div>
            </div>
            
            <div className="col-lg-7 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="400ms">
              <div className="about-inner-content">
                <h2 className="column-title2 column-title">Impacting Climate Resilience</h2>
                
                <div className="single-about-content">
                  <p>
                  In addition, the support will also contribute to climate resilience. The Project is in line with the nationally determined contributions (NDC) to the adaptation, in particular enhancing sustainable community-based forest management. The support to the plantations will also contribute to climate resilience and carbon sequestration through a focus on improved silvicultural practices, tree planting for a longer rotation cycle, fire management, and diversification of species of better provenance.
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

export default Background;