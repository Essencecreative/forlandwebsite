import React from 'react';
import Publications from '../publications';

const pageContent = {
  title: "PFP Technical Reports",
  bannerImage: "assets/images/bg1.png",
  breadcrumb: "PFP Technical Reports",
  metaTitle: "PFP Technical Reports - FORLAND",
  category: "pfp",
};

const Pfptechnicalreports = () => {

  return (
    <Publications {...pageContent} />
  );
};

export default Pfptechnicalreports;
