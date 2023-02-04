import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';

require('colors');

const PORT = process.env.PORT || 5000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const config = new DocumentBuilder()
    .setTitle('Backend for Online-Store')
    .setDescription('Documentation REST API')
    .setVersion('1.0.0')
    .addTag('LexKorn')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  // @ts-ignore
  await app.listen(PORT, () => console.log(`Server has started on port ${PORT}`.bgCyan));
}
bootstrap();
