const SET_STUDENTS = "SET_STUDENTS";
const CREATE_STUDENT = "CREATE_STUDENT";
const UPDATE_STUDENT = "UPDATE_STUDENT";
const DELETE_STUDENT = "DELETE_STUDENT";
const SET_STUDENT = "SET_STUDENT";

export const studentReducer = (state = [], action) => {
  switch (action.type) {
    case SET_STUDENTS:
      return action.students;
    case CREATE_STUDENT:
      return [...state, action.student];
    case UPDATE_STUDENT:
      return state.map((student) =>
        student.id === action.student.id ? action.student : student
      );
    case DELETE_STUDENT:
      return state.filter((student) => student.id !== action.student.id);
    default:
      return state;
  }
};

export const singleStudentReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_STUDENT:
      return action.student;
    case UPDATE_STUDENT:
      return { ...state, ...action.student };
    default:
      return state;
  }
};

export default studentReducer;
