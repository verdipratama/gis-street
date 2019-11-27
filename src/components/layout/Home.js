import React from 'react';
import satu from '../../assets/img/banner/satu.png';
import dua from '../../assets/img/banner/dua.png';
import tiga from '../../assets/img/banner/tiga.png';

const Home = () => {
  return (
    <div className="wrapper">
      <div className="page-header clear-filter">
        <div className="page-header-image">
          <div className="container row">
            <div className="container col-md-6 col-sm-12">
              <div className="content-left brand">
                <h1 className="title-one">
                  <strong>Sistem Informasi</strong>
                </h1>
                <h1 className="title-one">Database Infrastruktur Jalan Berbasis GIS</h1>
                <h3 className="title-two">Provinsi ..... *dih kepo*</h3>
                <a href="#0" className="btn btn-info">
                  Login
                </a>
                {/* <h5 className="category category-absolute">
                  made with{' '}
                  <span role="img" aria-label="love">
                    💕
                  </span>{' '}
                  verdi pratama
                </h5> */}
              </div>
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
