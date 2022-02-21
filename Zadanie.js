import { useGlobalContext } from "./context";
import {
  AiFillEdit,
  AiFillDelete,
  AiFillCheckSquare,
  AiFillCloseSquare,
} from "react-icons/ai";
const Zadanie = ({ id, title, complete }) => {
  const { usunZadanie, changeCheck, funcEdycja } = useGlobalContext();
  return (
    <div className="zadanie">
      <div className="zad">{title}</div>
      <span
        className="delete"
        onClick={() => {
          funcEdycja({ id, title });
        }}
      >
        <AiFillEdit />
      </span>
      <span
        className={`${complete} ? "true" : "false"`}
        onClick={() => changeCheck({ id })}
      >
        {complete ? <AiFillCheckSquare /> : <AiFillCloseSquare />}
      </span>
      <span
        className="last"
        onClick={() => {
          usunZadanie({ id });
        }}
      >
        <AiFillDelete />
      </span>
    </div>
  );
};
export default Zadanie;
