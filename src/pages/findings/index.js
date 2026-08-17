import React from 'react';
import Publications from '../publications';

const Findings = () => {


const pageContent = {
  title: "Findings",
  bannerImage: "../assets/images/bg1.png",
  breadcrumb: "Findings",
  metaTitle: "Findings - FORLAND",
  to: '/forland/findings',
  category: 'forland-findings',
};


  return (
    <Publications {...pageContent} />
  );
};

export default Findings;
