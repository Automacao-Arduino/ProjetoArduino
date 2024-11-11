import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('API de Controle Arduino')
    .setDescription('API para controlar o Arduino via web')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(8000);
  // função onde coloca a porta final
  console.log('Aplicação rodando em http://localhost:/8000');
  console.log('Swagger rodando em http://localhost:8000/api');
}

bootstrap();
