import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT || 8080);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true
    })
  )
}
bootstrap();
