import { useGlobalContext } from "./context";
import { useEffect } from "react";

const Alert = () => {
  const { alert, setAlert } = useGlobalContext();

  useEffect(() => {
    const zegar = setTimeout(() => {
      setAlert({ active: false, text: "", type: "" });
    }, 3000);
    return () => {
      clearTimeout(zegar);
    };
  }, [alert]);
  return <div className="alertDiv">{alert.active && alert.text}</div>;
};
export default Alert;
