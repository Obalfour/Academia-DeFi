import './styles/App.css'
import Home from './Home.jsx'
import Videos from './Videos.jsx'
import Articulos from './Articulos'
import Trabajos from './Trabajos.jsx'
import { Link, Route, Routes } from 'react-router-dom';
import logo from "../img/space-station.png";

export default function App() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light mb-5">
          <a className="navbar-brand ps-3">
              <strong>
                  <img src={logo} width="30" height="30" className="d-inline-block align-top mr-1" alt="" />
                  Academia DeFi
              </strong>
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
