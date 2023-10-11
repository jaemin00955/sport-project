import TopBar from "../components/shared/TopBar";
import Banner from "../components/shared/Banner";
import JoinComm from "../components/main/JoinComm";
import CardList from "../components/shared/CardList";
import PostModal from "../components/main/PostModal";
import { modalState } from "../states/stateModal";
import { userState } from "../states/stateUser";
import { useRecoilState, useRecoilValue } from "recoil";
import Carousel from "../components/shared/Carousel";
// import { useAuthenticator } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import { MyCommText } from "../styles/Main.style";
import { useQuery, useQueryClient } from "@tanstack/react-query";

function MainPage() {
  const [modalDataState] = useRecoilState(modalState);
  const userIdState = useRecoilValue(userState);
  const queryClient = useQueryClient();

  const getUserTeamId = async (userId) => {
    const data = await API.get("userApi", `/info/${userId}`);
    await queryClient.setQueryData(["info"], data[0].userTeamId);
    return data[0].userTeamId;
  };

  const { isFetching } = useQuery(
    ["userTeamId"],
    () => getUserTeamId(userIdState.userId),
    {
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      enabled: !!userIdState.userId,
    }
  );
  if (isFetching) return <h3>Loading!!</h3>;

  return (
    <>
      {!modalDataState.isOpen && <TopBar></TopBar>}
      <Banner
        url="https://c.animaapp.com/Y55gjoIa/img/banner.png"
        height="30vh"
      ></Banner>
      <JoinComm></JoinComm>
      <MyCommText>My Community</MyCommText>
      <Carousel></Carousel>
      {userIdState.userId && <CardList></CardList>}
      {modalDataState.isOpen && <PostModal />}
    </>
  );
}
export default MainPage;
