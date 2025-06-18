import React from 'react';
import Layout from '../../components/layout';
import { Helmet } from 'react-helmet-async';

const Wherewework = () => {
  return (
    <Layout>
        <div className="about-us-page">
        <Helmet>
        <title>Where We Work - FORLAND</title>
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
                <h2 className="banner-inner-title">Where We Work</h2>
                <ul className="xs-breadcumb">
                  <li><a href="/"> Home / </a> Where We Work</li>
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
                <img src="assets/images/map.png" alt="Our company" />
              </div>
            </div>
            
            <div className="col-lg-7 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="400ms">
              <div className="about-inner-content">
                
                <div className="single-about-content">
                  <h3>Demography Coverage</h3>
                  <p style={{textAlign: "justify"}}>
                  The Project area is in the Southern part of Tanzania with the total area is 145,000 km2, i.e.almost half of the size of Finland. The total population of the area, including the urban centres of Songea and Njombe, was 3,2 million inhabitants in 2016. In Tanzanian standards the area is sparsely populated, only 22 inhabitants/ km2.
                  </p>
                </div>
                
                <div className="single-about-content">
                  <h3>Geographical Coverage (Map Photo: Project Document - Figure 4, page 48)</h3>
                  <p style={{textAlign: "justify"}}>
                  As the Project intends to consolidate the work of FORVAC and PFP2, geographically it will be
operating in their present working districts, which include:
                  </p>
                  <p style={{textAlign: "justify"}}>
                  • Njombe Region; Njombe DC, Njombe TC, Makambako DC, Makete DC, Ludewa DC and
Wanging’ombe DC
                  </p>
                  <p style={{textAlign: "justify"}}>
                  • Iringa Region; Kilolo DC, Mufindi DC, and Mafinga TC
                  </p>
                  <p style={{textAlign: "justify"}}>
                  • Lindi Region; Liwale DC, Nachingwea DC, and Ruangwa DC
                  </p>
                  <p style={{textAlign: "justify"}}>
                  • Ruvuma Region; Madaba DC, Namtumbo DC, Tunduru DC, Songea DC, Mbinga DC, Nyasa DC and Songea TC
                  </p>
                </div>
                
                

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Ready to Contact Section */}
      <section className="about-inner section-padding" style={{backgroundColor: "#eeeeee"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="300ms">
              <div className="about-inner-img">
                <img src="assets/images/bg4.png" alt="Our company" />
              </div>
            </div>
            
            <div className="col-lg-7 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="400ms">
              <div className="about-inner-content">
                <h2 className="column-title2 column-title">Project Operations</h2>
                
                <div className="single-about-content">
                  <p style={{textAlign: "justify"}}>
                 The Project implementation will be based on sustainable management and protection of Miombo forests and tree plantations. For the preparation of the Village Land Use Plans (VLUP), the agriculture and grazing land (including their potential or likely expansion) will be an important consideration to reach a consensus on the efficient use of land. However, the Project will not engage in further development of areas dedicated in VLUPs for other purposes than forestry. The Project duration is four years (2024-2028) with possibility of extension. The Project’s main office is planned to be in Iringa - Mafinga District which is a central location in the Project area.
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

export default Wherewework;