import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { RecoilDevTools } from "recoil-toolkit";
import HomePage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import  MyPage  from './pages/MyPage';
import FollowPage  from './pages/FollowPage';
import SettingPage from './pages/SettingPage';
import IntroPage from './pages/IntroPage';
import FeedPage from './pages/FeedPage';
import TeamPage from './pages/TeamPage';
import MediaPage from './pages/MediaPage';
import NoticePage from './pages/NoticePage';
import MomentPage from './pages/MomentPage';
import MediaDetailPage from './pages/MediaDetailPage';
import SignUpPage from './pages/SignUpPage';

import {Amplify} from "aws-amplify";
import awsmobile from './aws-exports';

Amplify.configure(awsmobile)

const App = () => (
<BrowserRouter>
  <RecoilRoot>
    <RecoilDevTools forceSerialize={false} />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/follow" element={<FollowPage />} />
      <Route path="/setting" element={<SettingPage />} />
      <Route path="/intro" element={<IntroPage />} />
      <Route path="/feed" element={<FeedPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/media" element={<MediaPage />} />
      <Route path="/media-detail" element={<MediaDetailPage />} />
      <Route path="/notice" element={<NoticePage />} />
      <Route path="/moment" element={<MomentPage />} />
    </Routes>
  </RecoilRoot>
</BrowserRouter>
)
export default App
