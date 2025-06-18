import React from 'react';
import Publications from '../publications';

const Project = () => {


const pageContent = {
  title: "Project Technical Reports",
  bannerImage: "../assets/images/bg1.png",
  breadcrumb: "Project Technical Reports",
  metaTitle: "Project Technical Reports - FORLAND",
  to: '/forland/project-technical-reports',
  category: 'forland-technical',
};


  return (
    <Publications {...pageContent} />
  );
};

export default Project;
