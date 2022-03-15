import Zadanie from "./Zadanie";
import { useEffect } from "react";
import { useGlobalContext } from "./context";
const ListaZadan = () => {
  const { zadania, licznikZadan, display } = useGlobalContext();
  useEffect(() => {
    localStorage.setItem("lista", JSON.stringify(zadania));
    licznikZadan();
  }, [zadania]);
  if (zadania.length === 0) {
    return <div className="empty">Ale tutaj pusto...</div>;
  }
  return (
    <div className="listaZadan">
      {zadania.map((zadanie) => {
        if (display === "todo") {
          if (!zadanie.complete) {
            return <Zadanie key={zadanie.id} {...zadanie}></Zadanie>;
          }
        } else if (display === "complete") {
          if (zadanie.complete) {
            return <Zadanie key={zadanie.id} {...zadanie}></Zadanie>;
          }
        } else {
          return <Zadanie key={zadanie.id} {...zadanie}></Zadanie>;
        }
        return [];
      })}
    </div>
  );
};
export default ListaZadan;
