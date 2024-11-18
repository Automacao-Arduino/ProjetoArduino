import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export async function getFunction(){
    const response = await axios.get('${API_URL}/');
    return response.data;
}
// src/services/APIService.ts
import axios from 'axios';

// Funções para a Sala (já existentes)
export async function getSalaStatus() {
  const response = await axios.get('/api/sala/status'); // Ajuste o endpoint conforme necessário
  return response.data;
}

export async function controlDeviceSala(deviceId: string, action: 'on' | 'off') {
  await axios.post('/api/sala/control', {
    deviceId,
    action,
  });
}

// Funções para a Cozinha
export async function getCozinhaStatus() {
  const response = await axios.get('/api/cozinha/status'); // Ajuste o endpoint
  return response.data;
}

export async function controlDeviceCozinha(deviceId: string, action: 'on' | 'off') {
  await axios.post('/api/cozinha/control', {
    deviceId,
    action,
  });
}

// Funções para o Quarto
export async function getQuartoStatus() {
  const response = await axios.get('/api/quarto/status'); // Ajuste o endpoint
  return response.data;
}

export async function controlDeviceQuarto(deviceId: string, action: 'on' | 'off') {
  await axios.post('/api/quarto/control', {
    deviceId,
    action,
  });
}
