import './App.css';
import {NavBar} from './components/navbar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
      <h1>Les agradecemos su visita</h1>
    </div>
  );
}

export default App;
