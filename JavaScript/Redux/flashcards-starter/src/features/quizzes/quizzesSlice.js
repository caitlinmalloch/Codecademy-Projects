import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

const initialState = {
  quizzes: {}
};

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: initialState,
  reducers: {
    addQuiz: (state, action) => {
      const { quizId, name, topicId, cardIds } = action.payload;
      state.quizzes[quizId] = {
        id: quizId,
        name: name,
        topicId: topicId,
        cardIds: cardIds
      };
    }
  }
});

// Thunk to quiz related topic
export const addQuizForTopicId = (quiz) => {
  const { quizId, name, topicId, cardIds } = quiz;
  return (dispatch) => {
    dispatch(quizzesSlice.actions.addQuiz(quiz));
    dispatch(
      addQuizId({
        quizId: quizId,
        name: name,
        topicId: topicId,
        cardIds: cardIds
      })
    );
  };
};

// // Selectors
export const selectQuizzes = (state) => state.quizzes.quizzes;

// Actions and Reducers
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
