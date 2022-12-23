import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';





function App() {
  return (

    <>

    <div>
      <Header/>
      
    </div>
    <div className="App"><CartWidget/>
      <NavBar/>
    </div>
    <section className='itemList'>
    <ItemListContainer texto='Bienvenido al club' color='red'/>
    <ItemListContainer texto='Aquí encontrarás' color='blue'/>
    <ItemListContainer texto='Un mundo de Peliculas para vos' />
      </section>
      
      
     </> 
    
  );
}

export default App;
