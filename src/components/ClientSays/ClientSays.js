import React from "react";
import "./clientSays.css";
import client1 from '../../asstes/avatar-1.jpg';
import Slider from "react-slick";
import { AiOutlineStar } from "react-icons/ai";

function ClientSays() {
  const settings = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="container-fluid client-says-container">
      <div className="row ">
        <Slider {...settings}>
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
                ipsum dolor, sit amet consectetur adipisicing elit. Cumque
                facere delectus harum inventore est repellendus hic quasi
                praesentium sunt ullam!
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
                ipsum dolor, sit amet consectetur adipisicing elit. Cumque
                facere delectus harum inventore est repellendus hic quasi
                praesentium sunt ullam!
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
                ipsum dolor, sit amet consectetur adipisicing elit. Cumque
                facere delectus harum inventore est repellendus hic quasi
                praesentium sunt ullam!
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default ClientSays;
