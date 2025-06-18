import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router'; // Correct import for routing
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch('https://forlandservice.onrender.com/team');
        if (!response.ok) {
          throw new Error('Failed to fetch team data');
        }
        const data = await response.json();
        setTeamMembers(data);
      } catch (err) {
        setError('Error loading team members');
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  const managementTeam = teamMembers.filter(member => member.team === 'Management Team');
  const expertTeam = teamMembers.filter(member => member.team === 'Expert');

  const TeamMemberCard = ({ member }) => (
    <div className="col-md-6">
      <Link to={`/teamdetails/${member._id}`} className="text-decoration-none">
        <div className="single-team-item">
          <img src={member.photo || 'assets/images/team/profile.png'} alt={member.username} />
          <div className="single-team-cont">
            <h3>{member.username}</h3>
            <p>{member.jobTitle}</p>
          </div>
        </div>
      </Link>
    </div>
  );

  const ExpertCard = ({ member }) => (
    <div className="col-lg-3 col-sm-6">
      <Link to={`/teamdetails/${member._id}`} className="text-decoration-none">
        <div className="single-team">
          <div className="team-img">
            <img src={member.photo || 'assets/images/team/profile.png'} alt={member.username} />
            <div className="team-social">
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-google-plus"></i></a>
              <a href="#"><i className="fa fa-linkedin"></i></a>
            </div>
          </div>
          <h3>{member.username}</h3>
          <p>{member.jobTitle}</p>
        </div>
      </Link>
    </div>
  );

  const SkeletonTeamCard = () => (
    <div className="col-md-6 mb-4">
      <div className="single-team-item">
        <Skeleton height={200} />
        <div className="single-team-cont mt-3">
          <Skeleton width="60%" height={20} />
          <Skeleton width="40%" height={15} style={{ marginTop: 8 }} />
        </div>
      </div>
    </div>
  );

  const SkeletonExpertCard = () => (
    <div className="col-lg-3 col-sm-6 mb-4">
      <div className="single-team">
        <Skeleton height={200} />
        <div className="mt-3">
          <Skeleton width="70%" height={18} />
          <Skeleton width="50%" height={14} style={{ marginTop: 8 }} />
        </div>
      </div>
    </div>
  );

  if (error) return (
    <Layout>
      <div className="text-center my-5">
        <h4>{error}</h4>
        <p>Please refresh the page or try again later.</p>
      </div>
    </Layout>
  );

  return (
    <Layout>
      <Helmet>
        <title>Team - FORLAND</title>
      </Helmet>

      <div className="about-us-page">

        {/* Breadcrumb Section */}
        <section className="banner-inner-sec" style={{ backgroundImage: "url('assets/images/bg1.png')" }}>
          <div className="banner-table">
            <div className="banner-table-cell">
              <div className="container">
                <div className="banner-inner-content">
                  <h2 className="banner-inner-title">Management Team</h2>
                  <ul className="xs-breadcumb">
                    <li><a href="/"> Home / </a>Management Team</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Management Team Section */}
        <section className="team-v1-sec section-padding section-bg-v2">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 align-self-center">
                <div className="single-team-content">
                  <h2 className="column-title column-title2">Project<br /> Management Team</h2>
                  <p>
                    The team is responsible for the Project implementation. It ensures that the Project is smoothly
                    implemented, outputs achieved, and funds managed efficiently and effectively according to the Project Document.
                  </p>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  {loading
                    ? Array.from({ length: 4 }).map((_, i) => <SkeletonTeamCard key={i} />)
                    : managementTeam.map(member => <TeamMemberCard key={member._id} member={member} />)
                  }
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expert Section */}
        <section className="team-sec section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-item section-title-v2-item">
                  <h2 className="section-title">
                    <span className="xs-title">Our experts</span>
                    Meet Our Experts
                  </h2>
                  <h3 className="hidden-title">experts</h3>
                </div>
              </div>
            </div>

            <div className="row">
              {loading
                ? Array.from({ length: 8 }).map((_, i) => <SkeletonExpertCard key={i} />)
                : expertTeam.map(member => <ExpertCard key={member._id} member={member} />)
              }
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default Team;
