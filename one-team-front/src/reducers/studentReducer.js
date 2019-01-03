import { CONNECTION_STUDENT } from "../actions/types";

const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case CONNECTION_STUDENT:
      return {
        ...state,
        id: action.payload
      };
    default:
      return state;
  }
};
