import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../sliceReducer/BookReducer';

const Store = configureStore({
  reducer: {
    book: bookReducer,
  },
});

export default Store;
