import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import BannerHeader from '../../components/BannerHeader';
import { Helmet } from 'react-helmet-async';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Organization = () => {
  const [structure, setStructure] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrganizationStructure = async () => {
      try {
        const response = await fetch('https://forlandservice.onrender.com/organization-structure/active');
        if (!response.ok) {
          throw new Error('Failed to fetch organization structure');
        }
        const data = await response.json();
        setStructure(data);
      } catch (err) {
        setError('Failed to load organization structure data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrganizationStructure();
  }, []);

  return (
    <Layout>
        <div className="about-us-page">
            <Helmet>
                  <title>Organization - FORLAND</title>
                  </Helmet>
      {/* Breadcrumb Banner Section */}
      <BannerHeader title="Organization Structure" breadcrumb="Organization Structure" />

      {loading ? (
        <>
          {/* Loading Skeleton */}
          <section className="ready-to-contact3 section-padding">
            <div className="container">
              <div className="col-lg-12">
                <div className="ready-to-contact-content" style={{alignItems: 'center'}}>
                  <Skeleton height={40} width={300} />
                  <Skeleton count={3} style={{ marginTop: 20 }} />
                </div>
              </div>
            </div>
          </section>
          <section className="section-padding">
            <div className="container">
              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <Skeleton height={400} width={600} />
                </div>
              </div>
            </div>
          </section>
        </>
      ) : error ? (
        <section className="ready-to-contact3 section-padding">
          <div className="container">
            <div className="col-lg-12">
              <div className="ready-to-contact-content text-center" style={{alignItems: 'center'}}>
                <p style={{color: 'red'}}>{error}</p>
              </div>
            </div>
          </div>
        </section>
      ) : structure ? (
        <>
          {/* Team Section */}
          <section className="ready-to-contact3 section-padding">
            <div className="container">
              <div className="col-lg-12">
                <div className="ready-to-contact-content" style={{alignItems: 'center'}}>
                  <h2 style={{textAlign: 'center'}}>{structure.title}</h2>
                  <p style={{textAlign: 'center'}}>
                    {structure.description}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Image Section */}
          <section className="section-padding">
            <div className="container">
              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <img 
                    src={structure.banner} 
                    alt={structure.title} 
                    style={{
                      objectFit: 'contain',
                      maxWidth: '100%',
                      height: 'auto'
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <section className="ready-to-contact3 section-padding">
          <div className="container">
            <div className="col-lg-12">
              <div className="ready-to-contact-content text-center" style={{alignItems: 'center'}}>
                <p>No organization structure data available</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>  
    </Layout>
  );
};

export default Organization;