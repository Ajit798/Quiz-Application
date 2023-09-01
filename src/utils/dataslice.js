import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "user",
  initialState: {
    quizData: [],
  },
  reducers: {
    addData: (state, action) => {
      state.quizData = action.payload;
    },
    updateData: (state, action) => {
      const { data, question } = action.payload;
      const index = state.quizData.findIndex(
        (ele) => ele.question === question
      );
      state.quizData[index].quizAnswer = data;
    },
  },
});

export const { addData, updateData } = dataSlice.actions;

export default dataSlice.reducer;
