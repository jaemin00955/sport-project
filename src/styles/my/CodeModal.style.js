import styled from "styled-components";

export const ModalDimmer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;
export const ModalBody = styled.div`
  display: flex;
  flex-direction : column;
  width:70vw;
  height:80vh;
  border: 1px solid #cbcbcb;
  border-radius: 10px;
  background-color: #F3F3F6;
  border-radius: 30px;
  position : relative;

`;
export const ModalTitle = styled.div`
  position : absolute;
  font-size :2.5rem;
  font-weight:800;
  left: 15vw;
  top : 5vh;
`;
export const ModalCode = styled.input`
  border: 1px solid #cbcbcb;
  border-radius: 10px;
  background-color: #ffffff;
  border-radius: 30px;
  font-size :2.5rem;
  font-weight:800;
  margin-left: 15vw;
  margin-top : 20vh;
  width:30vw;
  height:15vh;
`;

export const ModalContent = styled.div`
  width:30vw;
  height:15vh;
  border: 1px solid #cbcbcb;
  border-radius: 10px;
  background-color: #F3F3F6;
  border-radius: 30px;
`;

export const ModalEmail = styled.div`
  width:30vw;
  height:15vh;
  border: 1px solid #cbcbcb;
  border-radius: 10px;
  background-color: #F3F3F6;
  border-radius: 30px;
`;

export const ModalConfirmBtn = styled.button`
  width:40vw;
  height:15vh;
  border: 3px solid #cbcbcb;
  border-radius: 10px;
  background-color: #F3F3F6;
  border-radius: 30px;
  // background-image: url(${process.env.PUBLIC_URL + "/img/ic.png"});

`;
