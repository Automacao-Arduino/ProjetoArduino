// src/quarto/Quarto.tsx
import React, { useState, useEffect } from 'react';
import Button from '../components/button'; // Importe seu componente de botão personalizado
import { getQuartoStatus, controlDeviceQuarto } from '../services/APIService';

function Quarto() {
  // Estado para armazenar o status dos dispositivos do quarto
  const [devices, setDevices] = useState([]);

  // Função para buscar o status dos dispositivos ao montar o componente
  useEffect(() => {
    async function fetchStatus() {
      try {
        const data = await getQuartoStatus(); // Função que obtém o status do quarto
        setDevices(data.devices); // Supondo que a resposta tenha um array de dispositivos
      } catch (error) {
        console.error('Erro ao buscar status dos dispositivos do quarto:', error);
      }
    }

    fetchStatus();
  }, []);

  // Função para controlar um dispositivo (ligar/desligar)
  const handleControl = async (deviceId: string, action: 'on' | 'off') => {
    try {
      await controlDeviceQuarto(deviceId, action); // Envia o comando para o backend
      // Atualiza o status dos dispositivos após a ação
      const data = await getQuartoStatus();
      setDevices(data.devices);
    } catch (error) {
      console.error('Erro ao controlar o dispositivo do quarto:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Controle do Quarto</h1>
      {devices.length > 0 ? (
        <div>
          {devices.map((device) => (
            <div key={device.id} className="mb-4">
              <span className="text-lg">
                {device.name}: {device.state}
              </span>
              <div className="mt-2">
                <Button
                  label="Ligar"
                  onClick={() => handleControl(device.id, 'on')}
                  variant="primary"
                  size="medium"
                />
                <Button
                  label="Desligar"
                  onClick={() => handleControl(device.id, 'off')}
                  variant="secondary"
                  size="medium"
                  className="ml-2"
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Carregando dispositivos...</p>
      )}
    </div>
  );
}

export default Quarto;
