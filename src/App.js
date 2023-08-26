import "./App.css";
import AddNote from "./components/AddNote/AddNote";
import NoteFilter from "./components/NoteFilter/NoteFilter";
import NoteList from "./components/NoteLists/NoteList";
import SearchBar from "./components/Search/SearchBar";
function App() {
  return (
    <div className="App">
      <AddNote />
      <SearchBar/>
      <NoteFilter />
      <NoteList/>
    </div>
  );
}

export default App;
