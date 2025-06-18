import React from 'react';
import Layout from '../../components/layout';
import { Helmet } from 'react-helmet-async';

const Beneficiaries = () => {
  return (
    <Layout>
        <div className="about-us-page">
        <Helmet>
        <title>Our Beneficiaries - FORLAND</title>
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
                <h2 className="banner-inner-title">Our Beneficiaries</h2>
                <ul className="xs-breadcumb">
                  <li><a href="/"> Home / </a> Our Beneficiaries</li>
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
                <img src="assets/images/bg2.png" alt="Our company" />
              </div>
            </div>
            
            <div className="col-lg-7 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="400ms">
              <div className="about-inner-content">
                <h2 className="column-title2 column-title">Project Beneficiaries</h2>
                
                <div className="single-about-content">
                  <p style={{textAlign: "justify", lineHeight: "2"}}>
                  Among the beneficiaries, there are people whose livelihoods depend on plantations and forests and who are actively involved in the work in forests. The MSMEs involved in the forestry and wood industry sector form an important group of beneficiaries. They are involved in logging, transport and processing of forest products, including sawmilling. In addition, labourers and employees of forest based MSMEs are included. There are also the traditional bee-keepers and fuelwood, mushroom, herbs and other non-timber forest products (NTPF) collectors. These people, or groups of people, have their ancient rights to access to the village forests. On the other hand, they have the responsibility to report on any encroachment to the forest. Some villagers, like the members of VNRCs, may have part-time engagement in management and patrolling of Village Land Forest Reserves.

                  </p>
                </div>             

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-inner section-padding" style={{backgroundColor: "#eeeeee"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="300ms">
              <div className="about-inner-img">
                <img src="assets/images/bg2.png" alt="Our company" />
              </div>
            </div>
            <div className="col-lg-7 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="400ms">
              <div className="about-inner-content">
                <h2 className="column-title2 column-title">Estimated Beneficiaries Reach </h2>
                
                <div className="single-about-content">
                  <p style={{textAlign: "justify", lineHeight: "2"}}>
                  These active beneficiaries are typically in their working age; the youth and elderly have very few
representatives in this group. In addition, the representation of women is not up to 50%, but they are present. There is a quota stipulated by GoT of minimum 33% in VNRC positions for women. There are very few persons with disabilities among active beneficiaries, but some other persons in vulnerable positions (like female widows) may have their engagement especially in collecting fuelwood and NTFPs. The number of beneficiaries is well over half a million. Such a big group makes a good sample of Tanzanian society with many of its groups present. As the Project works in remote areas of Tanzania, some groups like the youth and the poor will be over represented compared to the national averages. On average, each villager owns about 1.5 hectares of forest, which is a good piece of land.
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

export default Beneficiaries;