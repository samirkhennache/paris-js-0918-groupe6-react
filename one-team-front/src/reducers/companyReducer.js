import { CONNECTION_COMPANY } from "../actions/types";

const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case CONNECTION_COMPANY:
      return {
        ...state,
        id: action.payload
      };
    default:
      return state;
  }
};
