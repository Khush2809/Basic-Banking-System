import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../scss/CarouselComponent.scss";
import jeeBooks from "./../Icons/jeeBooks.jpg";
import buy2Books from "./../Icons/buy2Books.jpg";
import chemistryBooks from "./../Icons/chemistryBooks.png";
import Img5 from "./../Icons/Img5.jpg";
import Img6 from "./../Icons/Img6.jpg";
import { Container } from "@mui/material";

const CarouselComponent = () => {
  return (
    <div>
      <Container>
        <Carousel>
          <div>
            <img src={jeeBooks} alt="Jee Books" className="img" />
          </div>
          <div>
            <img src={buy2Books} alt="Jee Books" className="img" />
          </div>
          <div>
            <img src={Img6} alt="Jee Books" className="img" />
          </div>
          <div>
            <img src={Img5} alt="Jee Books" className="img" />
          </div>
        </Carousel>
      </Container>
    </div>
  );
};

export default CarouselComponent;
