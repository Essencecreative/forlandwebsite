import React from 'react';
import Publications from '../publications';

const Forvactechnicalreports = () => {


const pageContent = {
  title: "FORVAC Technical Reports",
  bannerImage: "assets/images/bg1.png",
  breadcrumb: "FORVAC Technical Reports",
  metaTitle: "FORVAC Technical Reports - FORLAND",
  to: '/forvac-technical-reports',
  category: 'forvac',
};


  return (
    <Publications {...pageContent} />
  );
};

export default Forvactechnicalreports;



;

