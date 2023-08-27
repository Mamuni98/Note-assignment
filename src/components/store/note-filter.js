import { createSlice } from "@reduxjs/toolkit";

const noteFilterInitialState = {
  filter: true,
  filterSubject: "Physics",
  searchLetter: "",
};

const noteFilterSlice = createSlice({
  name: "notesFilter",
  initialState: noteFilterInitialState,
  reducers: {
    addFilterSubject(state, action) {
      state.filter = true;
      state.filterSubject = action.payload;
    },
    addSearchLetter(state, action) {
      if (action.payload.length === 0) {
        state.filter = true;
      } else {
        state.filter = false;
        state.searchLetter = action.payload;
      }
    },
  },
});

export const noteFilterActions = noteFilterSlice.actions;

export default noteFilterSlice.reducer;
