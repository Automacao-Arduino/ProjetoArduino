import { createRoot } from 'react-dom/client';
import Headerpage from './components/header/index.tsx';
import Dashboard from './DashBoard.tsx';
import "./global.css";

createRoot(document.getElementById('root')!).render(
  <div className="flex flex-col h-screen overflow-hidden">
    <Headerpage />
    <Dashboard className="flex-1 overflow-hidden" />
  </div>
);
