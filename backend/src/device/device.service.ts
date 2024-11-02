// src/device/device.service.ts
import { Injectable } from '@nestjs/common';
import { SerialPort } from 'serialport';
import { ReadlineParser } from '@serialport/parser-readline';

@Injectable()
export class DeviceService {
  private port: SerialPort | null = null;
  private deviceState: string = 'off';

  constructor() {
    // Removemos a inicialização da porta para evitar o erro sem o Arduino conectado.
  }

  // Função para inicializar a porta (chame esta função quando o Arduino estiver conectado)
  private initializePort() {
    if (!this.port) {
      this.port = new SerialPort({ path: 'COM3', baudRate: 9600 }); // Ajuste a porta conforme necessário
      const parser = this.port.pipe(new ReadlineParser({ delimiter: '\r\n' }));

      parser.on('data', (data: string) => {
        console.log('Dados recebidos do Arduino:', data);
        this.deviceState = data;
      });
    }
  }

  async sendCommand(command: string): Promise<string> {
    this.initializePort(); // Inicializa a porta se ainda não estiver inicializada
    return new Promise((resolve, reject) => {
      if (!this.port) {
        return reject('Porta serial não inicializada');
      }
      this.port.write(command + '\n', (err) => {
        if (err) {
          return reject(`Erro ao enviar comando: ${err.message}`);
        }
        console.log(`Comando "${command}" enviado ao Arduino`);
        resolve(`Comando "${command}" enviado com sucesso`);
      });
    });
  }

  getStatus(): string {
    return this.deviceState;
  }
}
