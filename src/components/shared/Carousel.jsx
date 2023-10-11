import React, { useRef, useCallback, useEffect } from "react";
import {
  ButtonDiv,
  Card,
  CardWraper,
  NextBtn,
  PrevBtn,
  SliderContainer,
} from "../../styles/shared/Carousel.style";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { API } from "aws-amplify";
import { useRecoilValue } from "recoil";
import { userState } from "../../states/stateUser";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  dots: false,
};
export default function Carousel() {
  const slickRef = useRef(null);
  const previous = useCallback(() => slickRef.current.slickPrev(), []);
  const next = useCallback(() => slickRef.current.slickNext(), []);
  const userIdState = useRecoilValue(userState);

  const queryClient = useQueryClient();
  const teamUrl = queryClient.getQueryData(["info"]);

  return (
    <SliderContainer>
      {userIdState.userId && (
        <Slider {...settings} ref={slickRef}>
          {teamUrl &&
            teamUrl.map((data, idx) => (
              <CardWraper key={idx}>
                <Card $url={`${Object.values(data)[0]}`}></Card>
              </CardWraper>
            ))}
        </Slider>
      )}

      <ButtonDiv>
        <PrevBtn as={BsFillArrowLeftSquareFill} onClick={previous}>
          Previous
        </PrevBtn>
        <NextBtn as={BsFillArrowRightSquareFill} onClick={next}>
          Next
        </NextBtn>
      </ButtonDiv>
    </SliderContainer>
  );
}
