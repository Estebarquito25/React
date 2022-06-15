import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'


//Importo desde ./components/.. cualquier vista creada en la carpeta
// import Navigation from './components/Navigation'
import cards from './components/cards'
import formulario from './components/form'
import table from './components/table'

//Esta es la estructura del Router
//Esta funciona especificamente entre las versiones de node desde la 12 hasta la 14
function App() {
  return (
    <div className='App'>
      <Router>
   
        <Route path='/' exact component={cards}/>
        <Route path='/edit/:id'component={formulario}/>
        <Route path='/create'component={formulario}/>
        <Route path='/user'component={table}/>

      </Router>
    </div>
  );
}

export default App;
