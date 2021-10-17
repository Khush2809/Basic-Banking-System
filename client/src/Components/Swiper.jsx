import { Container } from "@mui/material";
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../scss/Swiper.scss";
import Slider from "react-slick";
import { Box } from "@mui/system";
import FeaturedNovel1 from "./../Icons/FeaturedNovel1.jpeg";
export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      //   centerPadding: "60px",
      slidesToShow: 3,
      swipeToSlide: true,

      afterChange: function (index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Container className="swiper">
          <Box>
            <h2>Swipe To Slide</h2>
            <Slider {...settings}>
              <div>
                <Box>
                  <Box className="d-flex justify-content-center">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                      className="img-box"
                    >
                      <img
                        src={FeaturedNovel1}
                        className="featuredNovel1"
                      ></img>
                      <h3>Chemistry Book</h3>
                    </Box>
                  </Box>
                </Box>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
              <div>
                <h3>7</h3>
              </div>
              <div>
                <h3>8</h3>
              </div>
              <div>
                <h3>9</h3>
              </div>
            </Slider>
          </Box>
        </Container>
      </div>
    );
  }
}
