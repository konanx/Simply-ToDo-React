import React, { useState, useContext, useRef } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const inputRef = useRef(null);
  const submitDodaj = (e) => {
    e.preventDefault();
    inputRef.current.focus();
    if (wartosc && !edycja.status) {
      const newZad = {
        id: new Date().getTime().toString(),
        title: wartosc,
        complete: false,
      };
      setZadania([...zadania, newZad]);
      setWartosc("");
      setAlert({
        active: true,
        text: "Pomyslnie dodano nowe zadanie",
        type: "",
      });
    } else if (wartosc && edycja.status) {
      const zmienionaLista = zadania.map((zad, index) => {
        if (zad.id === edycja.id) {
          return { id: zad.id, title: wartosc, complete: zad.complete };
        }
        return zad;
      });
      setZadania([...zmienionaLista]);
      setEdycja({ status: false, id: edycja.id });
      setWartosc("");
      setAlert({
        active: true,
        text: `Nowa nazwa zadania: ${wartosc}`,
        type: "",
      });
    }
  };

  const usunZadanie = ({ id }) => {
    const nowaLista = zadania.filter((zad) => zad.id !== id);
    setZadania([...nowaLista]);
    setAlert({ active: true, text: "Pomyslnie usunięto zadanie", type: "" });
    setEdycja({ status: false, id: 0 });
    setWartosc("");
  };

  const changeCheck = ({ id }) => {
    const zmienionaLista = zadania.map((zad, index) => {
      if (zad.id === id) {
        return { id: zad.id, title: zad.title, complete: !zad.complete };
      }
      return zad;
    });
    setZadania([...zmienionaLista]);
    setAlert({
      active: true,
      text: "Pomyslnie zmieniono status zadania",
      type: "",
    });
  };

  const funcEdycja = ({ id, title }) => {
    inputRef.current.focus();
    setEdycja({ status: true, id: id });
    setWartosc(title);
  };

  const firstRenderFetchData = () => {
    if (JSON.parse(localStorage.getItem("lista") != null)) {
      return JSON.parse(localStorage.getItem("lista"));
    } else {
      return [];
    }
  };

  const licznikZadan = () => {
    let { wszystkie, ukonczone } = zadania.reduce(
      (total, zadanie) => {
        const { complete } = zadanie;
        if (complete) {
          total.ukonczone++;
        }
        total.wszystkie++;

        return total;
      },
      { wszystkie: 0, ukonczone: 0 }
    );
    setIlosc({ wszystkie, ukonczone });
  };

  const clearList = () => {
    if (window.confirm("Czy na pewno chcesz usunąć wszystkie zadania?")) {
      setZadania([]);
      setWartosc("");
      setEdycja({ status: false });
      setAlert({
        active: true,
        text: "Usunięto wszystkie zadania",
        type: "",
      });
    }
  };

  const [display, setDisplay] = useState("all");
  const [ilosc, setIlosc] = useState({ wszystkie: 0, ukonczone: 0 });
  const [zadania, setZadania] = useState(firstRenderFetchData);
  const [wartosc, setWartosc] = useState("");
  const [edycja, setEdycja] = useState({ status: false, id: null });
  const [alert, setAlert] = useState({ active: false, text: "", type: "" });
  return (
    <AppContext.Provider
      value={{
        submitDodaj,
        zadania,
        setZadania,
        wartosc,
        setWartosc,
        usunZadanie,
        changeCheck,
        edycja,
        setEdycja,
        funcEdycja,
        alert,
        setAlert,
        inputRef,
        ilosc,
        licznikZadan,
        display,
        setDisplay,
        clearList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
