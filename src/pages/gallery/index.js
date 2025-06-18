import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout';

const ProjectGallery = () => {
  const [filter, setFilter] = useState('all');
  
  // This would normally use a library like Isotope.js for filtering
  // This is a simplified version for demonstration
  const handleFilterClick = (category) => {
    setFilter(category);
  };
  
  const projects = [
    {
      id: 1,
      title: "Planting",
      description: "Together also created. Meat winged seas waters herb saw he. Second female void.",
      image: "assets/images/our-project/project_1.jpg",
      popupImage: "assets/images/our-project/project_1.jpg",
      category: "category1",
      categories: ["all", "category1"]
    },
    {
      id: 2,
      title: "Planting",
      description: "Together also created. Meat winged seas waters herb saw he. Second female void.",
      image: "assets/images/our-project/project_3.jpg",
      popupImage: "assets/images/our-project/project_1.jpg",
      category: "category2",
      categories: ["all", "category2"]
    },
    {
      id: 3,
      title: "Planting",
      description: "Together also created. Meat winged seas waters herb saw he. Second female void.",
      image: "assets/images/our-project/project_2.jpg",
      popupImage: "assets/images/our-project/project_1.jpg",
      category: "category3",
      categories: ["all", "category3"]
    },
    {
      id: 4,
      title: "Planting",
      description: "Together also created. Meat winged seas waters herb saw he. Second female void.",
      image: "assets/images/our-project/project_4.jpg",
      popupImage: "assets/images/our-project/project_1.jpg",
      category: "category4",
      categories: ["all", "category4"]
    }
  ];
  
  // For handling the popup functionality (you would typically use a library like react-modal)
  const [activePopup, setActivePopup] = useState(null);
  
  const openPopup = (id) => {
    setActivePopup(id);
  };
  
  const closePopup = () => {
    setActivePopup(null);
  };
  
  // In a real implementation, you'd use a proper modal library and wouldn't need this
  useEffect(() => {
    if (activePopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activePopup]);
  
  return (
    <>
      {/* Breadcrumb Section */}
     <Layout>
     <section className="banner-inner-sec" style={{backgroundImage: "url('assets/images/bg1.png')"}}>
        <div className="banner-table">
          <div className="banner-table-cell">
            <div className="container">
              <div className="banner-inner-content">
                <h2 className="banner-inner-title">Gallery</h2>
                <ul className="xs-breadcumb">
                  <li><a href="/"> Home  / </a> <a href="/gallery">Pages /</a>  gallery</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="gallery-sec recent-work-sec our-project-sec section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="recent-folio-menu xs-mb-50">
                <ul className="work-folio-menu">
                  <li 
                    className={`filter ${filter === 'all' ? 'active' : ''}`} 
                    onClick={() => handleFilterClick('all')}
                  >
                    All
                  </li>
                  <li 
                    className={`filter ${filter === 'category1' ? 'active' : ''}`}
                    onClick={() => handleFilterClick('category1')}
                  >
                    Gardening
                  </li>
                  <li 
                    className={`filter ${filter === 'category2' ? 'active' : ''}`}
                    onClick={() => handleFilterClick('category2')}
                  >
                    Fall cleanup
                  </li>
                  <li 
                    className={`filter ${filter === 'category3' ? 'active' : ''}`}
                    onClick={() => handleFilterClick('category3')}
                  >
                    Watering
                  </li>
                  <li 
                    className={`filter ${filter === 'category4' ? 'active' : ''}`}
                    onClick={() => handleFilterClick('category4')}
                  >
                    Video
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="xs-portfolio-grid grid">
            {projects
              .filter(project => filter === 'all' || project.category === filter)
              .map(project => (
                <div key={project.id} className={`xs-portfolio-grid-item ${project.category} grid-item all`}>
                  <a 
                    href={`#popup_${project.id}`} 
                    className="xs-single-portfolio-item xs-image-popup"
                    onClick={(e) => {
                      e.preventDefault();
                      openPopup(project.id);
                    }}
                  >
                    <img src={project.image} alt={project.title} />
                    <div className="single-project-content">
                      <div className="xs-image-popup-icon">
                        <i className="icon icon-plus"></i>
                      </div>
                      <h3 className="xs-single-title">{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                  </a>
                  
                  {/* Popup Content */}
                  {activePopup === project.id && (
                    <div className="popup-overlay" onClick={closePopup}>
                      <div 
                        id={`popup_${project.id}`} 
                        className="container xs-gallery-popup-item"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="row">
                          <div className="col-lg-5 xs-padding-0">
                            <div className="xs-popup-img">
                              <img src={project.popupImage} alt={project.title} />
                            </div>
                          </div>
                          <div className="col-lg-7">
                            <div className="xs-popup-content">
                              <h2 className="hidden-title">Project info</h2>
                              <h3>Garden Caring</h3>
                              <div className="row">
                                <div className="col-lg-5">
                                  <ul className="xs-popup-left-content">
                                    <li>
                                      <i className="icon icon-calendar-full"></i>
                                      <label>Project date</label>
                                      <span>22 jan 2018</span>
                                    </li>
                                    <li>
                                      <i className="icon icon-tags"></i>
                                      <label>Category</label>
                                      <span>Garden care, Garden</span>
                                    </li>
                                    <li>
                                      <i className="icon icon-user2"></i>
                                      <label>Client</label>
                                      <span>Mr. Jordan, Newyork</span>
                                    </li>
                                    <li>
                                      <i className="icon icon-invest"></i>
                                      <label>Project value</label>
                                      <span>$ 500</span>
                                    </li>
                                    <li>
                                      <i className="icon icon-map-marker2"></i>
                                      <label>Location</label>
                                      <span>76/A, Green lawn, Newyork City</span>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-lg-7">
                                  <div className="xs-popup-right-content">
                                    <p>
                                      Darkness dominion dominion her body creature appear make replenish.
                                      Bring shall him waters saw creepeth creepeth land divided.
                                    </p>
                                    <blockquote>
                                      "Each which life god all living form fruitful their fowl shed a stars he left"
                                    </blockquote>
                                    <p>
                                      Fowl she'd a stars he let. Creepeth deep sixth you is signs creature.
                                      Earth divide great whales.
                                    </p>
                                    <a href="#" className="xs-btn">PROJECT LINK</a>
                                    <button className="close-popup" onClick={closePopup}>×</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
          
          <div className="row">
            <div className="col-lg-12">
              <div className="load-more-btn">
                <a href="#" className="xs-btn">More View</a>
              </div>
            </div>
          </div>
        </div>
      </section>
     </Layout>
    </>
  );
};

export default ProjectGallery;