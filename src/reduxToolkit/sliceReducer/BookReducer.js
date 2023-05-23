import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    updateBook: (state, action) => {
      const { id, title, description } = action.payload;
      const bookIndex = state.findIndex((book) => book.id === id);
      if (bookIndex !== -1) {
        state[bookIndex].title = title;
        state[bookIndex].description = description;
      }
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      return state.filter((book) => book.id !== id);
    },
    deleteAllBooks: () => {
      return initialState;
    },
  },
});

export const { addBook, updateBook, deleteBook, deleteAllBooks } = bookSlice.actions;
export default bookSlice.reducer;