import './styles/App.css'
import Home from './Home.jsx'
import Videos from './Videos.jsx'
import Articulos from './Articulos'
import Trabajos from './Trabajos.jsx'
import { Link, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <header>
        <h2>Academia Defi 🎉</h2>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/videos">Videos</Link></li>
            <li><Link to="/articulos">Articulos</Link></li>
            <li><Link to="/trabajos">Trabajos</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/articulos' element={<Articulos />} />
        <Route path='/trabajos' element={<Trabajos />} />
      </Routes>
    </div>
  )
}
