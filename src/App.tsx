import React from 'react';
import Button from './components/button';
import AntButton from './components/antButton';

// Componente Header aprimorado
function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white text-center py-8 shadow-lg">
      <h1 className="text-4xl font-semibold">AUTOMAÇÃO COM ARDUINO</h1>
      <p className="mt-2 text-sm font-light">Automatize sua residencia com baixo custo</p>
    </header>
  );
}

// Componente ButtonCard para estilizar os botões em formato de card
function ButtonCard({ handleClick }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-medium text-center mb-4 text-gray-700">Ar Condicionado</h2>
      <div className="space-y-4">
        <Button label="Ligar Ar Condicionado" onClick={handleClick} variant="primary" size="large" />
        <h2 className="text-2xl font-medium text-center mb-4 text-gray-700">Temperatura atual do quarto</h2>
        <AntButton />
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
  // Função de clique para os botões
  const handleClick = () => {
    alert('Botão clicado!');
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      <Header />
      <main className="flex-grow flex items-center justify-center py-10">
        <ButtonCard handleClick={handleClick} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

