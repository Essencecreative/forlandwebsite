import React, { useState } from 'react';
import Layout from '../../components/layout';
import BannerHeader from '../../components/BannerHeader';
import { Helmet } from 'react-helmet-async';

// Dictionary for Localization
const translations = {
  en: {
    pageTitle: "Get in touch",
    subtitle: "Have a question or need assistance? Send us a message and we'll get back to you shortly.",
    namePlaceholder: "Your full name *",
    orgPlaceholder: "Your organization (optional)",
    regionPlaceholder: "Region *",
    genderLabel: "Gender *",
    agePlaceholder: "Age *",
    emailPlaceholder: "Email or phone number *",
    categoryLabel: "Category *",
    categoryFeedback: "Feedback",
    categoryTech: "Technical Issue",
    categoryGeneral: "General Inquiry",
    subjectPlaceholder: "Subject *",
    messagePlaceholder: "Type your message here... *",
    btnSubmit: "SEND MESSAGE",
    btnLoading: "SENDING...",
    successMsg: "Thank you! Your message has been sent successfully.",
    errorMsg: "Oops! Something went wrong. Please try again.",
    officeTitle: "Visit our office",
    mailTitle: "Mail us",
    callTitle: "Call us"
  },
  sw: {
    pageTitle: "Wasiliana nasi",
    subtitle: "Una swali au unahitaji msaada? Tutumie ujumbe hapa chini.",
    namePlaceholder: "Jina lako kamili *",
    orgPlaceholder: "Shirika lako (sio lazima)",
    regionPlaceholder: "Mkoa *",
    genderLabel: "Jinsia *",
    agePlaceholder: "Umri *",
    emailPlaceholder: "Barua pepe au namba ya simu *",
    categoryLabel: "Kategoria *",
    categoryFeedback: "Maoni (Feedback)",
    categoryTech: "Tatizo la Kiufundi",
    categoryGeneral: "Swali la Kawaida",
    subjectPlaceholder: "Kichwa cha habari *",
    messagePlaceholder: "Andika ujumbe wako hapa... *",
    btnSubmit: "TUMA UJUMBE",
    btnLoading: "INATUMA...",
    successMsg: "Asante! Ujumbe wako umetumwa kikamilifu.",
    errorMsg: "Kuna tatizo limetokea. Tafadhali jaribu tena.",
    officeTitle: "Tembelea ofisi yetu",
    mailTitle: "Tutumie barua pepe",
    callTitle: "Tupigie simu"
  }
};

