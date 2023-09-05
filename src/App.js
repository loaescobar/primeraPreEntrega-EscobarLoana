import NavBar1 from '../src/components/NavBar1';
import ItemListContainer from '../src/components/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar1/>
      <ItemListContainer greeting="Bienvenidos a DISCORDIA Indumentaria"/>
    </div>
  );
}

export default App;
