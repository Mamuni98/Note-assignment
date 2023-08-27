import classes from "./NoteRead.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const NoteRead = () => {
  const readDetail = useSelector((state) => state.noteForm.readDetail);
  //console.log(readDeatil);
  const history = useNavigate();
  const stopReading = () => {
    history('/');
  }
  return (
    <div className={classes.read}>
      <h1>{readDetail.title}</h1>
      <p>{readDetail.notes}</p>
      <button onClick={stopReading}>Stop Reading</button>
    </div>
  );
};
export default NoteRead;
