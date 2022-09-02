import studentReducer from "./studentReducer";
import campusReducer from "./campusReducer";
import { singleCampusReducer } from "./campusReducer";
import { singleStudentReducer } from "./studentReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  students: studentReducer,
  campuses: campusReducer,
  student: singleStudentReducer,
  campus: singleCampusReducer,
});

export default rootReducer;
