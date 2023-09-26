import React from "react";
import TopBar from "../components/shared/TopBar";
import {
  VedioWraper,
  MediaDetailTextWraper,
  MediaDetailLikeIcon,
  MediaDetailLikeText,
  MediaDetailDivider,
  MediaDetailDesc,
} from "../styles/MediaDetail.style";
import NavBar from "../components/shared/NavBar";
import CommentList from "../components/shared/CommentList";

export default function MediaDetailPage() {
  return (
    <>
      <TopBar></TopBar>
      <NavBar></NavBar>
      <VedioWraper></VedioWraper>

      <CommentList></CommentList>

      <MediaDetailTextWraper>
        playlist | 그 때 그 시절 나의 '진짜' ᴄʏᴡᴏʀʟᴅ ʙɢᴍ
      </MediaDetailTextWraper>
      <MediaDetailLikeIcon></MediaDetailLikeIcon>
      <MediaDetailLikeText>1.4k</MediaDetailLikeText>
      <MediaDetailDivider></MediaDetailDivider>
      <MediaDetailDesc>
        조회수 34,781회 2023. 9. 16. #스트라이커 #레전드 #축구 #스포츠 #축구
        #카메룬 #레전드 #스트라이커 세상의 모든 것을 알아보는 채널, 에띵 구독 &
        좋아요 & 알림설정은 필수!! 📢BGM 효과음 Distributor: 저작권 걱정없는
        유튜브용 음원 & 무료 효과음 서비스 ‘뮤팟’ https://www.mewpot.com 📢
        아웃트로 브금 테일즈위버 OST - Reminiscence 📢 선수 영상 하이라이트
        Distributor : Brazil Scout / @ucnmu9cjyp2eybus5vdrlztw 📢 비즈니스 및
        문의 ething1919@gmail.com
      </MediaDetailDesc>
    </>
  );
}
