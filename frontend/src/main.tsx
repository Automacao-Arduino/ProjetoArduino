import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderPage from './components/header/index';
import Dashboard from './DashBoard';
import Sala from './components/Pages/Sala';
import Suite from './components/Pages/Suite';
import Cozinha from './components/Pages/Cozinha'; // Página Cozinha
import Lavanderia from './components/Pages/Lavanderia';
import './global.css';

createRoot(document.getElementById('root')!).render(
  <Router>
    <div className="flex flex-col h-screen overflow-hidden">
      <HeaderPage />
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route path="/sala" element={<Sala />} />
          <Route path="/suite" element={<Suite />} />
          <Route path="/cozinha" element={<Cozinha />} /> {/* Rota para Cozinha */}
          <Route path="/lavanderia" element={<Lavanderia />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  </Router>
);
