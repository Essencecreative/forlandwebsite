import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import BannerHeader from '../../components/BannerHeader';
import { Helmet } from 'react-helmet-async';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Install if not yet: npm install react-loading-skeleton

const Publications = ({
  title = "PFP Technical Reports",
  bannerImage = "assets/images/bg1.png",
  breadcrumb = "PFP Technical Reports",
  metaTitle = "PFP Technical Reports - FORLAND",
  to = "/pfp-technical-reports",
  category = "all"
}) => {
  const [publications, setPublications] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchPublications = async (page = 1) => {
    setLoading(true);
    try {
      const queryCategory = category && category !== 'all' ? `&category=${category}` : '';
      const res = await fetch(`http://localhost:5050/publications?page=${page}${queryCategory}`);
      const data = await res.json();
      setPublications(data.publications);
      setCurrentPage(data.currentPage);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.error("Failed to fetch publications:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  useEffect(() => {
    fetchPublications(currentPage);
  }, [currentPage, category]);

  const SkeletonCard = () => (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className="single-blog-item">
        <Skeleton height={220} />
        <div style={{ marginTop: 15 }}>
          <Skeleton width="60%" height={20} />
          <Skeleton width="90%" height={15} style={{ marginTop: 8 }} />
          <Skeleton width="80%" height={15} style={{ marginTop: 6 }} />
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      <Helmet>
        <title>{metaTitle}</title>
      </Helmet>

      <div className="publications-page">
        <BannerHeader title={title} breadcrumb={breadcrumb} fallbackImage={bannerImage} />

        <section className="xs-blog-sec section-padding">
          <div className="container-fluid" style={{ paddingLeft: 80, paddingRight: 80 }}>
            <div className="row">
              <div className="col-lg-12">
                <div className="blog-content-item">
                  <div className="row">
                    {loading ? (
                      <>
                        {Array.from({ length: 6 }).map((_, i) => (
                          <SkeletonCard key={i} />
                        ))}
                      </>
                    ) : publications.length === 0 ? (
                      <div className="text-center w-100 my-5">
                        <img
                          src="https://static.vecteezy.com/system/resources/previews/027/476/257/non_2x/newspaper-icon-journal-article-news-newsletter-daily-paper-magazine-publication-symbol-sign-free-vector.jpg"
                          alt="No Publications"
                          style={{ maxWidth: 300, marginBottom: 20 }}
                        />
                        <h4>No publications found in this category.</h4>
                        <p>Please try a different category or check back later.</p>
                      </div>
                    ) : (
                      publications.map((pub) => (
                        <div key={pub._id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                          <div className="single-blog-item">
                            <div className="blog-post-img">
                              <div className="blog-date-info">
                                <label>{new Date(pub.publicationDate || pub.createdAt).getDate()}</label>
                                <span>{new Date(pub.publicationDate || pub.createdAt).toLocaleString('default', { month: 'short' })}</span>
                              </div>
                              <img
                                src={pub?.photo || 'https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder-800x423.gif'}
                                alt={pub.title}
                              />
                            </div>

                            <div className="blog-meta">
                              <ul>
                                <li>
                                  <i className="icon icon-calendar-full"></i>
                                  {new Date(pub.publicationDate || pub.createdAt).toDateString()}
                                </li>
                              </ul>
                            </div>

                            <h3 className="xs-blog-title">
                              <a href={`${to}/${pub._id}`}>{pub.title}</a>
                            </h3>

                            <p>{pub.description}</p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Pagination */}
                  {!loading && publications.length > 0 && (
                    <ul className="pagination justify-content-center mt-4">
                      <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} className="page-link">
                          <i className="fa fa-angle-left"></i>
                        </button>
                      </li>
                      {Array.from({ length: totalPages }).map((_, i) => (
                        <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                          <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
                            {i + 1}
                          </button>
                        </li>
                      ))}
                      <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} className="page-link">
                          <i className="fa fa-angle-right"></i>
                        </button>
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

export default Publications;
