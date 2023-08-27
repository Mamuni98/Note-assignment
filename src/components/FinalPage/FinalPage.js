import AddNote from "../AddNote/AddNote";
import SearchBar from "../Search/SearchBar";
import NoteFilter from "../NoteFilter/NoteFilter";
import NoteList from "../NoteLists/NoteList";

const FinalPage = () => {
  return (
    <>
      <AddNote />
      <SearchBar />
      <NoteFilter />
      <NoteList />
    </>
  );
};

export default FinalPage;
