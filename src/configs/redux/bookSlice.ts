import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface BookState {
  selectedBook: string;
}

const initialState: BookState = {
  selectedBook: '',
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setSelectedBook(state, action: PayloadAction<string>) {
      state.selectedBook = action.payload;
    },
  },
});

export const { setSelectedBook } = bookSlice.actions;
export default bookSlice.reducer;
