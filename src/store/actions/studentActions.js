import axios from "axios";

const SET_STUDENTS = "SET_STUDENTS";
const CREATE_STUDENT = "CREATE_STUDENT";
const UPDATE_STUDENT = "UPDATE_STUDENT";
const DELETE_STUDENT = "DELETE_STUDENT";
const SET_STUDENT = "SET_STUDENT";

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

const _setStudent = (student) => {
  return {
    type: SET_STUDENT,
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

export const deleteStudent = (student) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.delete(`api/students/${student.id}`);
      dispatch(_deleteStudent(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const setStudent = (studentId) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`api/students/${studentId}`);
      dispatch(_setStudent(data));
    } catch (error) {
      console.log(error);
    }
  };
};

// export const updateStudent = (student) => {
//     return async function (dispatch) {
//         const {data: student} = await axios.put(create student update route, student)
//         dispatch(_updateStudent(student));
//     }
// }
