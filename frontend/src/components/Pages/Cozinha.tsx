import React, { useState } from 'react';
import AntButton from "../antButton";
import axios from 'axios';

interface CozinhaProps {
  initialGeladeira?: string;
  initialLuz?: string;
  initialCafeteira?: string;
}

export function Cozinha({
  initialGeladeira = 'Desligado',
  initialLuz = 'Desligado',
  initialCafeteira = 'Desligado',
}: CozinhaProps) {
  const [geladeira, setGeladeira] = useState(initialGeladeira);
  const [luz, setLuz] = useState(initialLuz);
  const [cafeteira, setCafeteira] = useState(initialCafeteira);

  // Função para ligar/desligar dispositivos
  const toggleDevice = async (
    device: string,
    currentState: string,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const newState = currentState === 'Desligado' ? 'Ligado' : 'Desligado';
    setState(newState);

    try {
      await axios.post(`http://localhost:3001/${device}/toggle`, { state: newState });
      console.log(`Estado do ${device} enviado: ${newState}`);
    } catch (error) {
      console.error(`Erro ao enviar estado do ${device}:`, error);
    }
  };

  return (
    <div className="w-full h-full grid grid-cols-3 gap-4 p-12">
      {/* Card Geladeira */}
      <div className="rounded-2xl m-5 flex flex-col w-full h-full overflow-hidden border-4 bg-white">
        <div className="h-4/6 rounded-t-2xl p-4 flex">
          <div className="w-full flex flex-col justify-center items-center">
            <span className="text-center">Geladeira: {geladeira}</span>
            <span className="text-center">Temperatura: 4º</span>
          </div>
        </div>

        <div className="h-2/6 px-16 rounded-b-2xl flex justify-center items-center bg-black">
          <AntButton
            onClick={() => toggleDevice('geladeira', geladeira, setGeladeira)}
            className="rounded-full w-10 h-10 flex items-center justify-center"
          >
            On/Off
          </AntButton>
        </div>
      </div>

      {/* Card Cafeteira */}
      <div className="rounded-2xl m-5 flex flex-col w-full h-full overflow-hidden border-4 bg-white">
        <div className="h-4/6 rounded-t-2xl p-4 flex">
          <div className="w-full flex flex-col justify-center items-center">
            <span className="text-center">Cafeteira: {cafeteira}</span>
          </div>
        </div>

        <div className="h-2/6 px-16 rounded-b-2xl flex justify-center items-center bg-black">
          <AntButton
            onClick={() => toggleDevice('cafeteira', cafeteira, setCafeteira)}
            className="rounded-full w-10 h-10 flex items-center justify-center"
          >
            On/Off
          </AntButton>
        </div>
      </div>

      {/* Card Luz */}
      <div className="rounded-2xl m-5 flex flex-col w-full h-full overflow-hidden border-4 bg-white">
        <div className="h-4/6 rounded-t-2xl p-4 flex">
          <div className="w-full flex flex-col justify-center items-center">
            <span className="text-center">Iluminação: {luz}</span>
          </div>
        </div>

        <div className="h-2/6 px-16 rounded-b-2xl flex justify-center items-center bg-black">
          <AntButton
            onClick={() => toggleDevice('luz', luz, setLuz)}
            className="rounded-full w-10 h-10 flex items-center justify-center"
          >
            On/Off
          </AntButton>
        </div>
      </div>
    </div>
  );
}

export default Cozinha;
