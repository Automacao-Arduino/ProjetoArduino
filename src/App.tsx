import React, { useState } from 'react';
import Button from './components/button';
import AntButton from './components/antButton';

// Definindo o tipo para as props de ButtonCard
interface ButtonCardProps {
  ligarAr: () => void;
  tempAr: number;
}

// Componente Header aprimorado
function Header() {
  return (
    <header className="bg-gradient-to-r from-stone-300 to-cyan-400 text-slate-600 text-center py-8 shadow-lg">
      <h1 className="text-4xl font-semibold">AUTOMAÇÃO COM ARDUINO</h1>
      <p className="mt-2 text-sm font-light">Automatize sua residência com baixo custo</p>
    </header>
  );
}

// Componente ButtonCard para estilizar os botões em formato de card
function ButtonCard({ ligarAr, tempAr }: ButtonCardProps) {
  return (
    <div className="bg-cyan-400 shadow-md rounded-lg p-10 w-full max-w-md flex-grow">
      <h2 className="text-2xl font-medium text-center mb-1 text-black">Ar Condicionado</h2>
      <div className="m-2 mt-1 p-3 w-full flex flex-col items-center">
        <Button label="Ligar Ar Condicionado" onClick={ligarAr} variant="primary" size="large" />
        <h2 className="text-2xl font-medium text-center mb-4 text-black mt-3">Temperatura: </h2>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 text-white p-1 w-16 font-extrabold text-3xl rounded-full">+</button>
          <input className="size-8 text-center w-16" value={tempAr} readOnly />
          <button className="bg-blue-500 text-white p-1 w-16 font-extrabold text-3xl rounded-full">-</button>
        </div>
      </div>
    </div>
  );
}

function ButtonCard2({ ligarSom, aumentarSom, diminuirSom }) {
  return (
    <div className="bg-cyan-400 shadow-md rounded-lg p-10 w-full max-w-md flex-grow">
      <h2 className="text-2xl font-medium text-left mb-3 text-black">Caixa de Som</h2>
      <div className="space-y-4">
        <Button label="Ligar Caixa de Som" onClick={ligarSom} variant="primary" size="large" />
        <Button label="Aumentar Volume" onClick={aumentarSom} variant="primary" size="large" />
        <Button label="Diminuir Volume" onClick={diminuirSom} variant="primary" size="large" />
      </div>
    </div>
  );
}

// Componente Footer para rodapé
function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-10">
      <p className="text-sm">&copy; 2024 Automação Arduino. Todos os direitos reservados.</p>
    </footer>
  );
}

// Função App
export function App() {
  const [tempAr, setTempAr] = useState(23); 

  // Função de clique para os botões
  const ligarAr = () => {
    alert('Você ligou o Ar condicionado!');
  };

  const ligarSom = () => {
    alert('Você ligou o aparelho de som!');
  };

  const aumentarSom = () => {
    alert('Você aumentou o volume!');
  };

  const diminuirSom = () => {
    alert('Você diminuiu o volume!');
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      <Header />
      <main className="flex-grow flex items-center justify-center py-10 space-x-4 max-w-4xl mx-auto">
        <ButtonCard ligarAr={ligarAr} tempAr={tempAr} /> {/* Passando tempAr para ButtonCard */}
        <ButtonCard2 ligarSom={ligarSom} aumentarSom={aumentarSom} diminuirSom={diminuirSom} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
