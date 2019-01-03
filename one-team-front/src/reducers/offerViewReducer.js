import { OPEN_MODAL, CLOSE_MODAL } from "../actions/types";

const initialState = {
  openModal: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        openModal: action.payload
      };
    case CLOSE_MODAL:
      return {
        ...state,
        openModal: action.payload
      };
    default:
      return state;
  }
};
