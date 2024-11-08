import { createRoot } from 'react-dom/client';
import Headerpage from './components/header/index.tsx';
import Sidebar from './components/sideBar/index.tsx';
import Dashboard from './DashBoard.tsx';
import "./global.css";

createRoot(document.getElementById('root')!).render(
  <div className="flex flex-col h-screen">
    <Headerpage />
    <div className="flex flex-1">
      <Sidebar />
      <Dashboard />
    </div>
  </div>
);
