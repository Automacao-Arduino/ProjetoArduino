import AntButton from "./components/antButton";
import sun from "./sgv/sun.svg"
import sound from "./sgv/sound.svg"
import on from  "./sgv/on.svg"
import play from  "./sgv/play.svg"
import geladeira from  "./sgv/geladeira.svg"
import bulb from  "./sgv/bulb.svg"
import umidificador from  "./sgv/umidificador.svg"
import coffe from "./sgv/coffe.svg"
import React, { useState } from 'react';
import axios from 'axios';

interface DashboardProps {
  initialTemperatura?: number;
  initialTemperaturaGeladeira?: number;
  initialLuz?: string;
  initialCafeteira?: string;
  initialUmidificador?: string;
  initialIntensidadeUmidificador?: number;
  initialUmidade?: number;
  buttonClassName?: string; 
  className?: string;
}

interface DashboardProps {
  initialTemperatura?: number;
  initialTemperaturaGeladeira?: number;
  initialLuz?: string;
  initialCafeteira?: string;
  initialUmid?: string;
  initialInstesidadeUmidificador?: number;
  initialUmidade?: number;
  initialSom?: number;
}

export function Dashboard({
  initialTemperatura = 25,
  initialTemperaturaGeladeira = 5,
  initialLuz = 'Desligado',
  initialCafeteira = 'Desligado',
  initialUmid = 'Desligado',
  initialInstesidadeUmidificador = 0,
  initialUmidade = 60,
  initialSom = 50,
}: DashboardProps) {
  const [temperatura, setTemperatura] = useState(initialTemperatura);
  const [temperaturaGeladeira, setTemperaturaGeladeira] = useState(initialTemperaturaGeladeira);
  const [luz, setLuz] = useState(initialLuz);
  const [cafeteira, setCafeteira] = useState(initialCafeteira);
  const [umid, setUmid] = useState(initialUmid);
  const [umidIntensidade, setUmidIntensidade] = useState(initialInstesidadeUmidificador);
  const [umidade] = useState(initialUmidade);
  const [som, setSom] = useState(initialSom);

  // Novos estados para ligar/desligar o som, ar-condicionado, cafeteira e luz
  const [somLigado, setSomLigado] = useState(false);
  const [arCondicionadoLigado, setArCondicionadoLigado] = useState(false);
  const [geladeiraLigado, setGeladeiraLigado] = useState(false);
  const [luzLigado, setLuzLigado] = useState(false);
  const [cafeteiraLigado, setCafeteiraLigado] = useState(false);
  const [umidLigado, setUmidLigado] = useState(false);

  // Funções para ajustar a temperatura e o volume
  const aumentarTemperatura = () => setTemperatura((temperatura) => (temperatura < 26 ? temperatura +1 : temperatura));
  const diminuirTemperatura = () => setTemperatura((temperatura) => (temperatura > 17 ? temperatura -1 : temperatura));
  const aumentarTemperaturaGeladeira = () => setTemperaturaGeladeira((temperaturaGeladeira) => (temperaturaGeladeira < 8 ? temperaturaGeladeira + 1: temperaturaGeladeira));
  const diminuirTemperaturaGeladeira = () => setTemperaturaGeladeira((temperaturaGeladeira) => (temperaturaGeladeira > 5 ? temperaturaGeladeira - 1: temperaturaGeladeira));
  const aumentarSom = () => setSom((som) => (som < 50 ? som + 1 : som));
  const diminuirSom = () => setSom((som) => (som >= 1 ? som - 1: som));
  const aumentarUmidade = () => {
    if(umidLigado){
    setUmidIntensidade((umidIntensidade) => (umidIntensidade < 10 ? umidIntensidade + 1 : umidIntensidade));
  }
}
const diminuirUmidade = () =>{
  if(umidLigado){
  setUmidIntensidade((umidIntensidade) => (umidIntensidade > 1 ? umidIntensidade - 1 : umidIntensidade));
  }
}
  // Funções para alternar o estado de som, cafeteira, ar-condicionado e luz
  const toggleSom = () => setSomLigado(!somLigado); 
  const toggleArCondicionado = () => setArCondicionadoLigado(!arCondicionadoLigado);
  const toggleGeladeira = () => setGeladeiraLigado(!geladeiraLigado);
  
  const toggleLuz = async () => {
    const newState = luz === 'Desligado' ? 'Ligado' : 'Desligado';
    setLuz(newState);

    try {
        await axios.post('http://localhost:3001/luz/toggle', { state: newState });
        console.log(`Estado da luz enviado: ${newState}`);
    } catch (error) {
        console.error('Erro ao enviar estado da luz:', error);
    }
};

  const toggleCafeteira = () => {
    setCafeteiraLigado(!cafeteiraLigado);
    setCafeteiraLigado(!cafeteiraLigado);
    setCafeteira(prevCafeteira => (prevCafeteira === 'Desligado' ? 'Ligado' : 'Desligado'));
  }
  const toggleUmid = () =>{
    setUmidLigado(!umidLigado);
    setUmidLigado(!umidLigado);
    setUmid(prevUmid => (prevUmid === 'Desligado' ? 'Ligado' : 'Desligado'))
  }

  return (
    //Card ar-condicionado
    <div className="w-full h-full  grid grid-cols-4 grid-rows-3 gap-4 p-12">
      <div className="rounded-2xl  m-5 flex flex-col w-full h-full overflow-hidden border-4 bg-white">
        <div className="h-4/6  rounded-t-2xl p-4 flex ">
          <div className="flex justify-center items-center  w-1/3">
            <img src={sun} alt="Sun Icon" className="p-6" />
          </div>
          <div className="  w-fit flex flex-col justify-center " >
            <span className="text-center"> Temperatura Do Ambiente: {temperatura}°C</span>
          </div>
        </div>

        <div className="h-2/6 px-16  rounded-b-2xl flex justify-between items-center bg-black">
        <AntButton className="rounded-full w-10 pb-[10px] h-10 flex items-center justify-center text-3xl" onClick={diminuirTemperatura}>-</AntButton>
        <AntButton className="rounded-full w-10 pb-[10px] h-10 flex items-center justify-center text-3xl" onClick={aumentarTemperatura}>+</AntButton>
        <AntButton
            onClick={toggleArCondicionado}
            className="rounded-full w-10 h-10 flex items-center justify-center">
            <img src={on} alt="on Icon" className="size-max" />
          </AntButton>
        </div>
      </div>

      {/*Card Som*/}
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
  
        <div className="h-2/6 px-16  rounded-b-2xl flex justify-between items-center bg-black">
        <AntButton className="rounded-full w-10 pb-[10px] h-10 flex items-center justify-center text-3xl " onClick={diminuirSom}>-</AntButton>
        <AntButton className="rounded-full w-10 pb-[10px] h-10 flex items-center justify-center text-3xl" onClick={aumentarSom}>+</AntButton>
        <AntButton
            onClick={toggleSom}
            className="rounded-full w-10 h-10  flex items-center justify-center">
            <img src={play} alt="play Icon" className="size-2" />
          </AntButton>
        </div>
      </div>

      {/*Card Geladeira*/}
      <div className="rounded-2xl  m-5 flex flex-col w-full h-full overflow-hidden border-4 bg-white">
        <div className="h-4/6  rounded-t-2xl p-4 flex ">
          <div className="flex justify-center items-center  w-1/3">
            <img src={geladeira} alt="geladeira icon" className="p-4" />
          </div>
          <div className="w-full flex flex-col justify-center items-center ">
            <span className="text-center"> Temperatura: {temperaturaGeladeira}°C</span>
          </div>
        </div>

        <div className="h-2/6 px-16  rounded-b-2xl flex justify-between items-center bg-black">
        <AntButton className="rounded-full w-10 pb-[10px] h-10 flex items-center justify-center text-3xl" onClick={diminuirTemperaturaGeladeira}>-</AntButton>
        <AntButton className="rounded-full w-10 pb-[10px] h-10 flex items-center justify-center text-3xl" onClick={aumentarTemperaturaGeladeira} >+</AntButton>
        <AntButton
            onClick={toggleGeladeira}
            className="rounded-full w-10 h-10 flex items-center justify-center">
            <img src={on} alt="on Icon" className="size-max" />
        </AntButton>
        </div>
      </div>

      {/*Card Luz*/}
      <div className="rounded-2xl  m-5 flex flex-col w-full h-full overflow-hidden border-4 bg-white">
        <div className="h-4/6  rounded-t-2xl p-4 flex ">
          <div className="flex justify-center items-center  w-1/3">
            <img src={bulb} alt="luz icon" className="p-4" />
          </div>
          <div className="w-full flex flex-col justify-center items-center ">
            <span className="text-center"> Iluminação: {luz} </span>
          </div>
        </div>
  
        <div className="h-2/6 px-16  rounded-b-2xl flex justify-center items-center bg-black">
        <AntButton onClick={toggleLuz} className="rounded-full w-10 h-10 flex items-center justify-center">
            <img src={on} alt="on Icon" className="size-max" />
        </AntButton>
        </div>
      </div>

      {/*Card Umidificador*/}
      <div className="rounded-2xl  m-5 flex flex-col w-full h-full overflow-hidden border-4 bg-white">
        <div className="h-4/6  rounded-t-2xl p-4 flex ">
          <div className="flex justify-center items-center  w-1/3">
            <img src={umidificador} alt="luz icon" className="p-4" />
          </div>
          <div className="w-full flex flex-col justify-center items-center ">
            <span className="text-center"> Umidificador: {umid} </span>
            <span className="text-center"> Intensidade: {umidIntensidade}</span>
            <span className="text-center"> Umidade Relativa do Ar {umidade}%</span>
          </div>
        </div>
  
        <div className="h-2/6 px-16  rounded-b-2xl flex justify-between items-center bg-black">
        <AntButton className="rounded-full w-10 pb-[10px] h-10 flex items-center justify-center text-3xl" onClick={diminuirUmidade}>-</AntButton>
        <AntButton className="rounded-full w-10 pb-[10px] h-10 flex items-center justify-center text-3xl" onClick={aumentarUmidade} >+</AntButton>
        <AntButton onClick={toggleUmid} className="rounded-full w-10 h-10 flex items-center justify-center">
            <img src={on} alt="on Icon" className="size-max" />
        </AntButton>
        </div>
          
      </div>

      {/*Card Cafeteira*/}
      <div className="rounded-2xl  m-5 flex flex-col w-full h-full overflow-hidden border-4 bg-white">
        <div className="h-4/6  rounded-t-2xl p-4 flex ">
          <div className="flex justify-center items-center  w-1/3">
            <img src={coffe} alt="luz icon" className="p-4" />
          </div>
          <div className="w-full flex flex-col justify-center items-center ">
            <span className="text-center"> Cafeteira: {cafeteira} </span>
          </div>
        </div>
  
        <div className="h-2/6 px-16  rounded-b-2xl flex justify-center items-center bg-black">
        <AntButton onClick={toggleCafeteira} className="rounded-full w-10 h-10 flex items-center justify-center">
            <img src={on} alt="on Icon" className="size-max" />
        </AntButton>
        </div>
      </div>

      
    </div>
  );
}

export default Dashboard;