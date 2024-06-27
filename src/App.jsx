// import Home from './pages/Home'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Login from './pages/Login'
// import Register from './pages/Register'
import NavBar from './components/Navbar'

function App() {
  
  return (
    <Router>
      
        <NavBar/>
        {/* <Route path='/' element={<Login/>}></Route>
        <Route path='/registro' element={<Register/>}></Route>
        <Route path='/home' element={<Home/>}></Route> */}
      
    </Router>
  )
}

export default App
