import React from 'react';
import Layout from '../../components/layout';
import BannerHeader from '../../components/BannerHeader';
import { Helmet } from 'react-helmet-async';

const Forlandimpact = () => {
  return (
    <Layout>
        <div className="about-us-page">
        <Helmet>
        <title>Forland Impact - FORLAND</title>
        </Helmet>
      {/* Breadcrumb Banner Section */}
      <BannerHeader title="FORLAND Impact" breadcrumb="FORLAND Impact" />

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
                <h2 className="column-title2 column-title">Finland’s Country Strategy for Tanzania</h2>
                
                <div className="single-about-content">
                  <h3>The Project supports the achievement of the objectives of the overarching goal of Finland’s Country Strategy for Tanzania 2021-2024, which is to:
                  </h3>
                  <p style={{textAlign: "justify"}}>
                  1. Promote democracy, human rights and gender equality,
                  </p>
                  <p style={{textAlign: "justify"}}>2. Advance stability and sustainable development by contributing to poverty alleviation, promotion of livelihoods and climate resilience,
                  </p>
                  <p style={{textAlign: "justify"}}>3. Strengthen inclusive and sustainable growth and employment creation by engaging in trade promotion and supporting the business environment.</p>
                  <p style={{textAlign: "justify"}}>The strategy states that cooperation in forestry will continue, but with a stronger attention to climate resilience. In addition, Finland will continue bilateral development cooperation efforts to improve livelihoods and climate resilience in rural communities through sustainable management and efficient use of existing forest resources and establishing new forests where there is none. For ensuring environmental and social sustainability, Finland will support participatory land-use planning processes that secure a balanced allocation of land for different purposes. Finland will also support education in the forestry sector as well as grassroots innovation.
                  </p>
                </div>
                

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Ready to Contact Section */}
      <section 
        className="ready-to-contact3 section-padding" 
       style={{background: '#eeeeee !important'}}
      >
        <div className="container">
          <div className="col-lg-12">
            <div className="ready-to-contact3-content">
              <h2>Finnish country programme for development cooperation Tanzania 2021–2024</h2>
              <p style={{textAlign: 'justify'}}>
              The Project is also well aligned and supports the results of the Finnish country programme for development cooperation Tanzania 2021–2024, particularly on two impact areas:
              </p>
              <p style={{textAlign: 'left'}}>
              1. Inclusive development through active citizenship, and 
              </p>
            
              <p style={{textAlign: 'left'}}>
               2: Improved forest-based livelihoods and climate resilience. Finland’s forestry cooperation will concentrate in the Southern Highlands and in selected miombo regions of Southern and Northeastern Tanzania. Forests and land should be used in a sustainable way to secure income, improve livelihoods and climate resilience of the local communities. A sustainable use of forests and land also contributes to carbon sequestration and other ecosystem services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>  
    </Layout>
  
  );
};

export default Forlandimpact;