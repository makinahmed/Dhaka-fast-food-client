import React from 'react';
import chef1 from '../../asstes/chef-1.jpg';
import chef2 from '../../asstes/chef-2.jpg';
import chef3 from '../../asstes/chef-3.jpg';
import './chef.css';
function Chefs( ) {
    return (
      <div className="container-fluid text-center">
        <div className="row">
          <p className='always-quality'>Always Quality</p>
          <h2 className='talent'>Our Talented Chefs</h2>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="chef">
              <div>
                <img src={chef1} alt="" />
              </div>
              <div className="chef-text">
                <p className="position">CHEF</p>
                <h2>WILLIAM SMITH</h2>
                <span>
                  Everything We Pizza, We Pizza With Love. Designer Fastfood.
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="chef">
              <div>
                <img src={chef2} alt="" />
              </div>
              <div className="chef-text">
                <p className="position">CHEF</p>
                <h2>WILLIAM SMITH</h2>
                <span>
                  Everything We Pizza, We Pizza With Love. Designer Fastfood.
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="chef">
              <div>
                <img src={chef3} alt="" />
              </div>
              <div className="chef-text">
                <p className="position">CHEF</p>
                <h2>WILLIAM SMITH</h2>
                <span>
                  Everything We Pizza, We Pizza With Love. Designer Fastfood.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Chefs;