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
import Publicar from './pages/Publicar';
import { useState } from 'react';
import Carrito from './pages/Carrito';
import Info from './components/info';
import AuthProvider from './contexts/AuthProvider';
import Rutas_Privadas from './routes/Rutas_Privadas';

function App() {
  const [color,setColor]=useState('dark')
  const funcionColor=()=>{
    if (color==="dark") {
      
      setColor('light')
    }
    else{
      setColor('dark')
    }
  }
  return (
    <>
    <Router>
      <AuthProvider>
        <Theme appearance={color}>
        <NavBar funcionColor={funcionColor}/>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/registro' element={<Register/>}></Route>
        <Route path='/perfil' element={<Rutas_Privadas route={<Perfil/>}/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/publicar' element={<Rutas_Privadas route={<Publicar/>}/>}></Route>
        <Route path='/carrito' element={<Carrito/>}></Route>
        </Routes>
        </Theme>
        <Info/>
        </AuthProvider>

    </Router>
    </>
  )
}

export default App
