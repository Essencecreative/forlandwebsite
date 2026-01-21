import React from 'react';
import Publications from '../publications';

const Pfpadministrativeandmanagementreports = () => {

const pageContent = {
  title: "PFP Administrative & Management Reports",
  bannerImage: "assets/images/bg1.png",
  breadcrumb: "PFP Administrative & Management Reports",
  metaTitle: "PFP Administrative & Management Reports - FORLAND",
  to: '/pfp-administrative-and-management-reports',
  category: 'pfp-administrative-and-management',
};

  return (
    <Publications {...pageContent} />
  );
};

export default Pfpadministrativeandmanagementreports;
