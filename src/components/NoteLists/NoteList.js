import classes from "./NoteList.module.css";
import Note from "./Note";

const NoteList = () => {
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
  return (
    <ul className={classes.notelists}>
      {Dummy_notes.map((note) => {
        return (
          <Note
            key={note.id}
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
