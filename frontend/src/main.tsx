import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderPage from './components/header/index';
import PaginaInicial from './components/Pages/PaginaInicial'
import Sala from './components/Pages/Sala';
import Suite from './components/Pages/Suite';
import Cozinha from './components/Pages/Cozinha'; // Página Cozinha
import Lavanderia from './components/Pages/Lavanderia';
import './global.css';
import Report from './components/report/report';

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
          <Route path="/report" element={<Report />} />
          <Route path="/" element={<PaginaInicial />} />
        </Routes>
      </div>
    </div>
  </Router>
);
