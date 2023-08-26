import "./App.css";
import AddNote from "./components/AddNote/AddNote";
import NoteFilter from "./components/NoteFilter/NoteFilter";
function App() {
  return (
    <div className="App">
      <AddNote />
      <NoteFilter />
    </div>
  );
}

export default App;
