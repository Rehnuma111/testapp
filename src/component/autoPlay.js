import React, { Component } from "react";
import Slider from "react-slick";
import img1 from '../image/event1.jpg'

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 6000,
      autoplaySpeed: 6000,
      cssEase: "linear",
    };
    return (
      <div style={{ backgroundColor: "black" }}>
        <h2
          style={{
            textAlign: "center",
            color: "white",
            fontFamily: "Baloo Bhaijaan 2, cursive",
            fontFamily: "Comfortaa, cursive",
            fontFamily: "Karla, sans-serif",
            fontFamily: "Rowdies, cursive",
            marginTop: "2rem",
            marginBottom: "2rem"
          }}
        >
          Our Events
        </h2>
        <Slider {...settings}>
        <div>
            {/* <h3 style={{ color: "white" }}>Event 1</h3> */}
            <img src={img1} style={{width: "20rem", marginBottom: "3rem", borderRadius: "20px"}} />

          </div>
          <div>
            {/* <h3 style={{ color: "white" }}>Event 2</h3> */}
            <img src={img1} style={{width: "20rem", marginBottom: "3rem", borderRadius: "30px"}} />

          </div>
          <div>
            {/* <h3 style={{ color: "white" }}>Event 3</h3> */}
            <img src={img1} style={{width: "20rem", marginBottom: "3rem", borderRadius: "30px"}} />

          </div>
          <div>
            {/* <h3 style={{ color: "white" }}>Event 4</h3> */}
            <img src={img1} style={{width: "20rem", marginBottom: "3rem", borderRadius: "30px"}} />

          </div>
          <div>
            {/* <h3 style={{ color: "white" }}>Event 5</h3> */}
            <img src={img1} style={{width: "20rem", marginBottom: "3rem", borderRadius: "30px"}} />

          </div>
          <div>
            {/* <h3 style={{ color: "white" }}>Event 6</h3> */}
            <img src={img1} style={{width: "20rem", marginBottom: "3rem", borderRadius: "30px"}} />

          </div>
        </Slider>
      </div>
    );
  }
}
