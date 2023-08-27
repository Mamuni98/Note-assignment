import "./App.css";
import FinalPage from "./components/FinalPage/FinalPage";
import NoteRead from "./components/NoteRead/NoteRead";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FinalPage />} />
        <Route path="/:noteId" element={<NoteRead />} />
      </Routes>
    </div>
  );
}

export default App;
