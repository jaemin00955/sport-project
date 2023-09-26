import React from "react";
import TopBar from "../components/shared/TopBar";
import CodeModal from "../components/my/CodeModal";
import { useModal } from "../hooks/useModal";
import MyBanner from "../components/my/MyBanner";
import MyContent from "../components/my/MyContent";

export default function MyPage() {
  const { modalDataState } = useModal();
  return (
    <>
      {!modalDataState.isOpen && <TopBar />}
      <MyBanner />
      <MyContent />
      <CodeModal />
    </>
  );
}
