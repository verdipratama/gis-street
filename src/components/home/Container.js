import React from 'react';
import Description from './Description';
import Banner from './Banner';

const Container = () => {
  return (
    <div className="page-header clear-filter">
      <div className="page-header-image home-back">
        <div className="container row">
          <Description />
          <Banner />
        </div>
      </div>
    </div>
  );
};

export default Container;
