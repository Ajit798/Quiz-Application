import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../utils/userslice";
import dataSlice from "../utils/dataslice";

const store = configureStore({
  reducer: {
    user: userSlice,
    data: dataSlice,
  },
});

export default store;
