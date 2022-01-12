import './App.css';
import { Routes, Link, Route, } from "react-router-dom";
import Dashboard from './components/dashboard';
import Connect from './components/connect';
import Math from './components/math';
import Memorisation from './components/memorisation';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="body">
      <main className="home-game">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="math" element={<Math />} />
          <Route path="connect" element={<Connect />} />
          <Route path="memorisation" element={<Memorisation />} />
        </Routes>
      </main>
      <header className="home-nav">
        <img className="home-logo" src={logo} alt="logo" />
        <div className="home-link-complete">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/math">Math</Link>
          <Link to="/connect">Connect</Link>
          <Link to="/memorisation">Memorisation</Link>
        </div>
        <div className="home-link-short">
          <Link to="/dashboard">Da</Link>
          <Link to="/math">Ma</Link>
          <Link to="/connect">Co</Link>
          <Link to="/memorisation">Me</Link>
        </div>
      </header>
    </div>
  );
}

export default App;
