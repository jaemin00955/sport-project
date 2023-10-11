import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { RecoilDevTools } from "recoil-toolkit";
import MainPage from './pages/MainPage';
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

import { Amplify } from "aws-amplify"
import awsmobile from "../src/aws-exports"
import { Authenticator } from '@aws-amplify/ui-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
Amplify.configure(awsmobile)

const queryClient = new QueryClient()
const App = () => (
  <QueryClientProvider client={queryClient}>
  <Authenticator.Provider>
    <BrowserRouter>
      <RecoilRoot>
        <RecoilDevTools forceSerialize={false} />
        <Routes>
          {/* 나중에 routes.js파일 만들어서 path들 전역변수로 바꿔주기 */}
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/follow" element={<FollowPage />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="/:id/intro" element={<IntroPage />} />
          <Route path="/:id/feed" element={<FeedPage />} />
          <Route path="/:id/team" element={<TeamPage />} />
          <Route path="/:id/media" element={<MediaPage />} />
          <Route path="/:id/media-detail" element={<MediaDetailPage />} />
          <Route path="/:id/notice" element={<NoticePage />} />
          <Route path="/:id/moment" element={<MomentPage />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  </Authenticator.Provider>
  <ReactQueryDevtools/>
</QueryClientProvider>

)
export default App
