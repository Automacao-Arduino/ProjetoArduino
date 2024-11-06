import { Injectable } from '@nestjs/common';
import { SerialPort } from 'serialport';
import { ReadlineParser } from '@serialport/parser-readline';

@Injectable()
export class DeviceService {
  private port: SerialPort;
  private deviceState: string = 'off';

  constructor() {
    // Configura a porta serial para se comunicar com o Arduino
    this.port = new SerialPort({ path: 'COM3', baudRate: 9600 }); // Altere 'COM3' para a porta correta do Arduino
    const parser = this.port.pipe(new ReadlineParser({ delimiter: '\r\n' }));

    // Escutar dados recebidos do Arduino
    parser.on('data', (data: string) => {
      console.log('Dados recebidos do Arduino:', data);
      this.deviceState = data; // Atualiza o estado do dispositivo (opcional)
    });
  }

  // Função para enviar comandos ao Arduino
  async sendCommand(command: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.port.write(command + '\n', (err) => {
        if (err) {
          return reject(`Erro ao enviar comando: ${err.message}`);
        }
        console.log(`Comando "${command}" enviado ao Arduino`);
        resolve(`Comando "${command}" enviado com sucesso`);
      });
    });
  }

  // Função para obter o status atual do dispositivo
  getStatus(): string {
    return this.deviceState;
  }
}
