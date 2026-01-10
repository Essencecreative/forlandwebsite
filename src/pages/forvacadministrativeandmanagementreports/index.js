import React from 'react';
import Publications from '../publications';

const Forvacadministrativeandmanagementreports = () => {


const pageContent = {
  title: "FORVAC Administrative & Management Reports",
  bannerImage: "assets/images/bg1.png",
  breadcrumb: "FORVAC Administrative & Management Reports",
  metaTitle: "FORVAC Administrative & Management Reports - FORLAND",
  to: '/forvac-administrative-and-management-reports',
  category: 'forvac-administrative-and-management',
};


  return (
    <Publications {...pageContent} />
  );
};

export default Forvacadministrativeandmanagementreports;
