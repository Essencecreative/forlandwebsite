import React from 'react';
import Layout from '../../components/layout';
import { Helmet } from 'react-helmet-async';

const Organization = () => {
  return (
    <Layout>
        <div className="about-us-page">
            <Helmet>
                  <title>Organization - FORLAND</title>
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
                <h2 className="banner-inner-title">Organization Structure</h2>
                <ul className="xs-breadcumb">
                  <li><a href="/"> Home / </a> Organization Structure</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Team Section */}
       <section 
        className="ready-to-contact3 section-padding" 
       
      >
        <div className="container">
          <div className="col-lg-12">
            <div className="ready-to-contact-content" style={{alignItems: 'center'}}>
              <h2 style={{textAlign: 'center'}}>Project management and decision-making
              </h2>
              <p style={{textAlign: 'center'}}>
              The project management and decision-making system will ensure that the Project reaches the planned outcome. If the Project is not on track, corrective measures need to be made with immediate effect. The decision-making system of the Project includes the Supervisory Board (SB), the Steering Committee (SC) and the Project Management Team (PMT).

              </p>
             
            </div>
          </div>
        </div>
      </section>

 {/* New Image Section */}
 <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <img 
                src="https://res.cloudinary.com/dedfrilse/image/upload/v1745938910/dvxrtd4rtvfowfeccgit.png" 
                alt="Organization Structure" 
                style={{
                  objectFit: 'contain',
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>  
    </Layout>
  
  );
};

export default Organization;