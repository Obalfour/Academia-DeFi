import './styles/App.css'
import Home from './Home.jsx'
import Videos from './Videos.jsx'
import Articulos from './Articulos'
import Trabajos from './Trabajos.jsx'
import { Link, Route, Routes } from 'react-router-dom';
import logo from "../img/space-station.png";
import './styles/Text.css';

export default function App() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand ps-3">
          <p className="fs-3 gradient-text">
          <strong>
            <img src={logo} width="45" height="45" className="d-inline-block align-top me-2" alt="" />
            Academia DeFi
          </strong>
          </p>
        </a>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/videos">Videos</Link></li>
          <li><Link to="/articulos">Articulos</Link></li>
          <li><Link to="/trabajos">Trabajos</Link></li>
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
