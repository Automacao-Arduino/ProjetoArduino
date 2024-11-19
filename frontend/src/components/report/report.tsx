import React, { useEffect, useState } from 'react';
import axios from 'axios';

type DeviceState = {
  device: string;
  state: string;
  createdAt: string;
};

const Report: React.FC = () => {
  const [deviceStates, setDeviceStates] = useState<DeviceState[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDeviceStates = async () => {
      try {
        const response = await axios.get<DeviceState[]>('http://localhost:3001/reports/device-states');
        setDeviceStates(response.data);
      } catch (error) {
        console.error('Erro ao buscar estados dos dispositivos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDeviceStates();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-lg font-semibold">Carregando...</div>
      </div>
    );
  }

  return  (
    <div className="flex flex-col items-center justify-center bg-1e293b  pt-1">
      <div className="w-full max-w-4xl p-1 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">
          Relatório de Estados dos Dispositivos
        </h1>
        <table className="w-full border-collapse table-auto">
          <thead>
            <tr className="bg-gray-200 text-left text-sm leading-tight">
              <th className="p-2 border-b border-gray-300">Dispositivo</th>
              <th className="p-2 border-b border-gray-300">Estado</th>
              <th className="p-2 border-b border-gray-300">Data</th>
            </tr>
          </thead>
          <tbody>
            {deviceStates.map((state, index) => (
              <tr key={index} className="hover:bg-gray-100 text-sm leading-tight">
                <td className="p-2 border-b border-gray-300 bg-white">
                  {state.device}
                </td>
                <td className="p-2 border-b border-gray-300 bg-white">
                  {state.state}
                </td>
                <td className="p-2 border-b border-gray-300 bg-white">
                  {new Date(state.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Report;
