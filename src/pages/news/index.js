import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import BannerHeader from '../../components/BannerHeader';
import { Helmet } from 'react-helmet-async';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const News = ({
  pageTitle = "General News",
  metaTitle = "General News - FORLAND",
  bannerImage = "assets/images/bg1.png",
  to = "/news",
  category = "all",
}) => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    totalCount: 0,
    totalPages: 1,
    currentPage: 1,
  });

  const fetchNews = async (page = 1) => {
    setLoading(true);
    try {
      const queryCategory = category && category !== 'all' ? `&category=${category}` : '';
      const res = await fetch(`http://localhost:5050/news?page=${page}${queryCategory}`);
      const data = await res.json();

      setNewsItems(data.news);
      setPagination({
        totalCount: data.totalCount,
        totalPages: data.totalPages,
        currentPage: data.currentPage,
      });
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handlePageChange = (page) => {
    if (page !== pagination.currentPage && page >= 1 && page <= pagination.totalPages) {
      fetchNews(page);
    }
  };

  const SkeletonCard = () => (
    <div className="col-md-4 mb-4">
      <div className="single-latest-news">
        <Skeleton height={220} />
        <div style={{ marginTop: 10 }}>
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
        {/* Banner */}
        <BannerHeader title={pageTitle} breadcrumb={pageTitle} fallbackImage={bannerImage} />

        {/* News List */}
        <section className="xs-blog-sec latest-news-sec section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="blog-content-item">
                  <div className="row">
                    {loading ? (
                      Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
                    ) : newsItems.length === 0 ? (
                      <div className="text-center w-100 my-5">
                        <img
                          src="https://static.vecteezy.com/system/resources/previews/027/476/257/non_2x/newspaper-icon-journal-article-news-newsletter-daily-paper-magazine-publication-symbol-sign-free-vector.jpg"
                          alt="No News"
                          style={{ maxWidth: 300, marginBottom: 20 }}
                        />
                        <h4>No record found in this category.</h4>
                        <p>Please try a different category or check back later.</p>
                      </div>
                    ) : (
                      newsItems.map((item, index) => (
                        <div
                          key={item._id}
                          className="col-md-4 wow fadeInUp"
                          style={{ marginBottom: 40 }}
                          data-wow-delay={`${(index % 3) * 100 + 300}ms`}
                        >
                          <div className="single-latest-news">
                            <div className="latest-news-img">
                              <a href={`${to}/${item._id}`}>
                                <img
                                  src={item.photo || "https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder-800x423.gif"}
                                  alt={item.title}
                                />
                              </a>
                            </div>
                            <div className="single-news-content">
                              <span className="date-info">
                                {new Date(item.publicationDate || item.createdAt).toDateString()}
                              </span>
                              <h3 className="xs-post-title">
                                <a href={`${to}/${item._id}`}>{item.title}</a>
                              </h3>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Pagination */}
                  {!loading && newsItems.length > 0 && (
                    <ul className="pagination justify-content-center" style={{ paddingTop: 50 }}>
                      <li className={`page-item ${pagination.currentPage === 1 ? 'disabled' : ''}`}>
                        <a href="#" onClick={() => handlePageChange(pagination.currentPage - 1)}>
                          <i className="fa fa-angle-left"></i>
                        </a>
                      </li>
                      {[...Array(pagination.totalPages)].map((_, i) => {
                        const pageNum = i + 1;
                        return (
                          <li
                            key={pageNum}
                            className={`page-item ${pagination.currentPage === pageNum ? 'active' : ''}`}
                          >
                            <a href="#" onClick={() => handlePageChange(pageNum)}>
                              {pageNum}
                            </a>
                          </li>
                        );
                      })}
                      <li className={`page-item ${pagination.currentPage === pagination.totalPages ? 'disabled' : ''}`}>
                        <a href="#" onClick={() => handlePageChange(pagination.currentPage + 1)}>
                          <i className="fa fa-angle-right"></i>
                        </a>
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

export default News;