const ContactUs = () => {
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    region: '',
    gender: '', // Updated
    age: '',
    contactInformation: '',
    category: '', // Updated
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch('http://localhost:5050/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      // Clear form except default selections
      setFormData({
        name: '',
        organization: '',
        region: '',
        gender: '', // Updated
        age: '',
        contactInformation: '',
        category: '', // Updated
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error(error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact Us - FORLAND</title>
      </Helmet>
      
      <div className="contact-us-page">
        {/* Breadcrumb Banner Section */}
        <BannerHeader title="Contact us" breadcrumb="Pages / contact" />

        {/* Get in Touch Section */}
        <section className="xs-get-in-touch" style={{ paddingBottom: '30px' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="get-in-touch-cont text-center">
                  {/* Language Toggle */}
                  <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
                    <button 
                      onClick={() => setLang('sw')} 
                      style={{ padding: '5px 15px', border: '1px solid #ccc', background: lang === 'sw' ? '#00e676' : '#fff', color: lang === 'sw' ? '#fff' : '#333', borderRadius: '4px', cursor: 'pointer' }}
                    >
                      Swahili
                    </button>
                    <button 
                      onClick={() => setLang('en')} 
                      style={{ padding: '5px 15px', border: '1px solid #ccc', background: lang === 'en' ? '#00e676' : '#fff', color: lang === 'en' ? '#fff' : '#333', borderRadius: '4px', cursor: 'pointer' }}
                    >
                      English
                    </button>
                  </div>

                  <h3><span className="light-text">{t.pageTitle.split(' ')[0]}</span> {t.pageTitle.substring(t.pageTitle.indexOf(' ') + 1)}</h3>
                  <p>{t.subtitle}</p>
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
                  {status === 'success' && (
                    <div style={{ padding: '15px', background: '#d4edda', color: '#155724', borderRadius: '5px', marginBottom: '20px' }}>
                      {t.successMsg}
                    </div>
                  )}
                  {status === 'error' && (
                    <div style={{ padding: '15px', background: '#f8d7da', color: '#721c24', borderRadius: '5px', marginBottom: '20px' }}>
                      {t.errorMsg}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} id="xs-contact-form" className="xs-form">
                    <div className="row">
                      <div className="col-lg-6">
                        <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} placeholder={t.namePlaceholder} required />
                      </div>
                      <div className="col-lg-6">
                        <input type="text" className="form-control" name="contactInformation" value={formData.contactInformation} onChange={handleChange} placeholder={t.emailPlaceholder} required />
                      </div>
                    </div>
                    
                    <div className="row">
                       <div className="col-lg-6">
                        <input type="text" className="form-control" name="organization" value={formData.organization} onChange={handleChange} placeholder={t.orgPlaceholder} />
                      </div>
                      <div className="col-lg-6">
                        <input type="text" className="form-control" name="region" value={formData.region} onChange={handleChange} placeholder={t.regionPlaceholder} required />
                      </div>
                    </div>

                    <div className="row" style={{ marginBottom: '20px' }}>
                      <div className="col-lg-6">
                        <select className="form-control" name="gender" value={formData.gender} onChange={handleChange} style={{ height: '60px', color: formData.gender === '' ? '#a9a9a9' : '#495057' }} required>
                          <option value="" disabled>{t.genderLabel}</option>
                          <option value="Male">Male / Mwanaume</option>
                          <option value="Female">Female / Mwanamke</option>
                          <option value="Other">Other / Nyingine</option>
                        </select>
                      </div>
                      <div className="col-lg-6">
                         <input type="number" className="form-control" name="age" value={formData.age} onChange={handleChange} placeholder={t.agePlaceholder} min="10" max="100" required />
                      </div>
                    </div>

                    <div className="row">
                       <div className="col-lg-6">
                        <select className="form-control" name="category" value={formData.category} onChange={handleChange} style={{ height: '60px', color: formData.category === '' ? '#a9a9a9' : '#495057' }} required>
                          <option value="" disabled>{t.categoryLabel}</option>
                          <option value="General Inquiry">{t.categoryGeneral}</option>
                          <option value="Feedback">{t.categoryFeedback}</option>
                          <option value="Technical Issue">{t.categoryTech}</option>
                        </select>
                       </div>
                       <div className="col-lg-6">
                          <input type="text" className="form-control" name="subject" value={formData.subject} onChange={handleChange} placeholder={t.subjectPlaceholder} required />
                       </div>
                    </div>

                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder={t.messagePlaceholder} className="form-control message-box" cols="30" rows="6" required></textarea>

                    <div className="xs-btn-wraper">
                      <button type="submit" className="xs-btn" disabled={loading} style={{ opacity: loading ? 0.7 : 1 }}>
                        {loading ? t.btnLoading : t.btnSubmit}
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
                      height={730}
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
              <div className="col-lg-4 col-md-6" style={{ display: 'flex' }}>
                <div className="contact-info-group" style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                  <i className="icon-address"></i>
                  <h4>{t.officeTitle}</h4>
                  <div style={{ flex: 1 }}>
                    <span>Forestry and Wood Industries Training Centre</span>
                    <span className="text-color">Kinyanambo, Mafinga, Tanzania.</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6" style={{ display: 'flex' }}>
                <div className="contact-info-group" style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                  <i className="icon-mail"></i>
                  <h4>{t.mailTitle}</h4>
                  <div style={{ flex: 1 }}>
                    <a href="mailto:info@forland.or.tz">info@forland.or.tz</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6" style={{ display: 'flex' }}>
                <div className="contact-info-group" style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                  <i className="icon-call"></i>
                  <h4>{t.callTitle}</h4>
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