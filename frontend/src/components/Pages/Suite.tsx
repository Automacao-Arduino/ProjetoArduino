import React, { useState } from 'react';
import AntButton from "../antButton";
import axios from 'axios';

interface SuiteProps {
  initialAr?: string;
  initialSom?: string;
  initialLuz?: string;
  initialUmidificador?: string;
  initialSomVolume?: number;
  initialUmidificadorIntensidade?: number;
  initialArTemperatura?: number;
}

export function Suite({
  initialAr = 'Desligado',
  initialSom = 'Desligado',
  initialLuz = 'Desligado',
  initialUmidificador = 'Desligado',
  initialSomVolume = 50,
  initialUmidificadorIntensidade = 5,
  initialArTemperatura = 23,
}: SuiteProps) {
  const [ar, setAr] = useState(initialAr);
  const [som, setSom] = useState(initialSom);
  const [luz, setLuz] = useState(initialLuz);
  const [umidificador, setUmidificador] = useState(initialUmidificador);
  const [somVolume, setSomVolume] = useState(initialSomVolume);
  const [umidificadorIntensidade, setUmidificadorIntensidade] = useState(initialUmidificadorIntensidade);
  const [arTemperatura, setArTemperatura] = useState(initialArTemperatura);

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

  // Função para aumentar e diminuir os valores
  const alterarPropriedade = (dispositivo: string, valor: number) => {
    switch (dispositivo) {
      case 'som':
        setSomVolume((prev) => Math.max(0, Math.min(100, prev + valor)));
        break;
      case 'umidificador':
        setUmidificadorIntensidade((prev) => Math.max(0, Math.min(10, prev + valor)));
        break;
      case 'ar':
        setArTemperatura((prev) => Math.max(16, Math.min(28, prev + valor)));
        break;
      default:
        console.error('Dispositivo não encontrado');
    }
  };

  return (
    <div className="w-full h-full grid grid-cols-2 gap-4 p-12">
      {/* Card Ar-condicionado */}
      <div className="rounded-2xl m-5 flex flex-col w-full h-full overflow-hidden border-4 bg-white">
        <div className="h-4/6 rounded-t-2xl p-4 flex flex-col justify-center">
          <span className="text-center">Ar-condicionado: {ar}</span>
          <span className="text-center">Temperatura: {arTemperatura}º</span>
        </div>

        <div className="h-2/6 px-16 rounded-b-2xl flex justify-between items-center bg-black">
          <AntButton
            className="rounded-full w-10 pb-[10px] h-10 flex items-center justify-center text-3xl"
            onClick={() => alterarPropriedade('ar', -1)}
          >
            -
          </AntButton>
          <AntButton
            className="rounded-full w-10 pb-[10px] h-10 flex items-center justify-center text-3xl"
            onClick={() => alterarPropriedade('ar', +1)}
          >
            +
          </AntButton>
          <AntButton
            onClick={() => toggleDevice('ar', ar, setAr)}
            className="rounded-full w-10 h-10 flex items-center justify-center"
          >
            <span className="text-white">ON/OFF</span>
          </AntButton>
        </div>
      </div>

      {/* Card Som */}
      <div className="rounded-2xl m-5 flex flex-col w-full h-full overflow-hidden border-4 bg-white">
        <div className="h-4/6 rounded-t-2xl p-4 flex flex-col justify-center items-center">
          <span className="text-center">Som: {som}</span>
          <span className="text-center">Volume: {somVolume}</span>
        </div>

        <div className="h-2/6 px-16 rounded-b-2xl flex justify-between items-center bg-black">
          <AntButton
            className="rounded-full w-10 pb-[10px] h-10 flex items-center justify-center text-3xl"
            onClick={() => alterarPropriedade('som', -5)}
          >
            -
          </AntButton>
          <AntButton
            className="rounded-full w-10 pb-[10px] h-10 flex items-center justify-center text-3xl"
            onClick={() => alterarPropriedade('som', 5)}
          >
            +
          </AntButton>
          <AntButton
            onClick={() => toggleDevice('som', som, setSom)}
            className="rounded-full w-10 h-10 flex items-center justify-center"
          >
            <span className="text-white">ON/OFF</span>
          </AntButton>
        </div>
      </div>

      {/* Card Luz */}
      <div className="rounded-2xl m-5 flex flex-col w-full h-full overflow-hidden border-4 bg-white">
        <div className="h-4/6 rounded-t-2xl p-4 flex flex-col justify-center items-center">
          <span className="text-center">Iluminação: {luz}</span>
        </div>

        <div className="h-2/6 px-16 rounded-b-2xl flex justify-center items-center bg-black">
          <AntButton
            onClick={() => toggleDevice('luz', luz, setLuz)}
            className="rounded-full w-10 h-10 flex items-center justify-center"
          >
            <span className="text-white">ON/OFF</span>
          </AntButton>
        </div>
      </div>

      {/* Card Umidificador */}
      <div className="rounded-2xl m-5 flex flex-col w-full h-full overflow-hidden border-4 bg-white">
        <div className="h-4/6 rounded-t-2xl p-4 flex flex-col justify-center items-center">
          <span className="text-center">Umidificador: {umidificador}</span>
          <span className="text-center">Intensidade: {umidificadorIntensidade}</span>
          <span className="text-center">Umidade Relativa do Ar 20%</span>
        </div>

        <div className="h-2/6 px-16 rounded-b-2xl flex justify-between items-center bg-black">
          <AntButton
            className="rounded-full w-10 pb-[10px] h-10 flex items-center justify-center text-3xl"
            onClick={() => alterarPropriedade('umidificador', -1)}
          >
            -
          </AntButton>
          <AntButton
            className="rounded-full w-10 pb-[10px] h-10 flex items-center justify-center text-3xl"
            onClick={() => alterarPropriedade('umidificador', 1)}
          >
            +
          </AntButton>
          <AntButton
            onClick={() => toggleDevice('umidificador', umidificador, setUmidificador)}
            className="rounded-full w-10 h-10 flex items-center justify-center"
          >
            <span className="text-white">ON/OFF</span>
          </AntButton>
        </div>
      </div>
    </div>
  );
}

export default Suite;
