import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
      </div>
      <section className="itemList">
        <ItemListContainer greeting="Bienvenido al club" color="red" />
        <ItemListContainer greeting="Aquí encontrarás" color="blue" />
        <ItemListContainer greeting="Un mundo de Peliculas para vos" />
      </section>
    </>
  );
}

export default App;
