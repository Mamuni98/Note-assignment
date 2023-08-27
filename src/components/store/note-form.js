import { createSlice } from "@reduxjs/toolkit";
const Dummy_notes = [
  {
    id: "n1",
    title: "laws of mass",
    subject: "Physics",
    notes:
      "let's write some physics note along woth some chemistry, mathematics, english and biology. It's difficult to write all the notes only for testing pusposr so we only going to copy paste this in all other notes.",
  },
  {
    id: "n2",
    title: "Atomic reaction",
    subject: "Chemistry",
    notes:
      "let's write some physics note along woth some chemistry, mathematics, english and biology. It's difficult to write all the notes only for testing pusposr so we only going to copy paste this in all other notes.",
  },
  {
    id: "n3",
    title: "Derivative and integration",
    subject: "Mathematics",
    notes:
      "let's write some physics note along woth some chemistry, mathematics, english and biology. It's difficult to write all the notes only for testing pusposr so we only going to copy paste this in all other notes. let's write some physics note along woth some chemistry, mathematics, english and biology. It's difficult to write all the notes only for testing pusposr so we only going to copy paste this in all other notes.",
  },
  {
    id: "n4",
    title: "DNA replication",
    subject: "Biology",
    notes:
      "let's write some physics note along woth some chemistry, mathematics, english and biology. It's difficult to write all the notes only for testing pusposr so we only going to copy paste this in all other notes.",
  },
];
const showFormInitialState = {
  show: false,
  noteList: Dummy_notes,
  editData: {},
  readDetail: {},
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
    addNote(state, action) {
      const editArr = Object.keys(state.editData);
      if (editArr.length > 0) {
        const existingItemIndex = state.noteList.findIndex(
          (prevItem) => prevItem.id === state.editData.id
        );
        const updatedItem = { id: state.editData.id, ...action.payload };
        state.noteList[existingItemIndex] = updatedItem;
      } else {
        state.noteList.push(action.payload);
      }
      state.editData = {};
    },
    editNote(state, action) {
      state.editData = action.payload;
    },
    deleteNote(state, action) {
      const updatedList = state.noteList.filter(
        (item) => item.id !== action.payload
      );
      state.noteList = updatedList;
    },
    addNoteRead(state, action) {
      state.readDetail = action.payload;
    },
  },
});

export const showFormActions = showFormSlice.actions;

export default showFormSlice.reducer;
