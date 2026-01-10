import React from 'react';
import Layout from '../../components/layout';
import BannerHeader from '../../components/BannerHeader';
import { Helmet } from 'react-helmet-async';

const Whatwedo = () => {
  return (
    <Layout>
        <div className="about-us-page">
        <Helmet>
        <title>What We Do- FORLAND</title>
        </Helmet>
      {/* Breadcrumb Banner Section */}
      <BannerHeader title="What We Do" breadcrumb="What We Do" />

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
                <h2 className="column-title2 column-title">FORLAND Project Operations
                </h2>
                
                <div className="single-about-content">
                  <p>
                  The Project area is Iringa, Njombe, Ruvuma and Lindi Regions, covering 19 districts and some 170 villages. The actual number of the villages and districts to be involved will be further determined during the inception phase of the project.
                  </p>
                </div>
                
                <div className="single-about-content">
                  <p>
                  The Project will support small woodlot owners to establish and manage tree plantations, and rural communities to manage their Miombo Village Land Forest Reserves through Community Based Forest Management (CBFM). The law allows the village to have full authority to the benefits from the Village Land Forest Reserves (VLFR). 
                  </p>
                </div>
                
                <div className="single-about-content">
                  <p>
                  In addition, the Project will also strengthen the value chain aspects and help communities, tree growers and Micro Small and Medium Enterprises (MSMEs) to add value to their products. The number of beneficiaries is estimated to be over half a million. 
                  </p>
                </div>
                
                <div className="single-about-content">
                  <p>
                    
The Project will build on the results of the previous supported programmes to ensure sustainability of the achievements and supported institutions. It also responds closely to the development policies and priorities of the Government of Finland and the Government of Tanzania, contributing to poverty alleviation, job creation and climate resilience.
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
        style={{background: "url(./assets/images/bg3.png) no-repeat center center /cover"}}
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
                
                <div className="single-about-content">
                  <h3>That had air creature us</h3>
                  <p>
                    Multiply made after, herb man Won't a good open darkness 
                    our deep heaven seasons they're day.
                  </p>
                </div>
                
                <div className="single-about-content">
                  <h3>That had air creature us</h3>
                  <p>
                    Multiply made after, herb man Won't a good open darkness 
                    our deep heaven seasons they're day.
                  </p>
                </div>
                
                
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>  
    </Layout>
  
  );
};

export default Whatwedo;