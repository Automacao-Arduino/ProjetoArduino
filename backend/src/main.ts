import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'; 
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API de Exemplo para mexer no arduino')
    .setDescription('API s')
    .setVersion('0.01')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, document); 

  await app.listen(8000); 
}
bootstrap();
