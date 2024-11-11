import React from 'react';
import Button from './components/button';
import AntButton from './components/antButton';
import { getFunction } from "./services/APIService";

// Função App com os botões e texto
export function App() {
  // Função de clique para os botões
  const handleClick = () => {
    alert('Botão clicado!');
  };

  //função teste para requisição
  async function btnFunctionClick(): Promise<void> {
    try {
        const data = await getFunction();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

  return (
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
  );
}

export default App;