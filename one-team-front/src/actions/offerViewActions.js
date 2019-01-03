import { OPEN_MODAL, CLOSE_MODAL } from "./types";

export const openModal = open => ({
  type: OPEN_MODAL,
  payload: !open
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
  payload: false
});
