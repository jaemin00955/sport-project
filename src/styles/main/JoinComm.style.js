import styled from "styled-components";

export const JoinWraper = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 4px 4px #00000040;
  position: absolute;
  width: 20vw;
  height: 55vh;
  left: 2vw;
  top: 45vh;
  & > .joinText {
    position: absolute;
    top: 20px;
    left: 20px;
  }
  & > .teamMember {
    position: absolute;
    top: 90px;
    left: 20px;
  }
  & > .see {
    position: absolute;
    top: 50vh;
    left: 8vw;
  }
`;

export const JoinText = styled.div`
  color: #364045;
  font-family: "Poppins", Helvetica;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  width: 10vw;
`;

export const Line = styled.hr`
  height: 2px;
  left: 18px;
  position: absolute;
  top: 55px;
  width: 18vw;
`;
export const TeamWraper = styled.div``;
export const TeamMember = styled.div`
  display: flex;
  width: 18vw;
  height: 50px;
  padding: 15px;
  position: relative;
  & > .avatar {
    left: 0.1vw;
    top: 10px;
  }
  & > .name {
    left: 4vw;
    top: 15px;
    font-size: 20px;
  }
  & > .league {
    left: 4vw;
    top: 45px;
    font-size: 15px;
  }
  & > .followBtn {
    right: 4vw;
    top: 20px;
  }
`;
export const Avatar = styled.div`
  background-color: #bbccdc;
  border-radius: 33.33px/28.17px;
  height: 5vh;
  position: absolute;
  width: 3vw;
`;

export const TeamName = styled.div`
  color: #48555b;
  font-family: "Poppins", Helvetica;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  width: 124px;
`;
export const LeagueName = styled.div`
  color: #5e6f78;
  font-family: "Poppins", Helvetica;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  width: 97px;
`;
export const FollowBtn = styled.button`
  background-image: url(${process.env.PUBLIC_URL + "/img/ic.png"});
  height: 2.3vh;
  position: absolute;
  width: 1.3vw;
`;

export const SeeAllText = styled.div`
  color: #70848e;
  font-family: "Poppins", Helvetica;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  width: 10vw;
`;
