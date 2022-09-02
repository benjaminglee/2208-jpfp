import axios from "axios";

const SET_CAMPUSES = "SET_CAMPUSES";
const CREATE_CAMPUS = "CREATE_CAMPUS";
const UPDATE_CAMPUS = "UPDATE_CAMPUS";
const DELETE_CAMPUS = "DELETE_CAMPUS";
const SET_CAMPUS = "SET_CAMPUS";

const _setCampuses = (campuses) => {
  return {
    type: SET_CAMPUSES,
    campuses,
  };
};

const _createCampus = (campus) => {
  return {
    type: CREATE_CAMPUS,
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

const _setCampus = (campus) => {
  return {
    type: SET_CAMPUS,
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

export const createCampus = (campus) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.post("api/campuses", campus);
      dispatch(_createCampus(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteCampus = (campus) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.delete(`api/campuses/${campus.id}`);
      dispatch(_deleteCampus(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateCampus = (campus) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.put(`api/campuses/${campus.id}`, campus);
      dispatch(_updateCampus(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const setCampus = (campusId) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`api/campuses/${campusId}`);
      dispatch(_setCampus(data));
    } catch (error) {
      console.log(error);
    }
  };
};
