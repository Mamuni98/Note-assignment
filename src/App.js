import "./App.css";
import AddNote from "./components/AddNote/AddNote";
import NoteFilter from "./components/NoteFilter/NoteFilter";
import NoteList from "./components/NoteLists/NoteList";
function App() {
  return (
    <div className="App">
      <AddNote />
      <NoteFilter />
      <NoteList/>
    </div>
  );
}

export default App;
