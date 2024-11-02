Projeto de Controle com Arduino
Este projeto implementa um sistema de controle para Arduino utilizando uma arquitetura full stack. O backend foi desenvolvido com NestJS e oferece uma API RESTful que permite a interação com o Arduino, enquanto o frontend foi construído com React, proporcionando uma interface web intuitiva para enviar comandos ao dispositivo.

Sumário
Visão Geral
Estrutura de Diretórios
Instalação
Uso
Backend com NestJS
Frontend com React
Visão Geral
O projeto visa oferecer uma maneira prática e eficiente de controlar um dispositivo Arduino remotamente através de uma página web. Utilizando uma API RESTful, o sistema permite que o frontend envie comandos ao backend, que então são transmitidos ao Arduino, executando ações conforme solicitado.



Descrição dos Diretórios
backend/: Contém o código do servidor NestJS. Este backend é responsável por expor os endpoints que permitem enviar comandos ao Arduino e obter o estado atual do dispositivo.
frontend/: Contém o código React, que fornece a interface de controle. A interface web permite que o usuário interaja com o Arduino, enviando comandos como ligar ou desligar LEDs ou controlar outros dispositivos conectados.
package.json na raiz: Armazena as dependências compartilhadas entre frontend e backend e configurações de scripts para execução e compilação de ambos.
Instalação
Para configurar o projeto, você precisa instalar as dependências do frontend e do backend. Navegue até a raiz do projeto e execute o seguinte comando:

bash
Copiar código
npm install
Este comando instala todas as dependências para o frontend e o backend em uma única pasta node_modules na raiz.

Uso
Para iniciar o projeto, é necessário rodar o backend e o frontend simultaneamente. Use o comando abaixo para iniciar ambos:

bash
Copiar código
npm run dev
Esse comando executará:

Frontend (React): Acesse http://localhost:3000 no navegador para visualizar a interface.
Backend (NestJS): Acesse http://localhost:5000/api para ver a documentação da API ou enviar comandos diretamente ao Arduino.
Backend com NestJS
O backend utiliza NestJS, um framework Node.js para construir APIs escaláveis e organizadas. O NestJS oferece uma estrutura modular, onde cada módulo lida com uma parte específica do projeto.

Estrutura do Backend
Controllers: São responsáveis por lidar com as requisições HTTP. No nosso caso, o DeviceController expõe endpoints para enviar comandos ao Arduino e verificar seu status.
Services: Contêm a lógica principal de negócios. O DeviceService é responsável pela comunicação com o Arduino via serial, enviando comandos e recebendo respostas.
Modules: Cada módulo representa uma funcionalidade. O módulo DeviceModule organiza todos os arquivos relacionados ao controle do dispositivo.
Funcionalidade
O backend fornece uma API RESTful que o frontend consome para enviar comandos ao Arduino. Os endpoints principais incluem:

POST /api/device/control: Envia um comando ao Arduino (ex: ligar ou desligar LED).
GET /api/device/status: Retorna o status atual do dispositivo.
Para a comunicação com o Arduino, o backend usa a biblioteca serialport, que permite o envio de comandos pela porta serial.

Frontend com React
O frontend foi desenvolvido em React e oferece uma interface intuitiva para o usuário enviar comandos ao Arduino. Ele se comunica com o backend através de chamadas HTTP, que são disparadas a partir dos componentes React.

Funcionalidade do Frontend
O frontend contém uma interface de usuário simples, com botões e feedback visual para controlar e visualizar o status do Arduino. Por exemplo:

Botão para Ligar/Desligar: Envia comandos ao backend para controlar o Arduino.
Indicador de Status: Exibe o estado atual do Arduino (ligado, desligado, etc.), obtido a partir do endpoint /status do backend.
Tecnologias
React: Framework JavaScript para construção de interfaces.
Tailwind CSS: Biblioteca de estilização para criar layouts responsivos e modernos.
Conclusão
Este projeto de controle com Arduino, React e NestJS demonstra uma arquitetura full stack robusta, que permite o controle remoto de dispositivos via web. A estrutura modular do NestJS e a interface interativa do React tornam o sistema fácil de manter e expandir, podendo ser adaptado para incluir mais dispositivos ou comandos no futuro.
