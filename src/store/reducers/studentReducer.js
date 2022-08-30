const SET_STUDENTS = "SET_STUDENTS";
const ADD_STUDENT = "ADD_STUDENT";
const UPDATE_STUDENT = "UPDATE_STUDENT";
const DELETE_STUDENT = "DELETE_STUDENT";

const studentReducer = (state = [], action) => {
  switch (action.type) {
    case SET_STUDENTS:
      return action.students;
    case ADD_STUDENT:
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

export default studentReducer;
