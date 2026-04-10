import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout';

const ProjectGallery = () => {
  const [galleries, setGalleries] = useState([]);
  const [filteredGalleries, setFilteredGalleries] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [viewMode, setViewMode] = useState('albums'); // 'albums' or 'photos'

  // Fetch galleries
  useEffect(() => {
    const fetchGalleriesAndCategories = async () => {
      try {
        // Fetch galleries
        const galleriesRes = await fetch('http://localhost:5050/gallery?limit=1000');
        const galleriesData = await galleriesRes.json();
        const galleriesArray = galleriesData.galleries || [];
        setGalleries(galleriesArray);
        setFilteredGalleries(galleriesArray);

        // Fetch categories from dedicated endpoint
        const categoriesRes = await fetch('http://localhost:5050/gallery-categories?page=1&limit=50&isActive=true');
        const categoriesData = await categoriesRes.json();
        const categoriesArray = categoriesData.categories || [];
        setCategories(categoriesArray);
        
        console.log('Total galleries fetched:', galleriesArray.length);
        console.log('Total categories fetched:', categoriesArray.length);
      } catch (err) {
        console.error('Error fetching galleries or categories:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchGalleriesAndCategories();
  }, []);

  // Filter galleries by category
  const handleCategoryChange = (categoryId) => {
    console.log('Category changed to:', categoryId);
    console.log('Galleries:', galleries);
    console.log('Categories:', categories);
    setActiveCategory(categoryId);
    if (categoryId === 'all') {
      setFilteredGalleries(galleries);
    } else {
      const filtered = galleries.filter(g => g.category && g.category._id === categoryId);
      console.log('Filtered galleries:', filtered);
      setFilteredGalleries(filtered);
    }
  };

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
    setViewMode('photos');
  };

  const handleBackToAlbums = () => {
    setSelectedAlbum(null);
    setViewMode('albums');
  };

  const styles = `
    .category-filters {
      display: flex;
      justify-content: center;
      gap: 40px;
      column-gap: 40px;
      row-gap: 5px;
      margin-bottom: 60px;
      flex-wrap: wrap;
      padding: 20px 0;
      z-index: 10;
      position: relative;
    }

    .category-tab {
      background: none;
      border: none;
      outline: none;
      font-size: 16px;
      font-weight: 500;
      color: #999;
      letter-spacing: 1px;
      cursor: pointer;
      padding: 10px 0;
      position: relative;
      transition: all 0.3s ease;
      font-family: inherit;
      pointer-events: auto;
      -webkit-user-select: none;
      user-select: none;
      box-shadow: none;
      -webkit-appearance: none;
      appearance: none;
    }

    .category-tab:focus {
      outline: none;
      box-shadow: none;
    }

    .category-tab:active {
      outline: none;
      border: none;
    }

    .category-tab:hover {
      color: #008435;
      border: none;
      outline: none;
    }

    .category-tab.active {
      color: #1a1a1a;
      font-weight: 600;
    }

    .category-tab.active::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background-color: #008435;
      animation: slideIn 0.3s ease;
    }

    @keyframes slideIn {
      from {
        transform: scaleX(0);
      }
      to {
        transform: scaleX(1);
      }
    }

    .albums-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 40px;
      margin-bottom: 50px;
      animation: fadeInGrid 0.5s ease-in;
    }

    @keyframes fadeInGrid {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .album-card {
      position: relative;
      border-radius: 20px;
      overflow: hidden;
      cursor: pointer !important;
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      background: white;
      border: 2px solid #e5e5e5;
      height: 500px;
      display: block;
      animation: fadeInCard 0.4s ease-out;
    }

    @keyframes fadeInCard {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    
    .album-card * {
      pointer-events: none;
    }
    
    .album-card:hover {
      transform: translateY(-12px);
      border-color: #008435;
    }
    
    .album-cover-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    
    .album-cover {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .album-card:hover .album-cover {
      transform: scale(1.1);
    }
    
    .album-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 100%);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 35px;
      transition: background 0.5s ease;
    }
    
    .album-card:hover .album-overlay {
      background: linear-gradient(to bottom, rgba(0,132,53,0.85) 0%, rgba(0,100,41,0.5) 50%, rgba(0,0,0,0.9) 100%);
    }
    
    .album-top-info {
      color: white;
    }
    
    .album-title {
      font-size: 32px;
      font-weight: 800;
      color: white;
      margin-bottom: 15px;
      line-height: 1.2;
      text-shadow: 0 2px 10px rgba(0,0,0,0.3);
    }
    
    .album-description {
      color: rgba(255,255,255,0.95);
      font-size: 16px;
      line-height: 1.6;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-shadow: 0 1px 5px rgba(0,0,0,0.3);
    }
    
    .album-bottom-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .album-photo-count {
      display: flex;
      align-items: center;
      gap: 12px;
      color: white;
      font-weight: 700;
      font-size: 18px;
      background: rgba(0,132,53,0.9);
      padding: 12px 24px;
      border-radius: 50px;
      transition: all 0.3s ease;
    }
    
    .album-card:hover .album-photo-count {
      background: white;
      color: #008435;
    }
    
    .album-photo-count i {
      font-size: 20px;
    }
    
    .album-date {
      color: rgba(255,255,255,0.9);
      font-size: 15px;
      font-weight: 500;
      text-shadow: 0 1px 3px rgba(0,0,0,0.3);
    }
    
    .view-album-badge {
      position: absolute;
      top: 35px;
      right: 35px;
      background: white;
      color: #008435;
      padding: 10px 20px;
      border-radius: 50px;
      font-weight: 600;
      font-size: 14px;
      opacity: 0;
      transform: translateY(-10px);
      transition: all 0.4s ease;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .album-card:hover .view-album-badge {
      opacity: 1;
      transform: translateY(0);
    }
    
    .photos-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      margin-top: 30px;
    }
    
    .gallery-item {
      position: relative;
      overflow: hidden;
      border-radius: 12px;
      cursor: pointer !important;
      transition: all 0.3s ease;
      height: 350px;
      display: block;
    }
    
    .gallery-item * {
      pointer-events: none;
    }
    
    .gallery-item:hover {
      transform: translateY(-8px);
    }
    
    .gallery-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    
    .gallery-item:hover img {
      transform: scale(1.15);
    }
    
    .gallery-item-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,132,53,0.85);
      opacity: 0;
      transition: opacity 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
    }
    
    .gallery-item:hover .gallery-item-overlay {
      opacity: 1;
    }
    
    .gallery-item-overlay i {
      color: white;
      font-size: 40px;
    }
    
    .back-button {
      background-color: #008435 !important;
      border: none !important;
      border-radius: 50px;
      padding: 14px 40px;
      font-weight: 600;
      transition: all 0.3s ease;
      margin-bottom: 40px;
      display: inline-flex;
      align-items: center;
      gap: 12px;
      color: white !important;
      cursor: pointer !important;
      font-size: 16px;
      box-shadow: 0 4px 15px rgba(0,132,53,0.3);
      text-decoration: none;
    }
    
    .back-button * {
      pointer-events: none;
    }
    
    .back-button:hover {
      background-color: #006629 !important;
      transform: translateX(-5px);
      box-shadow: 0 6px 20px rgba(0,132,53,0.4);
      color: white !important;
    }
    
    .back-button:active {
      transform: translateX(-3px);
    }
    
    .back-button:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(0,132,53,0.3);
    }
    
    .skeleton-loader {
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200% 100%;
      animation: loading 1.5s infinite;
      border-radius: 20px;
      height: 500px;
    }
    
    @keyframes loading {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    
    .album-header {
      margin-bottom: 40px;
    }
    
    .album-header h2 {
      font-size: 36px;
      font-weight: 800;
      color: #1a1a1a;
      margin-bottom: 10px;
    }
    
    .album-header p {
      font-size: 18px;
      color: #666;
      line-height: 1.6;
    }
    
    @media (max-width: 992px) {
      .albums-grid {
        grid-template-columns: 1fr;
        gap: 30px;
      }
      
      .album-card {
        height: 450px;
      }
      
      .photos-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
      }
      
      .gallery-item {
        height: 300px;
      }
    }
    
    @media (max-width: 768px) {
      .category-filters {
        gap: 20px;
        padding: 15px 0;
      }

      .category-tab {
        font-size: 14px;
      }

      .album-title {
        font-size: 26px;
      }

      .album-description {
        font-size: 14px;
      }

      .album-photo-count {
        font-size: 16px;
        padding: 10px 20px;
      }

      .photos-grid {
        grid-template-columns: 1fr;
      }

      .gallery-item {
        height: 280px;
      }
    }
  `;

  return (
    <Layout>
      <style>{styles}</style>
      
      {/* Breadcrumb */}
      <section
        className="banner-inner-sec"
        style={{ backgroundImage: "url('assets/images/bg1.png')" }}
      >
        <div className="banner-table">
          <div className="banner-table-cell">
            <div className="container">
              <div className="banner-inner-content">
                <h2 className="banner-inner-title">
                  {viewMode === 'albums' ? 'Photo Albums' : selectedAlbum?.title}
                </h2>
                <ul className="xs-breadcumb">
                  <li>
                    <a href="/">Home /</a> <a href="/gallery">Pages /</a> 
                    {viewMode === 'albums' ? ' gallery' : ` gallery / ${selectedAlbum?.title}`}
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
          {/* Albums View */}
          {viewMode === 'albums' && (
            <>
              {/* Category Filter Tabs */}
              {!loading && galleries.length > 0 && (
                <div className="category-filters">
                  <button
                    type="button"
                    className={`category-tab ${activeCategory === 'all' ? 'active' : ''}`}
                    onClick={() => handleCategoryChange('all')}
                    style={{ pointerEvents: 'auto' }}
                  >
                    All
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category._id}
                      type="button"
                      className={`category-tab ${activeCategory === category._id ? 'active' : ''}`}
                      onClick={() => handleCategoryChange(category._id)}
                      style={{ pointerEvents: 'auto' }}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              )}

              {loading ? (
                <div className="albums-grid">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="skeleton-loader"></div>
                  ))}
                </div>
              ) : filteredGalleries.length === 0 ? (
                <div className="text-center py-5">
                  <p className="text-muted">
                    No albums found
                    {activeCategory !== 'all' && categories.find(c => c._id === activeCategory) && 
                      ` in ${categories.find(c => c._id === activeCategory).name}`
                    }
                  </p>
                </div>
              ) : (
                <div className="albums-grid">
                  {filteredGalleries.map((album) => (
                    <div
                      key={album._id}
                      className="album-card"
                      onClick={() => handleAlbumClick(album)}
                    >
                      <div className="album-cover-wrapper">
                        <img
                          src={album.photos[0]}
                          alt={album.title}
                          className="album-cover"
                        />
                        <div className="album-overlay">
                          <div className="album-top-info">
                            <h3 className="album-title">{album.title}</h3>
                            <p className="album-description">{album.description}</p>
                          </div>
                          <div className="album-bottom-info">
                            <div className="album-photo-count">
                              <i className="fas fa-images"></i>
                              <span>{album.photos.length} photos</span>
                            </div>
                            <span className="album-date">
                              {new Date(album.uploadedAt).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <div className="view-album-badge">
                          <span>View Album</span>
                          <i className="fas fa-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {/* Photos View */}
          {viewMode === 'photos' && selectedAlbum && (
            <>
              <button 
                className="back-button" 
                onClick={handleBackToAlbums}
                type="button"
              >
                <i className="fas fa-arrow-left"></i>
                Back to Albums
              </button>
              
              <div className="album-header">
                <h2>{selectedAlbum.title}</h2>
                <p>{selectedAlbum.description}</p>
              </div>

              <div className="photos-grid">
                {selectedAlbum.photos.map((url, idx) => (
                  <div
                    key={`${selectedAlbum._id}-${idx}`}
                    className="gallery-item"
                    data-toggle="modal"
                    data-target="#photoModal"
                    onClick={() => setSelectedPhoto({
                      url,
                      title: selectedAlbum.title,
                      desc: selectedAlbum.description,
                      date: new Date(selectedAlbum.uploadedAt).toLocaleDateString(),
                    })}
                  >
                    <img src={url} alt={`${selectedAlbum.title} - ${idx + 1}`} />
                    <div className="gallery-item-overlay">
                      <i className="fas fa-search-plus"></i>
                    </div>
                  </div>
                ))}
              </div>
            </>
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