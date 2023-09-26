import React from "react";
import {
  CategoryContainer,
  MemberText,
  NewText,
  TotalText,
} from "../../styles/media/CtgNavBar.style";

export default function CtgNavBar() {
  return (
    <CategoryContainer>
      <TotalText>전체 미디어</TotalText>
      <NewText>최신 미디어</NewText>
      <MemberText>멤버쉽 미디어</MemberText>
    </CategoryContainer>
  );
}
