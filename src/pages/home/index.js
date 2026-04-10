import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';


      const Home = () => {
        const [isPlaying, setIsPlaying] = useState(false);
        const [newsItems, setNewsItems] = useState([]);
        const [sliders, setSliders] = useState([]);
        const [videos, setVideos] = useState([]);
        const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
        const [loading, setLoading] = useState(true);
        const [slidersLoading, setSlidersLoading] = useState(true);
        const [videosLoading, setVideosLoading] = useState(true);
        const [pagination, setPagination] = useState({
          totalCount: 0,
          totalPages: 1,
          currentPage: 1
        });
        const [category, setCategory] = useState('all');

        const fetchNews = async (page = 1) => {
          setLoading(true);
          try {
            const queryCategory = category && category !== 'all' ? `&category=${category}` : '';
            const res = await fetch(`http://localhost:5050/news?page=${page}${queryCategory}`);
            const data = await res.json();

            const sortedNews = data.news
            .sort((a, b) => new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime())
            .slice(0, 3);

            setNewsItems(sortedNews);
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

        const fetchSliders = async () => {
          setSlidersLoading(true);
          try {
            const res = await fetch('http://localhost:5050/slider/?isActive=true');
            const data = await res.json();

            // Sort sliders by displayOrder
            const sortedSliders = data.sliders.sort((a, b) => a.displayOrder - b.displayOrder);
            setSliders(sortedSliders);
          } catch (error) {
            console.error("Error fetching sliders:", error);
          } finally {
            setSlidersLoading(false);
          }
        };

        const fetchVideos = async () => {
          setVideosLoading(true);
          try {
            const res = await fetch('http://localhost:5050/youtube/?isActive=true');
            const data = await res.json();

            // Sort videos by displayOrder
            const sortedVideos = data.videos.sort((a, b) => a.displayOrder - b.displayOrder);
            setVideos(sortedVideos);
          } catch (error) {
            console.error("Error fetching videos:", error);
          } finally {
            setVideosLoading(false);
          }
        };

        useEffect(() => {
          fetchNews();
          fetchSliders();
          fetchVideos();
        }, []);

        // Auto-slide effect for videos
        useEffect(() => {
          let autoSlideInterval;

          if (!isPlaying && videos.length > 1) {
            autoSlideInterval = setInterval(() => {
              setCurrentVideoIndex((prevIndex) =>
                prevIndex === videos.length - 1 ? 0 : prevIndex + 1
              );
            }, 5000); // 5 seconds
          }

          return () => {
            if (autoSlideInterval) {
              clearInterval(autoSlideInterval);
            }
          };
        }, [isPlaying, videos.length]);


        const handlePlayClick = (e) => {
          e.preventDefault();
          setIsPlaying(true);
        };

        const handlePauseClick = (e) => {
          e.preventDefault();
          setIsPlaying(false);
        };

        const handlePrevVideo = () => {
          if (videos.length > 0) {
            setCurrentVideoIndex((prevIndex) =>
              prevIndex === 0 ? videos.length - 1 : prevIndex - 1
            );
            setIsPlaying(false);
          }
        };

        const handleNextVideo = () => {
          if (videos.length > 0) {
            setCurrentVideoIndex((prevIndex) =>
              prevIndex === videos.length - 1 ? 0 : prevIndex + 1
            );
            setIsPlaying(false);
          }
        };

        const extractYouTubeId = (url) => {
          const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
          const match = url.match(regExp);
          return (match && match[2].length === 11) ? match[2] : null;
        };

        function slugifyCategory(category) {
          if(category === 'Events and Trainings') {
            return 'events-and-training';
          }else {
            return category.toLowerCase().replace(/\s+/g, '-');
          }
        }
        
        
      

        useEffect(() => {
            if (window.$ && !slidersLoading && sliders.length > 0) {
              // Destroy existing carousel if it exists
              if (window.$('.banner-slider').data('owl.carousel')) {
                window.$('.banner-slider').data('owl.carousel').destroy();
              }

              // Initialize carousel
              if (window.$('.banner-slider').length > 0) {
                window.$('.banner-slider').owlCarousel({
                  items: 1,
                  loop: true,
                  mouseDrag: true,
                  touchDrag: true,
                  dots: false,
                  nav: true,
                  navText: [
                    '<i class="icon icon-chevron-left"></i>',
                    '<i class="icon icon-chevron-right"></i>'
                  ],
                  autoplay: false,
                  autoplayTimeout: 5000,
                  autoplayHoverPause: true,
                  transitionStyle: "fade",
                  smartSpeed: 800,
                  responsive: {
                    0: { nav: false },
                    480: { nav: false },
                    991: { nav: true }
                  }
                });
              }
            } else if (!window.$) {
              console.error("jQuery is not loaded.");
            }
          }, [slidersLoading, sliders]); // Re-run when sliders data changes
    
          useEffect(() => {
            if (window.$('.xs-portfolio-grid').length > 0) {
              const $portfolioGrid = window.$('.xs-portfolio-grid');
        
              const colWidth = () => {
                let w = $portfolioGrid.width();
                let columnNum = 1;
                if (w > 1200) {
                  columnNum = 3;
                } else if (w > 900) {
                  columnNum = 3;
                } else if (w > 600) {
                  columnNum = 2;
                } else if (w > 450) {
                  columnNum = 2;
                } else if (w > 385) {
                  columnNum = 1;
                }
                let columnWidth = Math.floor(w / columnNum);
                $portfolioGrid.find('.xs-portfolio-grid-item').each(function () {
                  let $item = window.$(this);
                  let multiplier_w = $item.attr('class').match(/xs-portfolio-grid-item-w(\d)/);
                  let multiplier_h = $item.attr('class').match(/xs-portfolio-grid-item-h(\d)/);
                  let width = multiplier_w ? columnWidth * multiplier_w[1] : columnWidth;
                  $item.css({ width });
                });
                return columnWidth;
              };
        
              const isotope = () => {
                $portfolioGrid.isotope({
                  resizable: true,
                  itemSelector: '.xs-portfolio-grid-item',
                  masonry: {
                    columnWidth: colWidth(),
                    gutterWidth: 3,
                  },
                });
              };
              isotope();
              window.$(window).resize(isotope);
            }
        
            window.$('.filter').on('click', function () {
              let filterValue = window.$(this).attr('data-filter');
              window.$('.grid').isotope({ filter: filterValue });
              window.$('.filter').removeClass('active');
              window.$(this).addClass('active');
            });
          }, []);

          useEffect(() => {
            // Check if jQuery is available globally
            if (window.$ && window.$.fn.mixItUp) {
              window.$('#mixcontent').mixItUp({
                animation: {
                  effects: 'fade translateX(50%)',
                  reverseOut: true,
                  duration: 1000
                },
                load: {
                  filter: 'all'
                }
              });
        
              // Cleanup function
              return () => {
                const mixer = window.$('#mixcontent').data('mixItUp');
                if (mixer) {
                  mixer.destroy();
                }
              };
            }
          }, []);

          const services = [
            {
              id: 1,
              title: "Smallholder Plantation Management.",
              image: "assets/images/services/projectareas1.png",
              icon: "icon-Our_service_1",
              description: "Tree growers and organisations effectively manage plantations. This result continues the work of PFP2",
              delay: "300ms"
            },
            {
              id: 2,
              title: "Community Based Forest Management.",
              image: "assets/images/services/projectareas2.png",
              icon: "icon-Our_service_2",
              description: "Communities implement CBFM. The result is building further on the work of FORVAC.",
              delay: "400ms"
            },
            {
              id: 3,
              title: "Value Chain and Enterprise Development.",
              image: "assets/images/services/projectareas3.png",
              icon: "icon-Our_service_3",
              title: "Value Chain and Enterprise Development.",
              description: "CBFM communities, tree growers and MSMEs run viable forestry enterprises.",
              delay: "500ms"
            },
            {
              id: 4,
              title: "Enabling Institutional Development.",
              image: "assets/images/services/projectareas4.png",
              icon: "icon-Our_service_4",
              description: "Improved enabling environment for the forestry sector, supporting smallholder forestry, CBFM, and MSMEs in the forest value chain.",
              delay: "600ms"
            }
          ];

          const [activeFilter, setActiveFilter] = useState('all');

          const filters = [
            { id: 'all', label: 'All' },
            { id: 'cat1', label: 'Gardening' },
            { id: 'cat2', label: 'Fall cleanup' },
            { id: 'cat3', label: 'Watering' },
            { id: 'cat4', label: 'Video' }
          ];
        
          const projects = [
            {
              id: 1,
              title: "Watering",
              image: "assets/images/recent-work/work_1.jpg",
              popupImage: "assets/images/our-project/project_1.jpg",
              icon: "icon-Our_service_3",
              categories: ["cat3"],
              date: "22 jan 2018",
              client: "Mr. Jordan, Newyork",
              value: "$ 500",
              location: "76/A, Green lawn, Newyork City",
              description: [
                "Darkness dominion dominion her body creature appear make replenish. Bring shall him waters saw creepeth creepeth land divided.",
                "Fowl she'd a stars he let. Creepeth deep sixth you is signs creature. Earth divide great whales."
              ],
              quote: "Each which life god all living form fruitful their fowl shed a stars he left"
            },
            {
              id: 2,
              title: "Home Gardening",
              image: "assets/images/recent-work/work_2.jpg",
              popupImage: "assets/images/our-project/project_1.jpg",
              icon: "icon-Our_service_1",
              categories: ["cat1", "cat2"],
              date: "22 jan 2018",
              client: "Mr. Jordan, Newyork",
              value: "$ 500",
              location: "76/A, Green lawn, Newyork City",
              description: [
                "Darkness dominion dominion her body creature appear make replenish. Bring shall him waters saw creepeth creepeth land divided.",
                "Fowl she'd a stars he let. Creepeth deep sixth you is signs creature. Earth divide great whales."
              ],
              quote: "Each which life god all living form fruitful their fowl shed a stars he left"
            },
            {
              id: 3,
              title: "Garden Care",
              image: "assets/images/recent-work/work_3.jpg",
              popupImage: "assets/images/our-project/project_1.jpg",
              icon: "icon-Our_service_2",
              categories: ["cat4", "cat3"],
              date: "22 jan 2018",
              client: "Mr. Jordan, Newyork",
              value: "$ 500",
              location: "76/A, Green lawn, Newyork City",
              description: [
                "Darkness dominion dominion her body creature appear make replenish. Bring shall him waters saw creepeth creepeth land divided.",
                "Fowl she'd a stars he let. Creepeth deep sixth you is signs creature. Earth divide great whales."
              ],
              quote: "Each which life god all living form fruitful their fowl shed a stars he left"
            },
            {
              id: 4,
              title: "Fall Clean Up",
              image: "assets/images/recent-work/work_4.jpg",
              popupImage: "assets/images/our-project/project_1.jpg",
              icon: "icon-Our_service_4",
              categories: ["cat1", "cat3"],
              date: "22 jan 2018",
              client: "Mr. Jordan, Newyork",
              value: "$ 500",
              location: "76/A, Green lawn, Newyork City",
              description: [
                "Darkness dominion dominion her body creature appear make replenish. Bring shall him waters saw creepeth creepeth land divided.",
                "Fowl she'd a stars he let. Creepeth deep sixth you is signs creature. Earth divide great whales."
              ],
              quote: "Each which life god all living form fruitful their fowl shed a stars he left"
            },
            {
              id: 5,
              title: "Garden Maintannance",
              image: "assets/images/recent-work/work_5.jpg",
              popupImage: "assets/images/our-project/project_1.jpg",
              icon: "icon-Our_service_2",
              categories: ["cat1", "cat2"],
              date: "22 jan 2018",
              client: "Mr. Jordan, Newyork",
              value: "$ 500",
              location: "76/A, Green lawn, Newyork City",
              description: [
                "Darkness dominion dominion her body creature appear make replenish. Bring shall him waters saw creepeth creepeth land divided.",
                "Fowl she'd a stars he let. Creepeth deep sixth you is signs creature. Earth divide great whales."
              ],
              quote: "Each which life god all living form fruitful their fowl shed a stars he left"
            },
            {
              id: 6,
              title: "Irrigation & Drainage",
              image: "assets/images/recent-work/work_6.jpg",
              popupImage: "assets/images/our-project/project_1.jpg",
              icon: "icon-recent_work_6",
              categories: ["cat1", "cat4"],
              date: "22 jan 2018",
              client: "Mr. Jordan, Newyork",
              value: "$ 500",
              location: "76/A, Green lawn, Newyork City",
              description: [
                "Darkness dominion dominion her body creature appear make replenish. Bring shall him waters saw creepeth creepeth land divided.",
                "Fowl she'd a stars he let. Creepeth deep sixth you is signs creature. Earth divide great whales."
              ],
              quote: "Each which life god all living form fruitful their fowl shed a stars he left"
            }
          ];
        
          const filteredProjects = activeFilter === 'all' 
            ? projects 
            : projects.filter(project => project.categories.includes(activeFilter));
        

              const onPressLink = () => {
                window.open('https://www.youtube.com/@participatoryplantationfor9595', '_blank');
              }

               // News Skeleton Loader Component
  const NewsSkeleton = () => (
    <div className="single-latest-news">
      <div className="latest-news-img">
        <div className="skeleton-box" style={{ height: '200px', width: '100%', backgroundColor: '#e0e0e0' }}></div>
      </div>
      <div className="single-news-content">
        <div className="skeleton-box" style={{ height: '20px', width: '100px', backgroundColor: '#e0e0e0', marginBottom: '10px' }}></div>
        <div className="skeleton-box" style={{ height: '25px', width: '100%', backgroundColor: '#e0e0e0', marginBottom: '15px' }}></div>
        <div className="skeleton-box" style={{ height: '16px', width: '100%', backgroundColor: '#e0e0e0', marginBottom: '8px' }}></div>
        <div className="skeleton-box" style={{ height: '16px', width: '80%', backgroundColor: '#e0e0e0', marginBottom: '8px' }}></div>
        <div className="skeleton-box" style={{ height: '16px', width: '60%', backgroundColor: '#e0e0e0' }}></div>
      </div>
    </div>
  );

        return (
          <>
          <style>{`
            @keyframes videoSlideIn {
              0% {
                opacity: 0;
                transform: translateX(30px);
              }
              100% {
                opacity: 1;
                transform: translateX(0);
              }
            }

            @keyframes contentFadeSlide {
              0% {
                opacity: 0;
                transform: translateY(20px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes fadeIn {
              0% {
                opacity: 0;
              }
              100% {
                opacity: 1;
              }
            }

            .video-item img,
            .video-iframe-container {
              will-change: transform, opacity;
            }

            .call-back-content h3,
            .call-back-content p,
            .call-back-form {
              will-change: transform, opacity;
            }
          `}</style>
          <Layout>
            {/* Banner Section */}
            <section className="xs-banner-sec xs-banner-v2-sec owl-carousel banner-slider">
              {slidersLoading ? (
                // Loading skeleton or placeholder
                <div className="banner-slider-item" style={{ backgroundImage: "url(assets/images/default-slider.jpg)" }}>
                  <div className="slider-table">
                    <div className="slider-table-cell">
                      <div className="container">
                        <div className="col-lg-9">
                          <div className="banner-content">
                            <div className="skeleton-box" style={{ height: '60px', width: '80%', backgroundColor: '#e0e0e0', marginBottom: '20px' }}></div>
                            <div className="skeleton-box" style={{ height: '20px', width: '100%', backgroundColor: '#e0e0e0', marginBottom: '10px' }}></div>
                            <div className="skeleton-box" style={{ height: '20px', width: '90%', backgroundColor: '#e0e0e0', marginBottom: '20px' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : sliders.length > 0 ? (
                sliders.map((slider, index) => (
                  <div
                    key={slider._id}
                    className={`banner-slider-item banner-item${index + 1}`}
                    style={{ backgroundImage: `url(${slider.backgroundImage})` }}
                  >
                    <div className="slider-table">
                      <div className="slider-table-cell">
                        <div className="container">
                          <div className="col-lg-9">
                            <div className="banner-content">
                              <h2>{slider.title}</h2>
                              <p style={{textAlign: 'left'}}>
                                {slider.subtitle}
                              </p>
                              <div className="xs-btn-wraper">
                                {slider.primaryButtonText && slider.primaryButtonLink && (
                                  <a href={slider.primaryButtonLink} className="xs-btn">
                                    {slider.primaryButtonText}
                                  </a>
                                )}
                                {slider.secondaryButtonText && slider.secondaryButtonLink && (
                                  <a href={slider.secondaryButtonLink} className="xs-btn fill">
                                    {slider.secondaryButtonText}
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                // Fallback if no sliders are available
                <div className="banner-slider-item banner-item1" style={{ backgroundImage: "url(assets/images/default-slider.jpg)" }}>
                  <div className="slider-table">
                    <div className="slider-table-cell">
                      <div className="container">
                        <div className="col-lg-9">
                          <div className="banner-content">
                            <h2>Welcome to FORLAND</h2>
                            <p>Loading content...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>
      
            {/* About Inner Section */}
            <section className="about-inner v3 section-padding">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="300ms">
                    <div className="about-inner-img">
                      <img src="https://res.cloudinary.com/dedfrilse/image/upload/v1743850482/fnilc7wuevy1iqccprmx.png" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-7 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="400ms">
                    <div className="about-inner-content">
                      <h2 className="column-title2 column-title">FORLAND Background
                      </h2>
                      <div className="single-about-content">
                        <p style={{textAlign: "justify"}}>
                        Forestry, Land Use, and Value Chains Development in Tanzania (FORLAND) is a four-year (2025-2029) bilateral initiative between Finland and Tanzania to consolidate their previous PFP and FORVAC projects and ensure sustainability. The Tanzanian Ministry of Natural Resources and Tourism (MNRT) will implement the project with a multidisciplinary Technical Assistance team supplied by NIRAS and INDUFOR. 
                        </p>
                      </div>
                      <div className="single-about-content">
                        <p style={{textAlign: "justify"}}>
                        The FORLAND Project, which spans four contiguous regions in southern Tanzania (Iringa, Njombe, Ruvuma, and Lindi), is rich in both natural and plantation forest resources. The project will assist and capacitate duty bearers in government departments, rights holders (such as village communities, smallholder tree growers, and MSMEs) who have legal rights to use forests. 

                        </p>
                      </div>
                      {/* <div className="row about-funfact">
                        <div className="col-sm-4">
                          <div className="single-about-funfact">
                            <i className="icon-fun_fact_1"></i>
                            <h4 className="funfact-title" data-counter="25">25 +</h4>
                            <p>year of experience</p>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="single-about-funfact">
                            <i className="icon-fun_fact_2"></i>
                            <h4 className="funfact-title" data-counter="502">502 +</h4>
                            <p>happy customers</p>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="single-about-funfact">
                            <i className="icon-fun_fact_4"></i>
                            <h4 className="funfact-title" data-counter="100">100</h4>
                            <p>professional awards</p>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
      
            {/* Video Section */}
            <section className="video-sec">
      <div style={{height: 470}} className="container-fluid">
        {videosLoading ? (
          <div style={{height: 470}} className="row">
            <div style={{height: 470}} className="col-lg-7 xs-padding-0 align-self-center">
              <div className="skeleton-box" style={{ height: '470px', width: '100%', backgroundColor: '#e0e0e0' }}></div>
            </div>
            <div style={{height: 470}} className="col-lg-5 xs-padding-0">
              <div className="call-to-action-v2">
                <div className="call-back-content">
                  <div className="skeleton-box" style={{ height: '30px', width: '70%', backgroundColor: '#e0e0e0', marginBottom: '20px' }}></div>
                  <div className="skeleton-box" style={{ height: '100px', width: '100%', backgroundColor: '#e0e0e0', marginBottom: '20px' }}></div>
                  <div className="skeleton-box" style={{ height: '40px', width: '150px', backgroundColor: '#e0e0e0' }}></div>
                </div>
              </div>
            </div>
          </div>
        ) : videos.length > 0 ? (
          <div style={{height: 470, position: 'relative'}} className="row">
            <div style={{height: 470}} className="col-lg-7 xs-padding-0 align-self-center">
              <div className="video-item" style={{ position: 'relative', overflow: 'hidden' }}>
                {!isPlaying ? (
                  <>
                    <img
                      key={currentVideoIndex}
                      src={`https://img.youtube.com/vi/${extractYouTubeId(videos[currentVideoIndex].youtubeUrl)}/maxresdefault.jpg`}
                      alt={videos[currentVideoIndex].title}
                      style={{
                        width: '100%',
                        height: '470px',
                        objectFit: 'cover',
                        animation: 'videoSlideIn 0.6s ease-out',
                        transition: 'opacity 0.4s ease-in-out'
                      }}
                      onError={(e) => {
                        e.target.src = `https://img.youtube.com/vi/${extractYouTubeId(videos[currentVideoIndex].youtubeUrl)}/hqdefault.jpg`;
                      }}
                    />
                    <a className="video-play-btn" onClick={handlePlayClick} style={{ cursor: 'pointer' }}>
                      <i className="icon icon-play-button2"></i>
                    </a>
                  </>
                ) : (
                  <div
                    className="video-iframe-container"
                    style={{
                      position: 'relative',
                      height: 470,
                      overflow: 'hidden',
                      width: '100%',
                      animation: 'fadeIn 0.5s ease-in'
                    }}
                  >
                    <iframe
                      key={currentVideoIndex}
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 470 }}
                      src={`https://www.youtube.com/embed/${extractYouTubeId(videos[currentVideoIndex].youtubeUrl)}?autoplay=1&enablejsapi=1`}
                      title={videos[currentVideoIndex].title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen>
                    </iframe>
                  </div>
                )}

                {/* Navigation arrows */}
                {videos.length > 1 && !isPlaying && (
                  <>
                    <button
                      onClick={handlePrevVideo}
                      className="video-nav-btn"
                      style={{
                        position: 'absolute',
                        left: '20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(0,0,0,0.5)',
                        border: 'none',
                        color: 'white',
                        fontSize: '24px',
                        padding: '10px 15px',
                        cursor: 'pointer',
                        borderRadius: '4px',
                        zIndex: 10,
                        transition: 'all 0.3s ease',
                        animation: 'fadeIn 0.5s ease-in'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(0,0,0,0.8)';
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(0,0,0,0.5)';
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                      }}
                    >
                      <i className="icon icon-chevron-left"></i>
                    </button>
                    <button
                      onClick={handleNextVideo}
                      className="video-nav-btn"
                      style={{
                        position: 'absolute',
                        right: '20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(0,0,0,0.5)',
                        border: 'none',
                        color: 'white',
                        fontSize: '24px',
                        padding: '10px 15px',
                        cursor: 'pointer',
                        borderRadius: '4px',
                        zIndex: 10,
                        transition: 'all 0.3s ease',
                        animation: 'fadeIn 0.5s ease-in'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(0,0,0,0.8)';
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(0,0,0,0.5)';
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                      }}
                    >
                      <i className="icon icon-chevron-right"></i>
                    </button>
                  </>
                )}

                {/* Video counter */}
                {videos.length > 1 && (
                  <div style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '20px',
                    background: 'rgba(0,0,0,0.7)',
                    color: 'white',
                    padding: '8px 15px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    zIndex: 10
                  }}>
                    {currentVideoIndex + 1} / {videos.length}
                  </div>
                )}
              </div>
            </div>
            <div style={{height: 470}} className="col-lg-5 xs-padding-0">
              <div className="call-to-action-v2">
                <div className="call-back-content">
                  <h3
                    key={`title-${currentVideoIndex}`}
                    style={{
                      animation: 'contentFadeSlide 0.6s ease-out',
                      opacity: 1
                    }}
                  >
                    {videos[currentVideoIndex].title}
                  </h3>
                  <p
                    key={`desc-${currentVideoIndex}`}
                    style={{
                      textAlign: 'justify',
                      whiteSpace: 'pre-line',
                      animation: 'contentFadeSlide 0.7s ease-out',
                      animationDelay: '0.1s',
                      opacity: 1
                    }}
                    className="call-contact-text"
                  >
                    {videos[currentVideoIndex].description}
                  </p>
                  {videos[currentVideoIndex].buttonText && videos[currentVideoIndex].buttonLink && (
                    <form
                      className="call-back-form"
                      key={`btn-${currentVideoIndex}`}
                      style={{
                        animation: 'contentFadeSlide 0.8s ease-out',
                        animationDelay: '0.2s',
                        opacity: 1
                      }}
                    >
                      <div className="form-group call-back-btn">
                        <button
                          type="button"
                          onClick={() => window.open(videos[currentVideoIndex].buttonLink, '_blank')}
                          className="xs-btn xs-v2-btn"
                        >
                          {videos[currentVideoIndex].buttonText}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{height: 470}} className="row">
            <div className="col-lg-12 text-center align-self-center">
              <p>No videos available at the moment.</p>
            </div>
          </div>
        )}
      </div>
    </section>
      
            {/* Service Section */}
            <section className="service-sec section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-item">
              <h2 className="section-title">
                <span className="xs-title">Service we provide</span>
                Project Results Areas
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service) => (
            <div 
              key={service.id}
              className="col-lg-3 col-sm-6 wow fadeInUp" 
              data-wow-duration="1.5s" 
              data-wow-delay={service.delay}
            >
              <div className="single-service">
                <div className="service-img">
                  <img src={service.image} alt={service.title} />
                  {/* <i className={service.icon}></i> */}
                </div>
                <h3 className="xs-service-title">
                  <a href="#">{service.title}</a>
                </h3>
                <p>{service.description}</p>
                <a href="#" className="readMore">
                  Read more <i className="icon icon-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
   
    {/* <section className="recent-work-sec section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-item">
              <h2 className="section-title">
                <span className="xs-title">Our projects</span>
                Recent Works
              </h2>
            </div>
            <div className="recent-folio-menu">
              <ul>
                <li className="active filter" data-filter="all">All</li>
                <li className="filter" data-filter=".cat1">Gardening</li>
                <li className="filter" data-filter=".cat2">Fall cleanup</li>
                <li className="filter" data-filter=".cat3">Watering</li>
                <li className="filter" data-filter=".cat4">Video</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row" id="mixcontent">
      
          <div className="col-lg-4 mix cat3 col-sm-6">
            <a href="#popup_1" className="xs-image-popup" data-effect="mfp-zoom-in">
              <div className="single-recent-work">
                <img src="assets/images/recent-work/work_1.jpg" alt="" />
                <div className="recet-work-footer">
                  <i className="icon-Our_service_3"></i>
                  <h3>Watering</h3>
                </div>
              </div>
            </a>
            <div id="popup_1" className="container xs-gallery-popup-item mfp-hide">
              <div className="row">
                <div className="col-lg-5 xs-padding-0">
                  <div className="xs-popup-img">
                    <img src="assets/images/our-project/project_1.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="xs-popup-content">
                    <h2 className="hidden-title">Project info</h2>
                    <h3>Watering</h3>
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

       
          <div className="col-lg-4 mix cat1 cat2 col-sm-6">
            <a href="#popup_2" className="xs-image-popup" data-effect="mfp-zoom-in">
              <div className="single-recent-work">
                <img src="assets/images/recent-work/work_2.jpg" alt="" />
                <div className="recet-work-footer">
                  <i className="icon-Our_service_1"></i>
                  <h3>Home Gardening</h3>
                </div>
              </div>
            </a>
            <div id="popup_2" className="container xs-gallery-popup-item mfp-hide">
              
            </div>
          </div>

    
          <div className="col-lg-4 mix cat4 cat3 col-sm-6">
            <a href="#popup_3" className="xs-image-popup" data-effect="mfp-zoom-in">
              <div className="single-recent-work">
                <img src="assets/images/recent-work/work_3.jpg" alt="" />
                <div className="recet-work-footer">
                  <i className="icon-Our_service_2"></i>
                  <h3>Garden Care</h3>
                </div>
              </div>
            </a>
            <div id="popup_3" className="container xs-gallery-popup-item mfp-hide">
              
            </div>
          </div>

     
          <div className="col-lg-4 mix cat1 cat3 col-sm-6">
            <a href="#popup_4" className="xs-image-popup" data-effect="mfp-zoom-in">
              <div className="single-recent-work">
                <img src="assets/images/recent-work/work_4.jpg" alt="" />
                <div className="recet-work-footer">
                  <i className="icon-Our_service_4"></i>
                  <h3>Fall Clean Up</h3>
                </div>
              </div>
            </a>
            <div id="popup_4" className="container xs-gallery-popup-item mfp-hide">
              
            </div>
          </div>

    
          <div className="col-lg-4 mix cat1 cat2 col-sm-6">
            <a href="#popup_5" className="xs-image-popup" data-effect="mfp-zoom-in">
              <div className="single-recent-work">
                <img src="assets/images/recent-work/work_5.jpg" alt="" />
                <div className="recet-work-footer">
                  <i className="icon-Our_service_2"></i>
                  <h3>Garden Maintannance</h3>
                </div>
              </div>
            </a>
            <div id="popup_5" className="container xs-gallery-popup-item mfp-hide">
              
            </div>
          </div>

    
          <div className="col-lg-4 mix cat1 cat4 col-sm-6">
            <a href="#popup_6" className="xs-image-popup" data-effect="mfp-zoom-in">
              <div className="single-recent-work">
                <img src="assets/images/recent-work/work_6.jpg" alt="" />
                <div className="recet-work-footer">
                  <i className="icon-recent_work_6"></i>
                  <h3>Irrigation & Drainage</h3>
                </div>
              </div>
            </a>
            <div id="popup_6" className="container xs-gallery-popup-item mfp-hide">
              
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="load-more-btn">
              <a href="" className="xs-btn fill">More View</a>
            </div>
          </div>
        </div>
      </div>
    </section> */}


       {/* Funfact Section */}
       <ParallaxProvider>
      <ParallaxBanner
        layers={[
          {
            image: './assets/images/BC.png',
            speed: -20, // Negative value creates a slower scroll effect (parallax)
          },
        ]}
        className="funfact-sec funfact-v2-sec"
      >
            <div className="overlay" style={{backgroundColor: 'rgba(0,0,0,0.5)', width: '100%', height: '100%', position: 'absolute', top: 0, left: 0}}></div> 
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 align-self-center">
                    <div className="funfact-content">
                      <h2 className="column-title2 column-title"> 

                        <span style={{color: '#fff !important'}} className="xs-title-2">Project</span> Reach 
                        <span style={{color: '#fff !important'}} className="xs-title-2"> and</span> Impact
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="row">
                      <div className="col-sm-4 col-md-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="300ms">
                        <div className="single-funfact">
                        <img style={{marginTop: -20, marginBottom: 15}} src="/assets/images/Years.svg" alt="Districts Icon" width="60" height="60" />
                          <h3 className="funfact-title" data-counter="4">4</h3>
                          <p>Years Duration</p>
                        </div>
                      </div>
                      <div className="col-sm-4 col-md-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="400ms">
                        <div className="single-funfact">
                        <img style={{marginTop: -35, marginBottom: 15}} src="/assets/images/Regions.svg" alt="Districts Icon" width="60" height="60" />
                          <h3 className="funfact-title" data-counter="4">4</h3>
                          <p>Southern Regions</p>
                        </div>
                      </div>
                      <div className="col-sm-4 col-md-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="500ms">
  <div className="single-funfact">
    <div className="funfact-icon">
      <img style={{marginBottom: 15, marginTop: -13,}} src="/assets/images/Districts.svg" alt="Districts Icon" width="60" height="60" />
    </div>
    <h3 className="funfact-title" data-counter="19">19</h3>
    <p>Target Districts</p>
  </div>
</div>
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxBanner>
            </ParallaxProvider>
            <section className="latest-news-sec section-padding" style={{ backgroundColor: '#fff', paddingBottom: 0 }}>
    <div className="container">
      {/* Section Header */}
      <div className="row mb-5">
        <div className="col-12">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '50px' }}>
            <div style={{ maxWidth: '600px' }}>
              <p style={{ color: '#6B7280', textTransform: 'uppercase', fontSize: '13px', fontWeight: '600', marginBottom: '10px', letterSpacing: '0.5px' }}>FROM OUR BLOG</p>
              <h2 style={{ fontSize: '40px', fontWeight: '700', color: '#111827', marginBottom: '12px', lineHeight: '1.2' }}>Latest News & Updates</h2>
              <p style={{ color: '#6B7280', fontSize: '16px', lineHeight: '1.6' }}>
                Stay informed about the latest updates on FORLAND and related activities by visiting our blog page and following us on social media.
              </p>
            </div>
            <a href="/news" style={{
              backgroundColor: '#059669',
              color: '#fff',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '14px',
              padding: '12px 24px',
              borderRadius: '6px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'background-color 0.3s ease',
              marginTop: '35px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#047857'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#059669'}>
              View All <span>→</span>
            </a>
          </div>
        </div>
      </div>

      {/* News Grid - 3 Equal Cards */}
      <div className="row g-4">
        {loading ? (
          <>
            <div className="col-lg-4 col-md-6"><NewsSkeleton /></div>
            <div className="col-lg-4 col-md-6"><NewsSkeleton /></div>
            <div className="col-lg-4 col-md-6"><NewsSkeleton /></div>
          </>
        ) : (
          newsItems.map((news, index) => (
            <div key={news._id} className="col-lg-4 col-md-6">
              <div style={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid #E5E7EB',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                {/* Image */}
                <a href={`/${slugifyCategory(news?.category)}/${news._id}`} style={{ textDecoration: 'none' }}>
                  <div style={{ position: 'relative', paddingTop: '60%', overflow: 'hidden', backgroundColor: '#F3F4F6' }}>
                    <img
                      src={news.photo || "assets/images/default-news.jpg"}
                      alt={news.title}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        e.target.src = "assets/images/default-news.jpg";
                      }}
                    />
                  </div>
                </a>

                {/* Content */}
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Category Badge */}
                  <span style={{
                    display: 'inline-block',
                    width: 'fit-content',
                    backgroundColor: '#ECFDF5',
                    color: '#059669',
                    padding: '3px 8px',
                    borderRadius: '3px',
                    fontSize: '10px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.3px',
                    marginBottom: '10px',
                    lineHeight: '1'
                  }}>
                    {news.category || 'News'}
                  </span>

                  <a href={`/${slugifyCategory(news?.category)}/${news._id}`} style={{ textDecoration: 'none', color: 'inherit', flex: 1 }}>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: '#111827',
                      marginBottom: '12px',
                      lineHeight: '1.4',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {news.title}
                    </h3>
                    <p style={{
                      color: '#6B7280',
                      fontSize: '14px',
                      lineHeight: '1.6',
                      marginBottom: '16px',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {news.description}
                    </p>
                  </a>

                  {/* Footer */}
                  <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid #E5E7EB' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: '#9CA3AF', fontSize: '13px' }}>
                        {new Date(news.publicationDate).toLocaleDateString('en-US', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </span>
                      <a href={`/${slugifyCategory(news?.category)}/${news._id}`} style={{
                        color: '#059669',
                        textDecoration: 'none',
                        fontSize: '14px',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}>
                        Read More <span>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>

    {/* Social Media Feed */}
    <div className='container' style={{marginTop: 80, marginBottom: 0}}>
       <div style={{ display: 'flex', justifyContent: 'center', margin: '0 auto' }}>
      <iframe
        src="https://www.juicer.io/api/feeds/forlandtanzania_/iframe"
        frameBorder="0"
        width="100%"
        height="600"
        style={{ display: 'block' }}
        title="Juicer Feed"
      ></iframe>
    </div>
    </div>
  </section>
            </Layout>
          </>
        );
      };
      
      export default Home;