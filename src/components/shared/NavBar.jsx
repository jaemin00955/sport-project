import React from "react";
import {
  BannerContainer,
  FeedText,
  MediaText,
  NavText,
  TeamText,
} from "../../styles/shared/NavBar.style";

export default function NavBar() {
  return (
    <BannerContainer>
      <NavText>
        <FeedText>FEED</FeedText>
        <TeamText>TEAM</TeamText>
        <MediaText>MEDIA</MediaText>
      </NavText>
    </BannerContainer>
  );
}
