import React from 'react';
import satu from '../../assets/img/banner/satu.png';
import dua from '../../assets/img/banner/dua.png';
import tiga from '../../assets/img/banner/tiga.png';

const Banner = () => {
  return (
    <div className="col-md-6 col-sm-12">
      <div className="content-left brand">
        <div className="row">
          <div className="col-md-12 hidden-sm-down">
            <div className="col-md-6 offset-md-2">
              <a href="#0">
                <img src={satu} alt="" />
              </a>
            </div>
          </div>
          <div className="col-md-6 hidden-sm-down">
            <a href="#0">
              <img src={dua} alt="" />
            </a>
          </div>
          <div className="col-md-6 hidden-sm-down">
            <a href="#0">
              <img src={tiga} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
