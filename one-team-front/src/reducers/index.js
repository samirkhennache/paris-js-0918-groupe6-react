import { combineReducers } from "redux";
import comopanyReducer from "./companyReducer";
import studentReducer from "./studentReducer";

const rootReducer = combineReducers({
  company: comopanyReducer,
  student: studentReducer
});

export default rootReducer;
