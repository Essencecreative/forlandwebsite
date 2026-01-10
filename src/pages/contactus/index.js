import React from 'react';
import Layout from '../../components/layout';
import BannerHeader from '../../components/BannerHeader';
import { Helmet } from 'react-helmet-async';

const ContactUs = () => {
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
  };

  return (
  <Layout>
      <Helmet>
            <title>Contact Us </title>
            </Helmet>
      <div className="contact-us-page">
      {/* Breadcrumb Banner Section */}
      <BannerHeader title="Contact us" breadcrumb="Pages / contact" />

      {/* Get in Touch Section */}
      <section className="xs-get-in-touch">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="get-in-touch-cont text-center">
                <h3><span className="light-text">Get</span> in touch</h3>
                <p>
                  Pharetra auctor libero suscipit rhoncus vivamus tempor nascetur Nisi platea euismod,<br/> 
                  aliquam ac feugiat donec commodo aenean volutpat
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="xs-contact-sec">
        <div className="container">
          <div className="row">
            {/* Contact Form Column */}
            <div className="col-lg-7">
              <div className="xs-form-group">
                <form onSubmit={handleSubmit} id="xs-contact-form" className="xs-form">
                  <div className="row">
                    <div className="col-lg-6">
                      <input 
                        type="text" 
                        className="form-control" 
                        name="name" 
                        placeholder="Your name"
                        id="xs_contact_name"
                        required
                      />
                    </div>
                    <div className="col-lg-6">
                      <input 
                        type="email" 
                        className="form-control" 
                        name="email" 
                        placeholder="Your email"
                        id="xs_contact_email"
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <input 
                        type="tel" 
                        className="form-control" 
                        name="phone-number"
                        placeholder="Your phone number" 
                        id="xs_contact_phone"
                      />
                    </div>
                    <div className="col-lg-6">
                      <input 
                        type="text" 
                        className="form-control" 
                        name="subject" 
                        placeholder="Subject"
                        id="xs_contact_subject"
                        required
                      />
                    </div>
                  </div>

                  <textarea 
                    name="message" 
                    placeholder="Message" 
                    id="x_contact_message"
                    className="form-control message-box" 
                    cols="30" 
                    rows="10"
                    required
                  ></textarea>

                  <div className="xs-btn-wraper">
                    <button type="submit" className="xs-btn">
                      SEND MESSAGE
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* Map Column */}
            <div className="col-lg-5">
              <div className="contact-map">
                <div style={{width: '100%'}}>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32224.05954799091!2d35.266414120548376!3d-8.261112703790102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1855a75c701e9407%3A0x99b24e00fdcea1c1!2sFWITC!5e0!3m2!1sen!2stz!4v1746612129984!5m2!1sen!2stz"
                    width={100}
                    height={600}
                    title="Our Location"
                    style={{border: 0}}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="xs-contact-infomation xs-contact-info-1">
        <div className="container">
          <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {/* Address Info */}
            <div className="col-lg-4 col-md-6" style={{ display: 'flex' }}>
              <div className="contact-info-group" style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <i className="icon-address"></i>
                <h4>Visit our office</h4>
                <div style={{ flex: 1 }}>
                  <span>Forestry and Wood Industries Training Centre</span>
                  <span className="text-color">Kinyanambo, Mafinga, Tanzania.</span>
                </div>
              </div>
            </div>

            {/* Email Info */}
            <div className="col-lg-4 col-md-6" style={{ display: 'flex' }}>
              <div className="contact-info-group" style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <i className="icon-mail"></i>
                <h4>Mail us</h4>
                <div style={{ flex: 1 }}>
                  <a href="mailto:info@forland.or.tz">info@forland.or.tz</a>
                  {/* <a href="mailto:info@example.com">bdexample@gmail.com</a> */}
                </div>
              </div>
            </div>

            {/* Phone Info */}
            <div className="col-lg-4 col-md-6" style={{ display: 'flex' }}>
              <div className="contact-info-group" style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <i className="icon-call"></i>
                <h4>Call us</h4>
                <div style={{ flex: 1 }}>
                  <span>+255 786 165 173</span>
                  <span className="text-color">(Monday - Friday) at 9.am to 6pm</span>
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

export default ContactUs;