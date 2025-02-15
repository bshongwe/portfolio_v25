import { postAPI, getAPI, patchAPI, deleteAPI } from "./FetchData";

import {
  CREATE_CATEGORY,
  GET_CATEGORIES,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
} from "../constants/categoryConst";

import { ALERT } from "../constants/categoryConst"

export const createCategory = (name) => async (dispatch) => {
  try {
    dispatch({ type: ALERT, payload: { loading: true } });

    const res = await postAPI("category/create", { name });

    dispatch({
      type: CREATE_CATEGORY,
      payload: res.data.newCategory,
    });

    dispatch({ type: ALERT, payload: { loading: false } });
  } catch (err) {
    dispatch({ type: ALERT, payload: { errors: err.response.data.msg } });
  }
};

export const getCategories = () => async (dispatch) => {
  try {
    dispatch({ type: ALERT, payload: { loading: true } });

    const res = await getAPI("category/create");

    dispatch({
      type: GET_CATEGORIES,
      payload: res.data.allCategory,
    });

    dispatch({ type: ALERT, payload: { loading: false } });
  } catch (err) {
    dispatch({ type: ALERT, payload: { errors: err.response.data.msg } });
  }
};

export const updateCategory = (data) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_CATEGORY, payload: data });

    await patchAPI(`category/${data._id}`, {
      name: data.name,
    });
  } catch (err) {
    dispatch({ type: ALERT, payload: { errors: err.response.data.msg } });
  }
};

export const deleteCategory = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_CATEGORY, payload: id });
    await deleteAPI(`category/${id}`);
  } catch (err) {
    dispatch({ type: ALERT, payload: { errors: err.response.data.msg } });
  }
};
