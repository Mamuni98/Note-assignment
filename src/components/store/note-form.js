import { createSlice } from "@reduxjs/toolkit";

const showFormInitialState = {
  show: false,
};

const showFormSlice = createSlice({
  name: "showNoteForm",
  initialState: showFormInitialState,
  reducers: {
    showForm(state) {
      state.show = true;
    },
    hideForm(state) {
      state.show = false;
    },
  },
});

export const showFormActions = showFormSlice.actions;

export default showFormSlice.reducer;