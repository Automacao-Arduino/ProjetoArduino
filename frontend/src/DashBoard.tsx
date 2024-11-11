import AntButton from "./components/antButton";
import sun from "./sgv/sun.svg"
import sound from "./sgv/sound.svg"
import on from  "./sgv/on.svg"
import play from  "./sgv/play.svg"
import React, { useState } from 'react';


interface DashboardProps {
  initialTemperatura?: number;
  initialUmidade?: number;
  buttonClassName?: string; 
  className?: string;
}

interface DashboardProps {
  initialTemperatura?: number;
  initialUmidade?: number;
  initialSom?: number; // Adiciona um valor inicial para o som
}

export function Dashboard({
  initialTemperatura = 25,
  initialUmidade = 60,
  initialSom = 50,
}: DashboardProps) {
  const [temperatura, setTemperatura] = useState(initialTemperatura);
  const [umidade] = useState(initialUmidade);
  const [som, setSom] = useState(initialSom);

  // Novos estados para ligar/desligar o som e ar-condicionado
  const [somLigado, setSomLigado] = useState(false);
  const [arCondicionadoLigado, setArCondicionadoLigado] = useState(false);

  // Funções para ajustar a temperatura e o volume
  const aumentarTemperatura = () => setTemperatura(temperatura + 1);
  const diminuirTemperatura = () => setTemperatura(temperatura - 1);
  const aumentarSom = () => setSom(som + 1);
  const diminuirSom = () => setSom(som - 1);

  // Funções para alternar o estado de som e ar-condicionado
  const toggleSom = () => setSomLigado(!somLigado);
  const toggleArCondicionado = () => setArCondicionadoLigado(!arCondicionadoLigado);

  return (
    <div className="w-full h-full  grid grid-cols-4 grid-rows-3 gap-4 p-12">
      <div className="rounded-2xl  m-5 flex flex-col w-full h-full overflow-hidden border-4 bg-white">
        <div className="h-4/6  rounded-t-2xl p-4 flex ">
          <div className="flex justify-center items-center  w-1/3">
            <img src={sun} alt="Sun Icon" className="p-6" />
          </div>
          <div className="  w-fit flex flex-col justify-center " >
            <span className="text-center"> Temperatura: {temperatura}°C</span>
            <span className="text-center"> Umidade Relativa do Ar {umidade}%</span>
          </div>
        </div>
  
        <div className="h-2/6 px-16  rounded-b-2xl flex justify-between items-center bg-white">
        <AntButton className="rounded-full w-10 pb-[10px] h-10 flex items-center justify-center text-3xl" onClick={diminuirTemperatura}>-</AntButton>
        <AntButton className="rounded-full w-10 pb-[10px] h-10 flex items-center justify-center text-3xl" onClick={aumentarTemperatura}>+</AntButton>
        <AntButton
            onClick={toggleArCondicionado}
            className="rounded-full w-10 h-10 flex items-center justify-center">
            <img src={on} alt="on Icon" className="size-max" />
          </AntButton>
        </div>
      </div>

      <div className="rounded-2xl  m-5 flex flex-col w-full h-full overflow-hidden border-4 bg-white">
        <div className="h-4/6  rounded-t-2xl p-4 flex ">
          <div className="flex justify-center items-center  w-1/3">
            <img src={sound} alt="sound Icon" className="p-4" />
          </div>
          <div className="w-full flex flex-col justify-center items-center ">
            <h1 className="text-center ">Volume:</h1>
            <span className="text-2xl mt-2">{som}</span>
          </div>
        </div>
  
        <div className="h-2/6 px-16  rounded-b-2xl flex justify-between items-center bg-white">
        <AntButton className="rounded-full w-10 pb-[10px] h-10 flex items-center justify-center text-3xl " onClick={diminuirSom}>-</AntButton>
        <AntButton className="rounded-full w-10 pb-[10px] h-10 flex items-center justify-center text-3xl" onClick={aumentarSom}>+</AntButton>
        <AntButton
            onClick={toggleSom}
            className="rounded-full w-10 h-10  flex items-center justify-center">
            <img src={play} alt="play Icon" className="size-2" />
          </AntButton>
        </div>
      </div>

      <div className="rounded-2xl bg-black m-5 flex flex-col w-full h-full overflow-hidden">
        <div className="h-4/6 bg-slate-50 rounded-t-2xl p-4">
          
        </div>
  
        <div className="h-2/6 p-4 bg-black rounded-b-2xl">
          
        </div>
      </div>

      <div className="rounded-2xl bg-black m-5 flex flex-col w-full h-full overflow-hidden">
        <div className="h-4/6 bg-slate-50 rounded-t-2xl p-4">
          
        </div>
  
        <div className="h-2/6 p-4 bg-black rounded-b-2xl">
          
        </div>
      </div>

      <div className="rounded-2xl bg-black m-5 flex flex-col w-full h-full overflow-hidden">
        <div className="h-4/6 bg-slate-50 rounded-t-2xl p-4">
          
        </div>
  
        <div className="h-2/6 p-4 bg-black rounded-b-2xl">
          
        </div>
      </div>

      <div className="rounded-2xl bg-black m-5 flex flex-col w-full h-full overflow-hidden">
        <div className="h-4/6 bg-slate-50 rounded-t-2xl p-4">
          
        </div>
  
        <div className="h-2/6 p-4 bg-black rounded-b-2xl">
          
        </div>
      </div>

      
    </div>
  );
}

export default Dashboard;
