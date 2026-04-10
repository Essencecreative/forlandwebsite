import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Layout from '../../components/layout';
import { marked } from 'marked';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const NewsBlog = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(`http://localhost:5050/news/${id}`);
        if (!response.ok) {
          throw new Error('Blog not found');
        }
        const data = await response.json();
        setBlogData(data);
      } catch (err) {
        setError('Failed to fetch news blog');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [id]);

  const renderMarkdownContent = (markdown) => {
    return { __html: marked(markdown) };
  };

  if (loading) {
    return (
      <Layout>
        <div className="blog-single">
          <section className="banner-inner-sec" style={{ backgroundColor: '#eee', height: 300 }}>
            <div className="banner-table">
              <div className="banner-table-cell text-center">
                <div className="container">
                  <Skeleton height={40} width={300} />
                  <Skeleton height={20} width={200} style={{ marginTop: 10 }} />
                </div>
              </div>
            </div>
          </section>

          <section className="xs-blog-single-sec section-padding">
            <div className="container">
              <Skeleton height={400} />
              <Skeleton count={5} style={{ marginTop: 20 }} />
            </div>
          </section>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="text-center my-5">
          <h4>{error}</h4>
          <p>Please try again later.</p>
        </div>
      </Layout>
    );
  }

  if (!blogData) {
    return (
      <Layout>
        <div className="text-center my-5">
          <h4>No News Blog Found</h4>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="blog-single">
        {/* Breadcrumb Section */}
        <section
          className="banner-inner-sec"
          style={{
            backgroundImage: `url(${blogData.photo || 'https://via.placeholder.com/1200x400'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: 300,
          }}
        >
          <div className="banner-table">
            <div className="banner-table-cell text-center">
              <div className="container">
                <div className="banner-inner-content">
                  <h2 className="banner-inner-title">{blogData.title}</h2>
                  <ul className="xs-breadcumb">
                    <li><a href="/">Home / </a> {blogData.title}</li>
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
              <div className={blogData?.documentUrl ? "col-lg-8" : "col-lg-12"}>
                <div className="blog-content-item single-blog-details">
                  <div className="single-blog-item">
                    {/* Render Markdown content */}
                    <div
                      className="blog-content"
                      dangerouslySetInnerHTML={renderMarkdownContent(blogData.contentDescription)}
                    />
                  </div>
                </div>
              </div>
              {blogData?.documentUrl && (
                <div className="col-lg-4">
                  <div className="sidebar-widgets">
                    {/* Download Document Widget */}
                    <div className="widget widget-categories">
                      <h4 className="widget-title">
                        <span className="light-text">Download</span> Document
                      </h4>
                      <div className="mt-3">
                        <a
                          href={blogData.documentUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn"
                          style={{
                            backgroundColor: "#006838",
                            color: "#fff",
                            width: "100%",
                            padding: "10px 0",
                            textAlign: "center",
                            display: "inline-block",
                            textDecoration: "none",
                            borderRadius: "5px",
                          }}
                        >
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default NewsBlog;
