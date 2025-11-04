import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout';

const ProjectGallery = () => {
  const [galleries, setGalleries] = useState([]);
  const [gridItems, setGridItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [categories, setCategories] = useState([]);

  // Fetch galleries
  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        const res = await fetch('https://forlandservice.onrender.com/gallery');
        const data = await res.json();
        setGalleries(data.galleries || []);
        
        // Extract unique categories
        const cats = [...new Set(data.galleries.map(g => g.category || g.title))];
        setCategories(cats);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchGalleries();
  }, []);

  // Flatten photos into grid items
  useEffect(() => {
    let items = galleries.flatMap(gallery =>
      gallery.photos.map((url, idx) => ({
        id: `${gallery._id}-${idx}`,
        url,
        title: gallery.title,
        category: gallery.category || gallery.title,
        desc: gallery.description || '',
        date: new Date(gallery.uploadedAt).toLocaleDateString(),
      }))
    );

    // Filter by category
    if (activeCategory !== 'all') {
      items = items.filter(item => item.category === activeCategory);
    }

    setGridItems(items);
  }, [galleries, activeCategory]);

  const masonryStyles = `
    .masonry-grid {
      display: flex;
      margin-left: -15px;
      width: auto;
    }
    .masonry-column {
      padding-left: 15px;
      background-clip: padding-box;
    }
    .gallery-item {
      margin-bottom: 15px;
      break-inside: avoid;
      position: relative;
      overflow: hidden;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .gallery-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    }
    .gallery-item img {
      width: 100%;
      min-height: 300px;
      height: auto;
      display: block;
      border-radius: 8px;
      object-fit: cover;
    }
    .gallery-item-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.6);
      opacity: 0;
      transition: opacity 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
    }
    .gallery-item:hover .gallery-item-overlay {
      opacity: 1;
    }
    .gallery-item-overlay i {
      color: white;
      font-size: 32px;
    }
    .category-tabs-wrapper {
      display: flex;
      justify-content: center;
      margin-bottom: 50px;
    }
    .category-tabs {
      display: inline-flex;
      flex-wrap: wrap;
      gap: 30px;
      border-bottom: 2px solid #e0e0e0;
      padding-bottom: 0;
    }
    .category-tab {
      padding: 15px 8px;
      background: transparent;
      border: none;
      border-bottom: 3px solid transparent;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: 500;
      font-size: 16px;
      color: #666;
      position: relative;
      margin-bottom: -2px;
      outline: none;
    }
    .category-tab:hover {
      color: #008435;
    }
    .category-tab.active {
      color: #008435;
      border-bottom-color: #008435;
    }
    .skeleton-loader {
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200% 100%;
      animation: loading 1.5s infinite;
      border-radius: 8px;
      min-height: 300px;
    }
    @keyframes loading {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    .load-more-btn {
      background-color: #008435;
      border-color: #008435;
      border-radius: 50px;
      padding: 12px 50px;
      font-weight: 600;
      transition: all 0.3s ease;
    }
    .load-more-btn:hover {
      background-color: #006629;
      border-color: #006629;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,132,53,0.3);
    }
  `;

  // Masonry layout component
  const MasonryGrid = ({ children, columnCount = 4 }) => {
    const columns = Array.from({ length: columnCount }, () => []);
    
    React.Children.forEach(children, (child, index) => {
      columns[index % columnCount].push(child);
    });

    return (
      <div className="masonry-grid">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="masonry-column" style={{ flex: 1 }}>
            {column}
          </div>
        ))}
      </div>
    );
  };

  return (
    <Layout>
      <style>{masonryStyles}</style>
      
      {/* Breadcrumb */}
      <section
        className="banner-inner-sec"
        style={{ backgroundImage: "url('assets/images/bg1.png')" }}
      >
        <div className="banner-table">
          <div className="banner-table-cell">
            <div className="container">
              <div className="banner-inner-content">
                <h2 className="banner-inner-title">Gallery</h2>
                <ul className="xs-breadcumb">
                  <li>
                    <a href="/">Home /</a> <a href="/gallery">Pages /</a> gallery
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-5">
        <div className="container">
          {/* Category Tabs */}
          <div className="category-tabs-wrapper">
            <div className="category-tabs">
              <button
                className={`category-tab ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry Grid */}
          {loading ? (
            <MasonryGrid columnCount={4}>
              {[...Array(12)].map((_, i) => (
                <div key={i} className="gallery-item">
                  <div className="skeleton-loader"></div>
                </div>
              ))}
            </MasonryGrid>
          ) : gridItems.length === 0 ? (
            <div className="text-center py-5">
              <p className="text-muted">No photos found in this category</p>
            </div>
          ) : (
            <MasonryGrid columnCount={4}>
              {gridItems.map((item) => (
                <div
                  key={item.id}
                  className="gallery-item"
                  data-toggle="modal"
                  data-target="#photoModal"
                  onClick={() => setSelectedPhoto(item)}
                >
                  <img src={item.url} alt={item.title} />
                  <div className="gallery-item-overlay">
                    <i className="fas fa-search-plus"></i>
                  </div>
                </div>
              ))}
            </MasonryGrid>
          )}

          {/* Load More */}
          {!loading && gridItems.length > 0 && (
            <div className="text-center mt-5">
              <button className="btn btn-primary btn-lg load-more-btn">
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bootstrap Modal */}
      {selectedPhoto && (
        <div
          className="modal fade"
          id="photoModal"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div className="modal-content" style={{ borderRadius: '8px', overflow: 'hidden' }}>
              <div className="modal-body p-0">
                <button
                  type="button"
                  className="close position-absolute"
                  data-dismiss="modal"
                  aria-label="Close"
                  style={{ right: '15px', top: '10px', zIndex: 1, color: 'white', textShadow: '0 0 5px rgba(0,0,0,0.5)', fontSize: '2rem' }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <img
                  src={selectedPhoto.url}
                  className="w-100"
                  alt={selectedPhoto.title}
                  style={{ maxHeight: '80vh', objectFit: 'contain', background: '#000' }}
                />
              </div>
              <div className="modal-footer" style={{ background: '#f8f9fa' }}>
                <div className="w-100">
                  <h5 className="mb-2">{selectedPhoto.title}</h5>
                  <p className="text-muted mb-2">{selectedPhoto.desc}</p>
                  <small className="text-muted">{selectedPhoto.date}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ProjectGallery;