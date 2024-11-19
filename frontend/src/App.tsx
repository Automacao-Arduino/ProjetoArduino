//import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Importando os componentes do React Router
import Button from './components/button';
import AntButton from './components/antButton';
import { getFunction } from './services/APIService';
import HeaderPage from './components/header/index'; // O componente de navegação
import Sala from './components/Pages/Sala'; // O componente da página Sala
import Suite from './components/Pages/Suite'; // O componente da página Suíte
import Cozinha from './components/Pages/Cozinha'; // O componente da página Cozinha
import Lavanderia from './components/Pages/Lavanderia'; // O componente da página Lavanderia
import Report from './components/report/report';

// Função App com os botões e texto
export function App() {
  // Função de clique para os botões
  const handleClick = () => {
    alert('Botão clicado!');
  };

  // Função de requisição para API
  async function btnFunctionClick(): Promise<void> {
    try {
      const data = await getFunction();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Router> {/* Envolvendo o aplicativo com Router */}
      <div>
        <HeaderPage /> {/* O componente de navegação */}

        <div className='justify-items-center p-5 m-6 bg-slate-100'>
          <span className='justify-center'>teste de divisão</span>
          <span>segunda opção</span>
        </div>

        {/* Botões */}
        <div className="flex flex-col items-center justify-center h-screen space-y-4">
          <Button label="Botão Primário" onClick={btnFunctionClick} variant="primary" size="large" />
          <Button label="Botão Secundário" onClick={handleClick} variant="secondary" size="medium" />
          <AntButton>Ant Button</AntButton> {/* Adicione texto dentro do AntButton */}
        </div>

        {/* Links para navegação */}
        <div className="flex justify-center mt-4">
          <Link to="/sala" className="text-blue-500 mx-3">Sala</Link>
          <Link to="/suite" className="text-blue-500 mx-3">Suíte</Link>
          <Link to="/cozinha" className="text-blue-500 mx-3">Cozinha</Link>
          <Link to="/lavanderia" className="text-blue-500 mx-3">Lavanderia</Link>
        </div>

        {/* Definindo as rotas usando Routes e element */}
        <Routes>
          <Route path="/sala" element={<Sala />} />
          <Route path="/suite" element={<Suite />} />
          <Route path="/cozinha" element={<Cozinha />} />
          <Route path="/lavanderia" element={<Lavanderia />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;