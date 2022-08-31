import axios from "axios";

const SET_STUDENTS = "SET_STUDENTS";
const CREATE_STUDENT = "CREATE_STUDENT";
const UPDATE_STUDENT = "UPDATE_STUDENT";
const DELETE_STUDENT = "DELETE_STUDENT";

const _setStudents = (students) => {
  return {
    type: SET_STUDENTS,
    students,
  };
};

const _createStudent = (student) => {
  return {
    type: CREATE_STUDENT,
    student,
  };
};

const _updateStudent = (student) => {
  return {
    type: UPDATE_STUDENT,
    student,
  };
};

const _deleteStudent = (student) => {
  return {
    type: DELETE_STUDENT,
    student,
  };
};

export const setStudents = () => {
  return async function (dispatch) {
    try {
      const { data: students } = await axios.get("api/students");
      dispatch(_setStudents(students));
    } catch (error) {
      console.log(error);
    }
  };
};

export const createStudent = (student) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.post("api/students", student);
      dispatch(_createStudent(data));
    } catch (error) {
      console.log(error);
    }
  };
};

// export const deleteStudent = (student) => {
//     return async function (dispatch) {
//         const {data: student} = await axios.delete(create delete route w/ student id)
//         dispatch(_deleteStudent(student));
//     }
// }

// export const updateStudent = (student) => {
//     return async function (dispatch) {
//         const {data: student} = await axios.put(create student update route, student)
//         dispatch(_updateStudent(student));
//     }
// }
