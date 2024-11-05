#include <IRremote.h>
#define IR_RECEIVE_PIN 2
#define LED_PIN 13

//Importante!!! colocar transmissor de infra vermelho no pino3!!!

const byte IR_RECEIVE_PIN = 2; //pino que recebe o sinal
const byte IR_SEND_PIN = 3; //pino que envia o sinal

IRrecv irrecv(IR_RECEIVE_PIN); //inicializando classe IRrecv

void enviarInfra(){

}

void setup() {

Serial.begin(9600); //inicializa porta seria delimitando recebimento de 9600 bytes
Serial.println("teste receber sinal infravermelho"); //exibe mensagem de teste no monitor do serial
IrReceiver.begin(IR_RECEIVE_PIN, ENABLE_LED_FEEDBACK); //Inicializa pino onde arduino está conectado, ENABLE_LED_FEEDBACK = led de feedback deverá piscar caso pino funcionar

}

void loop() {

if(IrReceiver.decode(&results) == false){ //o método decode é utilizado para retornar info sobre o funcionamento do input
  
  Serial.println("Erro! Sinal não reconhecido"); 
  
  }else{//caso sinal infra vermelho for reconhecido

    enviarInfra();
    
    }

}