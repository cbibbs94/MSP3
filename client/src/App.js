import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import NewConsultForm from './components/NewConsultForm'
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <NewConsultForm />
    </div>
  );
}

export default App;
