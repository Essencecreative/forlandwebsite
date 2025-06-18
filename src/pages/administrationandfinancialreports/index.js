import React from 'react';
import Publications from '../publications';

const Administration = () => {


const pageContent = {
  title: "Administration And Financial Reports",
  bannerImage: "../assets/images/bg1.png",
  breadcrumb: "Administration And Financial Reports",
  metaTitle: "Administration And Financial Reports - FORLAND",
  to: "/forland/administration-and-financial-reports",
  category: 'forland-admin'
};


  return (
    <Publications {...pageContent} />
  );
};

export default Administration;