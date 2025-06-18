import React from 'react';
import Publications from '../publications';

const InstitutionalSupportReport = () => {


const pageContent = {
  title: "Institutional Support",
  bannerImage: "../assets/images/bg1.png",
  breadcrumb: "Institutional Support",
  metaTitle: "Institutional Support - FORLAND",
  to: '/forland/institutional-support',
  category: 'forland-institutional'
};


  return (
    <Publications {...pageContent} />
  );
};

export default InstitutionalSupportReport;