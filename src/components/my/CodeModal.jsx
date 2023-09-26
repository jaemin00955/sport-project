import React, { useRef } from "react";
import { useModal } from "../../hooks/useModal";
import {
  ModalBody,
  ModalDimmer,
  ModalCode,
  ModalConfirmBtn,
  ModalContent,
  ModalEmail,
  ModalTitle,
} from "../../styles/my/CodeModal.style";

export default function MediaModal() {
  const { modalDataState, closeModal } = useModal();
  const dimmerRef = useRef();

  return (
    <>
      {modalDataState.isOpen && (
        <ModalDimmer
          ref={dimmerRef}
          onClick={(e) => {
            if (e.target === dimmerRef.current) {
              closeModal();
            }
          }}
        >
          <ModalBody>
            <ModalTitle>등록할 코드를 입력하세요.</ModalTitle>
            <ModalCode placeholder="코드 입력"></ModalCode>
            <ModalContent>
              한번 등록된 코드는 다른~~ 아래 로그인 계정 정보 확인해주세요.
            </ModalContent>
            <ModalEmail>이메일 asdfdf@asdfe.com</ModalEmail>
            <ModalConfirmBtn>등록하기</ModalConfirmBtn>
          </ModalBody>
        </ModalDimmer>
      )}
    </>
  );
}
