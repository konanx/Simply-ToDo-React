import Navbar from "./Navbar";
import Dodaj from "./Dodawanie";
import ListaZadan from "./ListaZadan";
import Alert from "./Alert";
import Delete from "./Delete";
import Sortowanie from "./Sortowanie";
function App() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <Alert />
      <Dodaj></Dodaj>
      <Sortowanie></Sortowanie>
      <ListaZadan></ListaZadan>
      <Delete></Delete>
    </div>
  );
}

export default App;
