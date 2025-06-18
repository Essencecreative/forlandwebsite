import React from 'react';
import Publications from '../publications';

const Brochure = () => {


const pageContent = {
  title: "Brochure And Newsletters",
  bannerImage: "../assets/images/bg1.png",
  breadcrumb: "Brochure And Newsletters",
  metaTitle: "Brochure And Newsletters - FORLAND",
  to: '/forland/brochure-and-newsletters',
    category: 'forland-brochure'
};


  return (
    <Publications {...pageContent} />
  );
};

export default Brochure;

