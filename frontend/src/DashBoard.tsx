import AntButton from "./components/antButton";
import sun from "./sgv/sun.svg"
import sound from "./sgv/sound.svg"
import on from  "./sgv/on.svg"
import play from  "./sgv/play.svg"
import geladeiraicon from  "./sgv/geladeiraicon.svg"
import bulb from  "./sgv/bulb.svg"
import umidificadoricon from  "./sgv/umidificadoricon.svg"
import coffe from "./sgv/coffe.svg"
import React, { useState } from 'react';
import axios from 'axios';

interface DashboardProps {
  //propriedades iniciais de dispositivos
  initialAr?: string;
  initialSom?: string;
  initialGeladeira?: string;
  initialLuz?: string;
  initialUmidificador?: string;
  initialCafeteira?: string;

  //propriedades de botões de aumentar e diminuir
  initialSomVolume?: number;
  initialUmidificadorIntensidade?: number;
  initialArTemperatura?: number;  
}

interface DashboardProps {
  //propriedades iniciais de dispositivos
  initialAr?: string;
  initialSom?: string;
  initialGeladeira?: string;
  initialUmidificador?: string;
  initialLuz?: string;
  initialCafeteira?: string;

    //propriedades de botões de aumentar e diminuir
    initialSomVolume?: number;
    initialUmidificadorIntensidade?: number;
    initialArTemperatura?: number;
}

export function Dashboard({
  //propriedades iniciais de dispositivos
  initialAr = 'Desligado',
  initialSom = 'Desligado',
  initialGeladeira = 'Desligado',
  initialUmidificador = 'Desligado',
  initialLuz = 'Desligado',
  initialCafeteira = 'Desligado',

  //propriedades de botões de aumentar e diminuir
  initialSomVolume = 50,
  initialUmidificadorIntensidade = 5,
  initialArTemperatura = 23,
}: DashboardProps) {
  //declaração de aparelhos
  const [ar, setAr] = useState(initialAr);
  const [som, setSom] = useState(initialSom);
  const [luz, setLuz] = useState(initialLuz);
  const [geladeira, setGeladeira] = useState(initialGeladeira);
  const [umidificador, setUmidificador] = useState(initialUmidificador);
  const [cafeteira, setCafeteira] = useState(initialCafeteira);

  //declaração de estados iniciais de aparelhos
  const [somVolume, setSomVolume] = useState(initialSomVolume);
  const [umidificadorIntensidade, setUmidificadorIntensidade] = useState(initialUmidificadorIntensidade);
  const [arTemperatura, setArTemperatura] = useState(initialArTemperatura);

  // Função para ligar os aparelhos
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

   // Função para aumentar e diminuir valores
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
    //Card ar-condicionado
    <div className="w-full h-full  grid grid-cols-4 grid-rows-3 gap-4 p-12">
      <div className="rounded-2xl  m-5 flex flex-col w-full h-full overflow-hidden border-4 bg-white">
        <div className="h-4/6  rounded-t-2xl p-4 flex ">
          <div className="flex justify-center items-center  w-1/3">
            <img src={sun} alt="Sun Icon" className="p-6" />
          </div>
          <div className="  w-fit flex flex-col justify-center " >
            <span className="text-center"> Ar-condicionado: {ar}</span>
            <span className="text-center"> Temperatura: {arTemperatura}º </span>
          </div>
        </div>

        <div className="h-2/6 px-16  rounded-b-2xl flex justify-between items-center bg-black">
        <AntButton className="rounded-full w-10 pb-[10px] h-10 flex items-center justify-center text-3xl" onClick={()=> alterarPropriedade('ar', -1)}>-</AntButton>
        <AntButton className="rounded-full w-10 pb-[10px] h-10 flex items-center justify-center text-3xl" onClick={()=> alterarPropriedade('ar', +1)}>+</AntButton>
        <AntButton
            onClick={() => toggleDevice('ar', ar, setAr)}
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
            <span className="text-center">Som: {som}</span>
            <span className="text-center">Volume: {somVolume}</span>
          </div>
        </div>
  
        <div className="h-2/6 px-16  rounded-b-2xl flex justify-between items-center bg-black">
        <AntButton className="rounded-full w-10 pb-[10px] h-10 flex items-center justify-center text-3xl " onClick={() => alterarPropriedade('som', -5)}>-</AntButton>
        <AntButton className="rounded-full w-10 pb-[10px] h-10 flex items-center justify-center text-3xl" onClick={() => alterarPropriedade('som', 5)}>+</AntButton>
        <AntButton
            onClick={() => toggleDevice('som', som, setSom)}
            className="rounded-full w-10 h-10  flex items-center justify-center">
            <img src={play} alt="play Icon" className="size-2" />
          </AntButton>
        </div>
      </div>

      {/*Card Geladeira*/}
      <div className="rounded-2xl  m-5 flex flex-col w-full h-full overflow-hidden border-4 bg-white">
        <div className="h-4/6  rounded-t-2xl p-4 flex ">
          <div className="flex justify-center items-center  w-1/3">
            <img src={geladeiraicon} alt="geladeira icon" className="p-4" />
          </div>
          <div className="w-full flex flex-col justify-center items-center ">
            <span className="text-center"> Geladeira: {geladeira}</span>
            <span className="text-center">Temperatura: 4º</span>
          </div>
        </div>

        <div className="h-2/6 px-16  rounded-b-2xl flex justify-center items-center bg-black">
        <AntButton
            onClick={() => toggleDevice('geladeira', geladeira, setGeladeira)}
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
        <AntButton onClick={() => toggleDevice('luz', luz, setLuz)} className="rounded-full w-10 h-10 flex items-center justify-center">
            <img src={on} alt="on Icon" className="size-max" />
        </AntButton>
        </div>
      </div>

      {/*Card Umidificador*/}
      <div className="rounded-2xl  m-5 flex flex-col w-full h-full overflow-hidden border-4 bg-white">
        <div className="h-4/6  rounded-t-2xl p-4 flex ">
          <div className="flex justify-center items-center  w-1/3">
            <img src={umidificadoricon} alt="luz icon" className="p-4" />
          </div>
          <div className="w-full flex flex-col justify-center items-center ">
            <span className="text-center"> Umidificador: {umidificador} </span>
            <span className="text-center"> Intensidade: {umidificadorIntensidade}</span>
            <span className="text-center"> Umidade Relativa do Ar 20%</span>
          </div>
        </div>
  
        <div className="h-2/6 px-16  rounded-b-2xl flex justify-between items-center bg-black">
        <AntButton className="rounded-full w-10 pb-[10px] h-10 flex items-center justify-center text-3xl" onClick={() => alterarPropriedade('umidificador', -1)}>-</AntButton>
        <AntButton className="rounded-full w-10 pb-[10px] h-10 flex items-center justify-center text-3xl" onClick={() => alterarPropriedade('umidificador', 1)} >+</AntButton>
        <AntButton onClick={() => toggleDevice('umidificador', umidificador, setUmidificador)} className="rounded-full w-10 h-10 flex items-center justify-center">
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
        <AntButton onClick={() => toggleDevice('cafeteira', cafeteira, setCafeteira)} className="rounded-full w-10 h-10 flex items-center justify-center">
            <img src={on} alt="on Icon" className="size-max" />
        </AntButton>
        </div>
      </div>

      
    </div>
  );
}

export default Dashboard;