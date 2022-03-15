import { useGlobalContext } from "./context";
const Delete = () => {
  const { clearList, zadania } = useGlobalContext();
  return (
    <div>
      {zadania.length > 0 && (
        <div
          onClick={() => {
            clearList();
          }}
          className="del"
        >
          USUŃ WSZYSTKIE ZADANIA
        </div>
      )}
    </div>
  );
};
export default Delete;
