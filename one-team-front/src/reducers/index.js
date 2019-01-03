import { combineReducers } from "redux";
import comopanyReducer from "./companyReducer";
import studentReducer from "./studentReducer";
import offerViewReducer from "./offerViewReducer";

const rootReducer = combineReducers({
  company: comopanyReducer,
  student: studentReducer,
  offerViewModal: offerViewReducer
});

export default rootReducer;
