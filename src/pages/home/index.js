import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';


      const Home = () => {
        const [isPlaying, setIsPlaying] = useState(false);
        const [newsItems, setNewsItems] = useState([]);
        const [loading, setLoading] = useState(true);
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
            const res = await fetch(`https://forlandservice.onrender.com/news?page=${page}${queryCategory}`);
            const data = await res.json();

            const sortedNews = data.news
            .sort((a, b) => new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime())
            .slice(0, 2);
      
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
      
        useEffect(() => {
          fetchNews();
        }, []);

        
        const handlePlayClick = (e) => {
          console.log('playing')
          e.preventDefault();
          setIsPlaying(true);
        };


        function slugifyCategory(category) {
          if(category === 'Events and Trainings') {
            return 'events-and-training';
          }else {
            return category.toLowerCase().replace(/\s+/g, '-');
          }
        }
        
        
      

        useEffect(() => {
            if (window.$) {
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
            } else {
              console.error("jQuery is not loaded.");
            }
          }, []); // Runs only once on mount
    
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
          <Layout>
            {/* Banner Section */}
            <section className="xs-banner-sec xs-banner-v2-sec owl-carousel banner-slider">
              <div className="banner-slider-item banner-item1" style={{ backgroundImage: "url(https://res.cloudinary.com/dedfrilse/image/upload/v1743850116/qzkq5voi5goo0mkhmizi.png)" }}>
                <div className="slider-table">
                  <div className="slider-table-cell">
                    <div className="container">
                      <div className="col-lg-9 ">
                        <div className="banner-content">
                          <h2>Forestry, Land Use and Value Chains Development in Tanzania (FORLAND)
                          </h2>
                          <p>
                          FORLAND aims to contribute to a sustainable and inclusive forestry sector, contributing to Tanzania’s economic growth, poverty reduction, environmental sustainability and resilience against climate change impacts.
                          </p>
                          <div className="xs-btn-wraper">
                            <a href="/what-we-do" className="xs-btn"> Learn More </a>
                            <a href="/focus-areas" className="xs-btn fill">Focus Areas</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      
              <div className="banner-slider-item banner-item2" style={{ backgroundImage: "url(https://res.cloudinary.com/dedfrilse/image/upload/v1743850110/qgmdqrbdg9rktgidmcq5.png)" }}>
                <div className="slider-table">
                  <div className="slider-table-cell">
                    <div className="container">
                      <div className="col-lg-9">
                        <div className="banner-content">
                          <h2>Forestry, Land Use and Value Chains Development in Tanzania (FORLAND)</h2>
                          <p>
                          FORLAND aims to contribute to a sustainable and inclusive forestry sector, contributing to Tanzania’s economic growth, poverty reduction, environmental sustainability and resilience against climate change impacts.
                          </p>
                          <div className="xs-btn-wraper">
                            <a href="/what-we-do" className="xs-btn">Learn More</a>
                            <a href="/focus-areas" className="xs-btn fill">Focus Areas</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      
              <div className="banner-slider-item banner-item3" style={{ backgroundImage: "url(https://res.cloudinary.com/dedfrilse/image/upload/v1743850111/uqoysgpyasi31hyygpew.png)" }}>
                <div className="slider-table">
                  <div className="slider-table-cell">
                    <div className="container">
                      <div className="col-lg-9">
                        <div className="banner-content">
                          <h2>Forestry, Land Use and Value Chains Development in Tanzania (FORLAND)</h2>
                          <p style={{textAlign: 'left'}}>
                          FORLAND aims to contribute to a sustainable and inclusive forestry sector, contributing to Tanzania’s economic growth, poverty reduction, environmental sustainability and resilience against climate change impacts.
                          </p>
                          <div className="xs-btn-wraper">
                            <a href="/what-we-do" className="xs-btn">Learn More</a>
                            <a href="/focus-areas" className="xs-btn fill">Focus Areas</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
        <div style={{height: 470}} className="row">
          <div style={{height: 470}} className="col-lg-7 xs-padding-0 align-self-center">
            <div className="video-item">
              {isPlaying ? (
                <>
                  <img src="assets/images/video-img.jpg" alt="Video thumbnail" />
                  <a className="video-play-btn" onClick={() => handlePlayClick()}>
                    <i className="icon icon-play-button2"></i>
                  </a>
                </>
              ) : (
                <div className="video-iframe-container" style={{ position: 'relative', height: 470, overflow: 'hidden', width: '100%' }}>
                  <iframe 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 470 }}
                    src="https://www.youtube.com/embed/fOHY2GdPpZ4?autoplay=0&start=8" 
                    title="PFP Impact Documentary"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                  </iframe>
                </div>
              )}
            </div>
          </div>
          <div style={{height: 470}} className="col-lg-5 xs-padding-0">
            <div className="call-to-action-v2">
              <div className="call-back-content">
                <h3>PFP Impact Documentary</h3>
                <p style={{textAlign: 'justify'}} className="call-contact-text">
                This is a combined video documentary that displays the PFP journey since commenced and the impact the project created throughout its implementation.
                </p>
                <p style={{textAlign: 'justify'}} className="call-contact-text">
                For more documentary videos, please visit PFP Youtube channel to find more. Click the button below.
                </p>
                <form className="call-back-form">
                  <div className="form-group call-back-btn">
                    <button type="button" onClick={onPressLink} className="xs-btn xs-v2-btn">More Videos</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
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
            <section className="latest-news-sec section-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 align-self-center wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="300ms">
          <div className="latest-news-content">
            <h2 className="column-title">
              <span className="xs-title">From our blog</span>
              Latest News & Updates
            </h2>
            <p>
              Stay informed about the latest updates on FORLAND and related activities by visiting our blog page and following us on social media.
            </p>
            <a href="#" className="xs-btn">View All</a>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="row">
            {loading ? (
              // Show skeleton loaders while loading
              <>
                <div className="col-md-6 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="400ms">
                  <NewsSkeleton />
                </div>
                <div className="col-md-6 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="500ms">
                  <NewsSkeleton />
                </div>
              </>
            ) : (
              // Render actual news items when loaded
              newsItems.map(news => (
                <div 
                  key={news.id}
                  className="col-md-6 wow fadeInUp" 
                  data-wow-duration="1.5s" 
                  data-wow-delay={news.delay || "400ms"}
                >
                  <div className="single-latest-news">
                    <div className="latest-news-img">
                      <a href={`/${slugifyCategory(news?.category)}/${news._id}`}>
                        <img 
                          src={news.photo || "assets/images/default-news.jpg"} 
                          alt={news.title} 
                          onError={(e) => {
                            e.target.src = "assets/images/default-news.jpg";
                          }}
                        />
                      </a>
                    </div>
                    <div className="single-news-content">
                      <span className="date-info">
                        {new Date(news.publicationDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                      <h3 className="xs-post-title">
                        <a href={`/${slugifyCategory(news?.category)}/${news._id}`}>{news.title}</a>
                      </h3>
                      <p>{news?.description || news?.description.substring(0, 150)}...</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
            </Layout>
          </>
        );
      };
      
      export default Home;