import React from 'react';
import Layout from '../../components/layout';
import { Helmet } from 'react-helmet-async';

const Focusareas = () => {
  return (
    <Layout>
        <div className="about-us-page">
        <Helmet>
        <title>Focus Areas- FORLAND</title>
        </Helmet>
      {/* Breadcrumb Banner Section */}
      <section 
        className="banner-inner-sec" 
        style={{backgroundImage: "url('assets/images/bg1.png')"}}
      >
        <div className="banner-table">
          <div className="banner-table-cell">
            <div className="container">
              <div className="banner-inner-content">
                <h2 className="banner-inner-title">Focus Areas</h2>
                <ul className="xs-breadcumb">
                  <li><a href="/"> Home / </a> Focus Areas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Company Section */}
      {/* <section className="about-inner section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="300ms">
              <div className="about-inner-img">
                <img src="assets/images/bg2.png" alt="Our company" />
              </div>
            </div>
            
            <div className="col-lg-7 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="400ms">
              <div className="about-inner-content">
                <h2 className="column-title2 column-title">The Project is implemented through four results areas</h2>
                
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
      {/* Ready to Contact Section */}
      <section 
        className="ready-to-contact-2 section-padding" 
       style={{background: '#fff !important'}}
      >
        <div className="container">
          <div className="col-lg-12">
            <div className="ready-to-contact2-content">
              <h2>The Project is implemented through four results areas</h2>
              <p style={{textAlign: 'justify'}}>
              1. Smallholder plantation management. 
<br/><br/>Result 1: ‘Tree growers and organisations effectively manage plantations’. This result continues the work of PFP2 to support individual tree growers and their organizations and focuses on strengthening the capacity of smallholder tree growers to manage and protect their plantations and achieve optimal yields.

              </p>
              <p style={{textAlign: 'left'}}>
              2. Community Based Forest Management. 
<br/><br/>Result 2: ‘Communities implement CBFM’. The result aims at facilitating communities to sustainably manage their Miombo natural forests, building further on the work of the Forestry and Value Chain Development Programme (FORVAC).

              </p>
            
              <p style={{textAlign: 'left'}}>
              Value chain and enterprise development. 
<br/><br/> Result 3: ‘CBFM communities, tree growers and MSMEs run viable forestry enterprises’. Under this result the Project will build on the results of the Participatory Plantation Forestry Programme (PFP2) and FORVAC and support the beneficiaries (CBFM communities, tree growers and MSMEs) in improving their production and business skills, as well as facilitate their actual enterprises in terms of increased/improved value-added production and marketing.


              </p>
           
              <p style={{textAlign: 'left'}}>
              4. Enabling environment/institutional development. 
              <br/><br/> Result 4: ‘Improved enabling environment for the forestry sector, supporting smallholder forestry, CBFM, and MSMEs in the forest value chain’. The Project will strengthen institutions, particularly in forest education and their ability to provide services related to Result areas 1-3. The Project will support relevant research and help improve the enabling forestry policy environment through facilitating a dialogue between public and private stakeholders.


              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="about-inner section-padding">
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

export default Focusareas;