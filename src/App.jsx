import './App.css'
import Home from './Home.jsx'
import Videos from './Videos.jsx'
import Articulos from './Articulos'
import Trabajos from './Trabajos.jsx'
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h4>Academia Defi</h4>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/videos">Videos</a></li>
          <li><a href="/articulos">Articulos</a></li>
          <li><a href="/trabajos">Trabajos</a></li>
        </ul>
      </nav>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/articulos' element={<Articulos />} />
        <Route path='/trabajos' element={<Trabajos />} />
      </Routes>
    </div>
  )
}
