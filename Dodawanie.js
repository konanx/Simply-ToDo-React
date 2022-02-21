import { useGlobalContext } from "./context";
const Dodaj = () => {
  const { submitDodaj, wartosc, setWartosc, edycja, inputRef } =
    useGlobalContext();
  return (
    <div>
      <form onSubmit={submitDodaj}>
        <input
          ref={inputRef}
          type="text"
          maxLength="20"
          value={wartosc}
          onChange={(e) => setWartosc(e.target.value)}
          className="dodaj"
        />
        <button type="submit" className="btn">
          {edycja.status ? "Edytuj zadanie" : "Dodaj zadanie"}
        </button>
      </form>
    </div>
  );
};
export default Dodaj;
