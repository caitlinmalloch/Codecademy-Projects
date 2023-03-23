import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: {}
};

const cardsSlice = createSlice({
  name: "cards",
  initialState: initialState,
  reducers: {
    addCard: (state, action) => {
      const { cardId, front, back } = action.payload;
      state.cards[cardId] = {
        id: cardId,
        front: front,
        back: back
      };
    }
  }
});

// // Selectors
export const selectCards = (state) => state.cards.cards;

// Actions and Reducers
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
