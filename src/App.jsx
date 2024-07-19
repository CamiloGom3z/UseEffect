import { Router,Routes, Route } from 'react-router-dom'

import './App.css'
import Navbar from './components/NavBar/Navbar'
import { Login } from './components/login/Login'
import {Temporizador} from './components/Temporizador/Temporizador'
import {Counter} from './components/counter/Counter'
import { Reloj } from './components/Reloj/Reloj'
import {MostrarCapital} from './components/MostrarCapital/MostrarCapital'
function App() {
//as
  return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Temporizador" element={<Temporizador />} />
          <Route path="/Counter" element={<Counter />} />
          <Route path='/Reloj' element={<Reloj/>} />
           <Route path='/Mostrarcapital' element={<MostrarCapital/>}></Route>
        </Routes>
      </div>
  )
}

export default App

