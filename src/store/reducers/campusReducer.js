const SET_CAMPUSES = "SET_CAMPUSES";
const CREATE_CAMPUS = "CREATE_CAMPUS";
const UPDATE_CAMPUS = "UPDATE_CAMPUS";
const DELETE_CAMPUS = "DELETE_CAMPUS";

const campusReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CAMPUSES:
      return action.campuses;
    case CREATE_CAMPUS:
      return [...state, action.campus];
    case UPDATE_CAMPUS:
      return state.map((campus) =>
        campus.id === action.campus.id ? action.campus : campus
      );
    case DELETE_CAMPUS:
      return state.filter((campus) => campus.id !== action.campus.id);
    default:
      return state;
  }
};

export default campusReducer;
