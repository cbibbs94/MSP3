import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import NewConsultForm from './components/NewConsultForm'
import './App.css';
import Footer from './components/Footer'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/ConsultForm' element={<NewConsultForm />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
