import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const defaultValue = {
  toke: "",
  user: {},
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: JSON.parse(localStorage.getItem("userInfo")) ?? defaultValue,
  reducers: {
    setUserInfoGlobal: (state, action) => action.payload,
  },
});

const { setUserInfoGlobal } = userInfoSlice.actions;
export default userInfoSlice.reducer;
export const loginUserThunk = (data) => (dispatch) => {
  const URL = "https://e-commerce-api.academlo.tech/api/v1/users/login";
  axios
    .post(URL, data)
    .then((res) => {
      dispatch(setUserInfoGlobal(res.data.data));
      localStorage.setItem("userInfo", JSON.stringify(res.data.data));
    })
    .catch((err) => console.log(err));
};

export const logoutThunk = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch(setUserInfoGlobal(res.data.data));
};
