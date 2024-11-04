#include <IRremote.h>
#define IR_RECEIVE_PIN 2
#define LED_PIN 13

const byte IR_RECEIVE_PIN = 2; //mudar o numero do pino conforme o inserido no arduino

void enviarInfra(){

}

void setup() {

Serial.begin(9600); //inicializa porta seria delimitando recebimento de 9600 bytes
Serial.println("teste receber sinal infravermelho"); //exibe mensagem de teste no monitor do serial
IrReceiver.begin(IR_RECEIVE_PIN, ENABLE_LED_FEEDBACK); //Inicializa pino onde arduino está conectado, ENABLE_LED_FEEDBACK = led de feedback deverá piscar caso pino funcionar

}

void loop() {

if(IrReceiver.decode == false){ //o método decode é utilizado para retornar info sobre o funcionamento do input

  //to do: incorporar mensagem de erro caso o script não reconhecer o input do controle
  // caso reconhecer incorporar código para emitir o sinal infravermelho
  }

}