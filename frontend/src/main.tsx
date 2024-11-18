import { createRoot } from 'react-dom/client';
import Headerpage from './components/header/index.tsx';
import Dashboard from './DashBoard.tsx';
import "./global.css";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './global.css'; // Se você tiver estilos globais
import reportWebVitals from './reportWebVitals'; // Se estiver usando

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
createRoot(document.getElementById('root')!).render(
  <div className="flex flex-col h-screen overflow-hidden">
    <Headerpage />
    <Dashboard className="flex-1 overflow-hidden" />
  </div>
);
