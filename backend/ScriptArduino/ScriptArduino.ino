#include <IRremote.h>
#define IR_RECEIVE_PIN 2
#define LED_PIN 13

IRrecv receiver(IR_RECEIVE_PIN);
IRsend sender; 

void enviarInfra(unsigned long codigo){

  sender.sendNEC(codigo, 32); 
  Serial.print("Enviando código IR: ");
  Serial.println(codigo, HEX);
  
}

void setup() {

 pinMode(LED_PIN, OUTPUT);

 Serial.begin(9600);

  while(!Serial)
  {  }

  receiver.enableIRIn();

  Serial.print("Receptor utlra vermelho funcionando!");

}

void loop() {

  decode_results results;

  if (receiver.decode(&results))
  {
    
  if(results.value == 0xFE50AF)
    digitalWrite(LED_PIN, !digitalRead(LED_PIN));
    
  Serial.print(results.bits);
  Serial.print(": ");
  Serial.println(results.value, HEX);

  receiver.resume(); // Receive the next value
  }

}
