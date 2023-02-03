import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

require('colors');

const PORT = process.env.PORT || 5000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // @ts-ignore
  await app.listen(PORT, () => console.log(`Server has started on port ${PORT}`.bgCyan));
}
bootstrap();
