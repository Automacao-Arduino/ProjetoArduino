// src/cozinha/Cozinha.tsx
import React, { useState, useEffect } from 'react';
import Button from '../components/button';
import { getCozinhaStatus, controlDeviceCozinha } from '../services/APIService';

function Cozinha() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    async function fetchStatus() {
      try {
        const data = await getCozinhaStatus();
        setDevices(data.devices);
      } catch (error) {
        console.error('Erro ao buscar status dos dispositivos da cozinha:', error);
      }
    }
    fetchStatus();
  }, []);

  const handleControl = async (deviceId, action) => {
    try {
      await controlDeviceCozinha(deviceId, action);
      const data = await getCozinhaStatus();
      setDevices(data.devices);
    } catch (error) {
      console.error('Erro ao controlar o dispositivo da cozinha:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Controle da Cozinha</h1>
      {devices.length > 0 ? (
        devices.map((device) => (
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
        ))
      ) : (
        <p>Carregando dispositivos...</p>
      )}
    </div>
  );
}

export default Cozinha;
