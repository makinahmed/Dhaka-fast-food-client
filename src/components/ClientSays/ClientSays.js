import React from "react";
import "./clientSays.css";
import client1 from '../../asstes/avatar-1.jpg';
import client2 from '../../asstes/avatar-2.jpg';
import client3 from '../../asstes/avatar-3.jpg';
import { AiOutlineStar } from "react-icons/ai";

function ClientSays() {
  return (
    <div className="container-fluid client-says-container">
      <div className="row ">
        <div className="col-sm-12 col-sm-6 col-lg-4   mx-auto client-says-cart">
          <div className="c-cart">
            <div className="client-says-header">
              <div className="client-profile">
                <div className="client-img">
                  <img src={client1} alt="" />
                </div>
                <div className="client-name">
                  <h2 className="fs-5 fw-bolder">ROSE</h2>
                  <p>DESIGN</p>
                </div>
              </div>
              <div className="client-rating">
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
            </div>
            <p className="mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Cumque facere
              delectus harum inventore est repellendus hic quasi praesentium
              sunt ullam!
            </p>
          </div>
        </div>{" "}
        <div className="col-sm-12 col-sm-6 col-lg-4   mx-auto client-says-cart">
          <div className="c-cart">
            <div className="client-says-header">
              <div className="client-profile">
                <div className="client-img">
                  <img src={client1} alt="" />
                </div>
                <div className="client-name">
                  <h2 className="fs-5 fw-bolder">ROSE</h2>
                  <p>DESIGN</p>
                </div>
              </div>
              <div className="client-rating">
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
            </div>
            <p className="mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Cumque facere
              delectus harum inventore est repellendus hic quasi praesentium
              sunt ullam!
            </p>
          </div>
        </div>{" "}
        <div className="col-sm-12 col-sm-6 col-lg-4   mx-auto client-says-cart">
          <div className="c-cart">
            <div className="client-says-header">
              <div className="client-profile">
                <div className="client-img">
                  <img src={client1} alt="" />
                </div>
                <div className="client-name">
                  <h2 className="fs-5 fw-bolder">ROSE</h2>
                  <p>DESIGN</p>
                </div>
              </div>
              <div className="client-rating">
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
            </div>
            <p className="mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Cumque facere
              delectus harum inventore est repellendus hic quasi praesentium
              sunt ullam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientSays;
