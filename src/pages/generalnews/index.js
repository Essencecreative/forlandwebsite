import React from 'react';
import News from '../news';

const Generalnews = () => {

  return (
    <News
    pageTitle="General News"
    metaTitle="General News - FORLAND"
    bannerImage="/assets/images/bg1.png"
    to='/general-news'
    category='General News'
  />
  );
};

export default Generalnews;