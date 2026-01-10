import React from 'react';
import Layout from '../../components/layout';
import BannerHeader from '../../components/BannerHeader';
import { Helmet } from 'react-helmet-async';

const Partners = () => {
  return (
    <Layout>
        <div className="about-us-page">
        <Helmet>
        <title>Partners - FORLAND</title>
        </Helmet>
      {/* Breadcrumb Banner Section */}
      <BannerHeader title="Partners & Collaborators" breadcrumb="Partners & Collaborators" />

      <section 
        className="ready-to-contact2 section-padding" 
      >
        <div className="container">
          <div className="col-lg-12">
            <div className="ready-to-contact2-content">
              <h2 style={{color: '#000'}}>Implementation Agencies</h2>
              <p style={{color: '#000'}}>
              The Forestry and Beekeeping Division (FBD) of the Ministry of Natural Resources and Tourism (MNRT) will implement the Project. In the Project implementation, FBD's closest allies are the President's Office - Regional Administration and Local Government (PO-RALG), and the Regional and District Councils, which are the main regulatory offices with regards to the institutionalisation of extension and IFM approaches and the line organizations responsible for village land forest reserves (VLFR) in their territories.
              </p>
              <p style={{color: '#000'}}>
              The village Natural Resource Councils (VNRC) manage the VLFRs, which are accountable to their
respective Village Councils. However, the most important decisions (like approval of village land use plans, forest management plans, harvesting plans or sharing of forest revenue and expenditure) need an endorsement by the Village Assembly. In the Southern Highlands, the Tree Growers' Associations are important actors in enabling their members to access extension, training and financial services and coordinating Project activities in their respective villages.
              </p>
            </div>
          </div>
        </div>
      </section>

  
      {/* <section className="partner-logos section-padding">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-6 col-md-3 mb-4 mb-md-0">
              <div className="partner-logo-item text-center">
                <img src="https://www.logodesign.net/logo/abstract-hands-around-the-star-603ld.png?nwm=1&nws=1&industry=organization&sf=&txt_keyword=All" 
                     alt="Ministry of Natural Resources and Tourism" 
                     />
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4 mb-md-0">
              <div className="partner-logo-item text-center">
                <img src="https://www.logodesign.net/logo/abstract-hands-around-the-star-603ld.png?nwm=1&nws=1&industry=organization&sf=&txt_keyword=All" 
                     alt="Food and Agriculture Organization" 
                     />
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4 mb-md-0">
              <div className="partner-logo-item text-center">
                <img src="https://www.logodesign.net/logo/abstract-hands-around-the-star-603ld.png?nwm=1&nws=1&industry=organization&sf=&txt_keyword=All" 
                     alt="United Nations Development Programme" 
                     />
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="partner-logo-item text-center">
                <img src="https://www.logodesign.net/logo/abstract-hands-around-the-star-603ld.png?nwm=1&nws=1&industry=organization&sf=&txt_keyword=All" 
                     alt="World Wildlife Fund" 
                     />
              </div>
            </div>
          </div>
          
     
          <div className="row justify-content-center mb-4">
            <div className="col-6 col-md-3 mb-4 mb-md-0">
              <div className="partner-logo-item text-center">
                <img src="https://www.logodesign.net/logo/abstract-hands-around-the-star-603ld.png?nwm=1&nws=1&industry=organization&sf=&txt_keyword=All" 
                     alt="International Union for Conservation of Nature" 
                      />
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4 mb-md-0">
              <div className="partner-logo-item text-center">
                <img src="https://www.logodesign.net/logo/abstract-hands-around-the-star-603ld.png?nwm=1&nws=1&industry=organization&sf=&txt_keyword=All" 
                     alt="European Union" 
                    />
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4 mb-md-0">
              <div className="partner-logo-item text-center">
                <img src="https://www.logodesign.net/logo/abstract-hands-around-the-star-603ld.png?nwm=1&nws=1&industry=organization&sf=&txt_keyword=All" 
                     alt="USAID" 
                     />
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="partner-logo-item text-center">
                <img src="https://www.logodesign.net/logo/abstract-hands-around-the-star-603ld.png?nwm=1&nws=1&industry=organization&sf=&txt_keyword=All" 
                     alt="Norwegian Agency for Development Cooperation" 
                     />
              </div>
            </div>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-6 col-md-3 mb-4 mb-md-0">
              <div className="partner-logo-item text-center">
                <img src="https://www.logodesign.net/logo/abstract-hands-around-the-star-603ld.png?nwm=1&nws=1&industry=organization&sf=&txt_keyword=All" 
                     alt="Tanzania Forest Services" 
                     />
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4 mb-md-0">
              <div className="partner-logo-item text-center">
                <img src="https://www.logodesign.net/logo/abstract-hands-around-the-star-603ld.png?nwm=1&nws=1&industry=organization&sf=&txt_keyword=All" 
                     alt="President's Office - Regional Administration and Local Government" 
                    />
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4 mb-md-0">
              <div className="partner-logo-item text-center">
                <img src="https://www.logodesign.net/logo/abstract-hands-around-the-star-603ld.png?nwm=1&nws=1&industry=organization&sf=&txt_keyword=All" 
                     alt="Finnish Government" 
                     />
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="partner-logo-item text-center">
                <img src="https://www.logodesign.net/logo/abstract-hands-around-the-star-603ld.png?nwm=1&nws=1&industry=organization&sf=&txt_keyword=All" 
                     alt="World Agroforestry Centre" 
                     />
              </div>
            </div>
          </div>
        </div>
      </section> */}
    
    </div>  
    </Layout>
  );
};

export default Partners;