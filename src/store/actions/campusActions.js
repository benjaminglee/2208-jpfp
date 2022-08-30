import axios from "axios";

const SET_CAMPUSES = "SET_CAMPUSES";
const ADD_CAMPUS = "ADD_CAMPUS";
const UPDATE_CAMPUS = "UPDATE_CAMPUS";
const DELETE_CAMPUS = "DELETE_CAMPUS";

const _setCampuses = (campuses) => {
  return {
    type: SET_CAMPUSES,
    campuses,
  };
};

const _addCampus = (campus) => {
  return {
    type: ADD_CAMPUS,
    campus,
  };
};

const _updateCampus = (campus) => {
  return {
    type: UPDATE_CAMPUS,
    campus,
  };
};

const _deleteCampus = (campus) => {
  return {
    type: DELETE_CAMPUS,
    campus,
  };
};

export const setCampuses = () => {
  return async function (dispatch) {
    try {
      const { data: campuses } = await axios.get("api/campuses");
      dispatch(_setCampuses(campuses));
    } catch (error) {
      console.log(error);
    }
  };
};

// export const createCampus = (campus) => {
//     return async function (dispatch) {
//         const {data: campus} = await axios.post(create campus route, campus)
//         dispatch(_createCampus(campus));
//     }
// }

// export const deleteCampus = (campus) => {
//     return async function (dispatch) {
//         const {data: campus} = await axios.delete(create delete route w/ campus id)
//         dispatch(_deleteCampus(campus));
//     }
// }

// export const updateCampus = (campus) => {
//     return async function (dispatch) {
//         const {data: campus} = await axios.put(create campus update route, campus)
//         dispatch(_updateCampus(campus));
//     }
// }
