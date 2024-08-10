import React from 'react'
import "./body.css"
import catalert from "../../../public/images/catalert.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const body = () => {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        afterChange: function(index) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
        }
      };
  return (
    <div className="body">
      <div className="left">
      <div className="text">
        <h1>CATaract Alert!!</h1>
        <div className="ps">
        <p>Welcome to CATaract Alert!!—your essential tool for seamless</p>
        <p>equipment maintenance and inspections. Easily record and manage</p>
        <p>all your service tasks, track equipment health, and receive real-time</p>
        <p>alerts to ensure every machine is operating at its best. Keep your</p>
        <p>operations smooth and efficient with CATaract Alert!!</p>
        </div>
      </div>
      <div className="text2">
        <p>Choose domain to proceed</p>
        <div className="slider-container">
      <Slider {...settings}>
        <div className="slide">
          <h3>Service History</h3>
        </div>
        <div className="slide">
          <h3>Renewal</h3>
        </div>
        <div className="slide">
          <h3>Maintenence</h3>
        </div>
      </Slider>
    </div>
      </div>
      </div>
      <div className="right">
        <img src={catalert} className="img"/>
        <div className="button"><p>NEXT -{">"}</p></div>
      </div>
      <h1 className="cat">CAT</h1>
    </div>
  )
}

export default body
