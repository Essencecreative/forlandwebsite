import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Opportunities = ({
  pageTitle = "Opportunities",
  metaTitle = "Opportunities - FORLAND",
  bannerImage = "assets/images/bg1.png",
  breadcrumb = "Opportunities",
  category = "all"
}) => {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        const queryCategory = category && category !== 'all' ? `&category=${category}` : '';
        const res = await axios.get(`https://forlandservice.onrender.com/opportunities?${queryCategory}`);
        setOpportunities(res.data); // Assuming response is array
      } catch (err) {
        console.error('Error fetching opportunities:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOpportunities();
  }, [category]);

  const SkeletonCard = () => (
    <div className="single-blog-item mb-4">
      <Skeleton height={30} width="60%" />
      <Skeleton count={3} style={{ marginTop: 10 }} />
      <div className="read-more-btn" style={{ marginTop: 10 }}>
        <Skeleton height={35} width={120} />
      </div>
    </div>
  );

  return (
    <Layout>
      <Helmet>
        <title>{metaTitle}</title>
      </Helmet>

      <div className="publications-page">
        {/* Banner */}
        <section
          className="banner-inner-sec"
          style={{ backgroundImage: `url('${bannerImage}')` }}
        >
          <div className="banner-table">
            <div className="banner-table-cell">
              <div className="container">
                <div className="banner-inner-content">
                  <h2 className="banner-inner-title">{pageTitle}</h2>
                  <ul className="xs-breadcumb">
                    <li><a href="/"> Home / </a> {breadcrumb}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

<section className="public-notice section-padding bg-light">
  <div className="container">
    <div className="notice-box p-4 p-md-5 shadow rounded bg-white">
      <h3 className="text-danger mb-3">
        <i className="fa fa-exclamation-triangle mr-2"></i> PUBLIC NOTICE
      </h3>

      <div className={`notice-content ${expanded ? 'expanded' : 'collapsed'}`}>
        <h5 className="mb-3 text-dark font-weight-bold">Beware of Recruitment Scams</h5>
        <p className="mb-3">
          It has come to our attention that individuals are fraudulently posing as representatives of <strong>NIRAS</strong> or the <strong>FORLAND Project</strong>, falsely promising employment opportunities in exchange for money.
        </p>
        <p className="mb-3">
          <strong>Please be informed:</strong> NIRAS and FORLAND do <span className="text-danger font-weight-bold">not charge any fees</span> at any stage of the recruitment process.
        </p>
        <p className="mb-3">All official job vacancies are only advertised through the following official channels:</p>
        <ul className="mb-3 pl-4">
          <li>🌐 NIRAS website: <a href="https://www.niras.com/jobs/" target="_blank" rel="noopener noreferrer">https://www.niras.com/jobs/</a></li>
          <li>🌐 FORLAND website: <a href="https://forland.or.tz/job-vacancies" target="_blank" rel="noopener noreferrer">https://forland.or.tz/job-vacancies</a></li>
          <li>🗞️ Recognized local newspapers and platforms as specified in job postings</li>
        </ul>
        <p className="mb-3">
          We strongly advise all applicants to <strong>verify job advertisements</strong> through our official platforms and report any suspicious recruitment activities immediately to:
        </p>
        <ul className="mb-3 pl-4">
          <li>📧 <strong>Email:</strong> <a href="mailto:MORM@niras.com">MORM@niras.com</a></li>
          <li>📞 <strong>Phone:</strong> <a href="tel:+255716797542">+255 716 797 542</a></li>
        </ul>
        <p className="mb-3">
          For recruitment regarding <strong>national staff</strong>, please ensure all communication goes through <strong>Monica William Ramadhani</strong> at <a href="mailto:MORM@niras.com">MORM@niras.com</a>.
        </p>
        <p className="mb-0">
          We are committed to a <strong>transparent and merit-based recruitment process</strong>. Thank you for your vigilance and understanding.
        </p>
        <p className="mt-3 font-italic text-right text-muted">— Issued by: NIRAS & FORLAND Project Management</p>
      </div>

      <div className="text-center mt-3">
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Show Less ▲' : 'Read More ▼'}
        </button>
      </div>
    </div>
  </div>
</section>


        {/* Main Content */}
        <section className="xs-blog-sec section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="blog-content-item">
                  {loading ? (
                    Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
                  ) : opportunities.length === 0 ? (
                    <div className="text-center w-100 my-5">
                      <img
                        src="https://static.vecteezy.com/system/resources/previews/027/476/257/non_2x/newspaper-icon-journal-article-news-newsletter-daily-paper-magazine-publication-symbol-sign-free-vector.jpg"
                        alt="No Publications"
                        style={{ maxWidth: 300, marginBottom: 20 }}
                      />
                      <h4>No record found in this category.</h4>
                      <p>Please try a different category or check back later.</p>
                    </div>
                  ) : (
                    opportunities.map((opportunity) => (
                      <div key={opportunity._id} className="single-blog-item mb-4">
                        <h3 className="xs-blog-title">
                          {opportunity.title}
                        </h3>
                        <p>{opportunity.description}</p>
                        {opportunity.documentUrl && (
                          <div className="read-more-btn" style={{ marginTop: 10 }}>
                            <a
                              style={{ cursor: 'pointer' }}
                              href={opportunity.documentUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="xs-btn sm-btn"
                            >
                              Download Document
                            </a>
                          </div>
                        )}
                      </div>
                    ))
                  )}

                  {/* Pagination */}
                  {!loading && opportunities.length > 0 && (
                    <ul className="pagination justify-content-center mt-4">
                      <li className="page-item disabled">
                        <a href="#"><i className="fa fa-angle-left"></i></a>
                      </li>
                      <li className="page-item active"><a href="#">1</a></li>
                      <li className="page-item"><a href="#">2</a></li>
                      <li className="page-item"><a href="#">3</a></li>
                      <li className="page-item disabled"><a href="#">4</a></li>
                      <li className="page-item">
                        <a href="#"><i className="fa fa-angle-right"></i></a>
                      </li>
                    </ul>
                  )}

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Opportunities;
