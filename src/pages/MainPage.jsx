import TopBar from "../components/shared/TopBar";
import Banner from "../components/shared/Banner";
import JoinComm from "../components/main/JoinComm";
import CardList from "../components/shared/CardList";
import PostModal from "../components/main/PostModal";
import { modalState } from "../states/stateModal";
import { useRecoilState } from "recoil";
import Carousel from "../components/shared/Carousel";

function HomePage() {
  const [modalDataState] = useRecoilState(modalState);

  return (
    <>
      {!modalDataState.isOpen && <TopBar></TopBar>}
      <Banner
        url="https://c.animaapp.com/Y55gjoIa/img/banner.png"
        height="30vh"
      ></Banner>
      <JoinComm></JoinComm>
      <Carousel></Carousel>
      <CardList></CardList>
      <PostModal />
    </>
  );
}
export default HomePage;
