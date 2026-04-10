import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Teamdetails = () => {
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const response = await fetch(`https://forlandservice.onrender.com/team/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch team member data');
        }
        const data = await response.json();
        setMember(data);
      } catch (err) {
        setError('Error loading team member details');
      } finally {
        setLoading(false);
      }
    };

    fetchMember();
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="about-us-page">
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

          <section className="team-v1-sec section-padding section-bg-v2">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-sm-12">
                  <Skeleton height={250} />
                  <Skeleton height={20} width={120} style={{ marginTop: 10 }} />
                  <Skeleton height={15} width={100} style={{ marginTop: 5 }} />
                </div>

                <div className="col-lg-9 col-sm-12">
                  <Skeleton count={5} height={15} style={{ marginBottom: 10 }} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
  }

  if (error || !member) {
    return (
      <Layout>
        <div className="text-center my-5">
          <h4>{error || 'Team member not found.'}</h4>
          <p>Please try again later.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="about-us-page">
        <Helmet>
          <title>{member.username} - FORLAND</title>
        </Helmet>

        {/* Breadcrumb Section */}
        <section
          className="banner-inner-sec"
          style={{ backgroundImage: "url('assets/images/bg1.png')" }}
        >
          <div className="banner-table">
            <div className="banner-table-cell">
              <div className="container">
                <div className="banner-inner-content">
                  <h2 className="banner-inner-title">{member.username}</h2>
                  <ul className="xs-breadcumb">
                    <li><a href="/">Home / </a> {member.username}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Member Details */}
        <section className="team-v1-sec section-padding section-bg-v2">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-12">
                <div className="team-sec">
                  <div className="single-team">
                    <div className="team-img">
                      <img
                        src={member.photo || 'assets/images/team/profile.png'}
                        alt={member.username}
                      />
                    </div>
                    <h3>{member.username}</h3>
                    <p>{member.jobTitle}</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-9 col-sm-12">
                <div className="single-team-content">
                  <p>{member.biography || 'No biography available.'}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Teamdetails;
