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
      //console.log(action.payload);
      state.filter = true;
      state.filterSubject = action.payload;
    },
    addSearchLetter(state, action) {
      //console.log(action.payload);
      if (action.payload.length === 0) {
        state.filter = true;
      } else {
        state.filter = false;
        const letters = action.payload.toLowerCase();
        state.searchLetter = letters;
      }
    },
  },
});

export const noteFilterActions = noteFilterSlice.actions;

export default noteFilterSlice.reducer;
