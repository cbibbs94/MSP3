import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import NewConsultForm from './components/NewConsultForm'
import './App.css';
import Footer from './components/Footer'
import NewUserSignUp from './components/NewUserSignup';
import CurrentUserProvider from './contexts/CurrentUser';
import UserLogin from './components/UserLogin';


function App() {
  return(
    <CurrentUserProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/ConsultForm' element={<NewConsultForm />} />
          <Route exact path='/SignUp' element={<NewUserSignUp />} />
          <Route exact path='/Login' element={<UserLogin />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CurrentUserProvider>
  )
}

export default App;
