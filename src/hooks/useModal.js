import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../states/stateModal";


export const useModal = () => {
  const [modalDataState, setModalDataState] = useRecoilState(modalState);

  const closeModal = useCallback(
    () =>
      setModalDataState((prev) => {
        return { ...prev, isOpen: false };
      }),
    [setModalDataState]
  );

  const openModal = useCallback(
    () =>
      setModalDataState({
        isOpen: true,
      }),
    [setModalDataState]
  );

  return { modalDataState, closeModal, openModal };
};
