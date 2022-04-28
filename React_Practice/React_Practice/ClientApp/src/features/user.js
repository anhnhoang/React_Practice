import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "", age: 0, email: "" };
const userSlice = createSlice({
  name: "user",
  initialState: { value: initialState },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },

    logout: (state, action) => {
      state.value = initialState;
      //reset State
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
