import React from 'react';
import Publications from '../publications';

const Forms = () => {


const pageContent = {
  title: "Forms And Guidelines",
  bannerImage: "../assets/images/bg1.png",
  breadcrumb: "Forms And Guidelines",
  metaTitle: "Forms And Guidelines - FORLAND",
  to: '/forland/forms-and-guidelines',
  category: 'forland-forms'
};


  return (
    <Publications {...pageContent} />
  );
};

export default Forms;
