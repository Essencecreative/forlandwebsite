import React, { useState, useEffect } from 'react';

const BannerHeader = ({ title, breadcrumb, fallbackImage = 'assets/images/bg1.png' }) => {
  const [bannerImage, setBannerImage] = useState(fallbackImage);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await fetch('http://localhost:5050/banners/active');
        const data = await response.json();

        if (data && data.image) {
          setBannerImage(data.image);
        }
      } catch (error) {
        console.error('Error fetching banner:', error);
        // Keep the fallback image if fetch fails
      } finally {
        setLoading(false);
      }
    };

    fetchBanner();
  }, []);

  return (
    <section
      className="banner-inner-sec"
      style={{backgroundImage: `url('${bannerImage}')`}}
    >
      <div className="banner-table">
        <div className="banner-table-cell">
          <div className="container">
            <div className="banner-inner-content">
              <h2 className="banner-inner-title">{title}</h2>
              <ul className="xs-breadcumb">
                <li><a href="/"> Home / </a> {breadcrumb}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerHeader;
