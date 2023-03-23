import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topics: {}
};

const topicsSlice = createSlice({
  name: "topics",
  initialState: initialState,
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id: id,
        name: name,
        icon: icon,
        quizIds: []
      };
    },
    addQuizId: (state, action) => {
      const { quizId, topicId } = action.payload;
      state.topics[topicId].quizIds.push(quizId);
    }
  }
});

// // Selectors
export const selectTopics = (state) => state.topics.topics;

// Actions and Reducers
export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;
