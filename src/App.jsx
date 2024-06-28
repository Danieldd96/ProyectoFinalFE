import Home from './pages/Home'
import './App.css'
import Perfil from './pages/Perfil';
import '@radix-ui/themes/styles.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register';
import NavBar from './components/Navbar'
import { Theme } from '@radix-ui/themes';
import Contact from './pages/Contact';

function App() {
  
  return (
    <Router>
        <Theme appearance="dark">
        <NavBar/>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/registro' element={<Register/>}></Route>
        <Route path='/perfil' element={<Perfil/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>

        </Routes>
        </Theme>
    </Router>
  )
}

export default App
