// App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderPage from './components/header';
import Sala from './sala/Sala'; // Certifique-se de que a importação está correta
import Button from './components/button';
import AntButton from './components/antButton';
import { getFunction } from './services/APIService';



export function App() {
  // Função de clique para os botões
  const handleClick = () => {
    alert('Botão clicado!');
  };

  // Função teste para requisição
  async function btnFunctionClick(): Promise<void> {
    try {
      const data = await getFunction();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    
    <Router>
      <HeaderPage />
      <Routes>
        <Route path="/sala" element={<Sala />} />
        <Route path="*" element={<NotFound />} />

        <Route
          path="/"
          element={
            <div>
      <div className='justify-items-center p-5 m-6 bg-slate-100'>
        <span className=' justify-center'> teste de divisão </span>
        <span> segunda opção</span>
      </div>
      <div className="flex flex-col items-center justify-center h-screen space-y-4">
        <Button label="Botão Primário" onClick={btnFunctionClick} variant="primary" size="large" />
        <Button label="Botão Secundário" onClick={handleClick} variant="secondary" size="medium" />
        <AntButton/>
      </div>
    </div>
          }
        />
        {/* Rota para capturar rotas não definidas e redirecionar para a página inicial */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
    
  );
}

export default App;
