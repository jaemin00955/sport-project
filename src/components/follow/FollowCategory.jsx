import React from "react";
import {
  CategorySliderWraper,
  CategoryText,
  CategoryWraper,
  Divider,
  League,
  LeagueSliderWraper,
} from "../../styles/follow/FollowCategory.style";

export default function FollowCategory() {
  return (
    <CategoryWraper>
      <CategoryText>종목별 카테고리</CategoryText>
      <CategorySliderWraper className="slide">
        {/* <Carousel responsive={responsive}>
        <CategoryItem>야구</CategoryItem>
        <CategoryItem>해외야구</CategoryItem>
        <CategoryItem>축구</CategoryItem>
        <CategoryItem>해외축구</CategoryItem>
        <CategoryItem>농구</CategoryItem>
      </Carousel> */}
      </CategorySliderWraper>
      <Divider />
      <League>선택 안함</League>
      <League>KBO</League>
      <LeagueSliderWraper>
        {/* <Carousel responsive={responsive}>
        <CategoryItem>Item 1</CategoryItem>
        <CategoryItem>Item 1</CategoryItem>
        <CategoryItem>Item 1</CategoryItem>
        <CategoryItem>Item 1</CategoryItem>
        <CategoryItem>Item 1</CategoryItem>
      </Carousel> */}
      </LeagueSliderWraper>
    </CategoryWraper>
  );
}
