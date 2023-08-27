import classes from "./NoteList.module.css";
import Note from "./Note";
import { useSelector } from "react-redux";

const NoteList = () => {
  const noteList = useSelector((state) => state.noteForm.noteList);
  const subj = useSelector((state) => state.noteFilter.filterSubject);
  const filter = useSelector((state) => state.noteFilter.filter);
  const searchTerm = useSelector((state) => state.noteFilter.searchLetter);

  let list;
  if (filter) {
    list = noteList.filter((note) => note.subject === subj);
  } else {
    list = noteList.filter((note) =>
      note.title.toLowerCase().includes(searchTerm)
    );
  }

  return (
    <ul className={classes.notelists}>
      {list.map((note) => {
        return (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            subject={note.subject}
            notes={note.notes}
          />
        );
      })}
    </ul>
  );
};

export default NoteList;
