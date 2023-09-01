import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userStatus: false,
  },
  reducers: {
    updateUser: (state, action) => {
      if (action.payload !== "") {
        state.userStatus = true;
        localStorage.setItem("userStatus", "loggedIn");
      }
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
