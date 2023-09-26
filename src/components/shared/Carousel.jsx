import React from "react";
import Slider from "react-slick";
import {
  Card,
  CardWraper,
  CarouselLayout,
  Line,
  SliderContainer,
} from "../../styles/shared/Carousel.style";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default function Carousel({ pTop, pLeft, pWidth, pHeight }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <CarouselLayout top={pTop} left={pLeft} width={pWidth} height={pHeight}>
      <p>My Community</p>
      <SliderContainer>
        <Slider {...settings}>
          <CardWraper>
            <Card
              alt="logo"
              src={process.env.PUBLIC_URL + "/img/rec1.png"}
            ></Card>
          </CardWraper>
          <CardWraper>
            <Card
              alt="logo"
              src={process.env.PUBLIC_URL + "/img/rec1.png"}
            ></Card>
          </CardWraper>
          <CardWraper>
            <Card
              alt="logo"
              src={process.env.PUBLIC_URL + "/img/rec1.png"}
            ></Card>
          </CardWraper>
          <CardWraper>
            <Card
              alt="logo"
              src={process.env.PUBLIC_URL + "/img/rec1.png"}
            ></Card>
          </CardWraper>
        </Slider>
      </SliderContainer>
      <Line />
    </CarouselLayout>
  );
}
