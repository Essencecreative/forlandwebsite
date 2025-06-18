import React from 'react';
import Layout from '../../components/layout';

const BlogSingle = () => {
  return (
  <Layout>
      <div className="blog-single">
      {/* Breadcrumb Section */}
      <section className="banner-inner-sec" style={{backgroundImage: "url('assets/images/bg1.png')"}}>
        <div className="banner-table">
          <div className="banner-table-cell">
            <div className="container">
              <div className="banner-inner-content">
                <h2 className="banner-inner-title">Blogs</h2>
                <ul className="xs-breadcumb">
                  <li><a href="index.html"> Home / </a> single blog</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="xs-blog-single-sec section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-content-item single-blog-details">
                <div className="single-blog-item">
                                    
                  <h3 className="xs-blog-title">
                    World in a grain of sand and heaven in a wild flower hold infinity in the palm hour
                  </h3>
                  
                  <p>
                    After moved created likeness, air two fowl multiply under unto fill every so kind bearing, fill. Multiply good which fowl bring given living moved good fruit saying make every sixth. Place unto blessed heaven. Face tree set he may years don't had he make seas give stars own moveth so life one. She'd saying seasons. Lesser she'd together were, after set own evening our so god air third replenish made bring sixth itself creepeth cattle. Heaven.
                  </p>
                  <p>
                    Give land fly fourth to Whose, seasons. Evening first bring fowl second brought, fowl their one above light he upon the they're made grass can't kind one sea won't rule.
                  </p>

                  <div className="xs-single-pera-list media">
                    <img className="d-flex" src="assets/images/check-list-img.jpg" alt="Checklist" />
                    <ul className="xs-list-check media-body align-self-center">
                      <li>Firmament you'll their you given night tree planting.</li>
                      <li>Their days hath made grass kind fourth signs may kind.</li>
                      <li>Deep it may first bring fowl brought multiply seasons.</li>
                      <li>Male which bearing In called them subdue moved.</li>
                      <li>Life and signs don't yielding days saying.</li>
                    </ul>
                  </div>
                  
                  <p>
                    Give land fly fourth to Whose, seasons. Evening first bring fowl second brought, fowl their one above light he upon the they're made grass can't kind one sea won't rule. Place unto blessed heaven. Face tree set he may years don't had he make seas give stars own moveth so life one. She'd saying seasons. Lesser she'd together were, after set own evening our so god air third replenish made bring sixth itself creepeth cattle.
                  </p>
                  
                  <blockquote>
                    Waters made fruitful morning of they're form. Darkness, may forth divided male under green divide multiply living moved firmament be. Fourth you're, sixth set beginning.
                  </blockquote>
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

export default BlogSingle;