import { useGlobalContext } from "./context";
import {
  BsBookmarkCheckFill,
  BsBookmarkStarFill,
  BsBookmarkXFill,
} from "react-icons/bs";
const Sortowanie = () => {
  const { display, setDisplay, ilosc } = useGlobalContext();
  return (
    <div className="container-sortowanie">
      <div
        className="sortowanie-div"
        style={{ backgroundColor: "green" }}
        onClick={() => {
          setDisplay("complete");
        }}
      >
        <div className="sortowanie-count">{ilosc.ukonczone}</div>
        <BsBookmarkCheckFill />
        {display === "complete" && <div className="potym"></div>}
      </div>
      <div
        className="sortowanie-div"
        style={{ backgroundColor: "gray" }}
        onClick={() => {
          setDisplay("all");
        }}
      >
        <div className="sortowanie-count">{ilosc.wszystkie}</div>
        <BsBookmarkStarFill />
        {display === "all" && <div className="potym"></div>}
      </div>
      <div
        className="sortowanie-div"
        style={{ backgroundColor: "red" }}
        onClick={() => {
          setDisplay("todo");
        }}
      >
        <div className="sortowanie-count">
          {ilosc.wszystkie - ilosc.ukonczone}
        </div>
        <BsBookmarkXFill />
        {display === "todo" && <div className="potym"></div>}
      </div>
    </div>
  );
};
export default Sortowanie;
