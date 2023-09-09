/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import {Logger, ValidationPipe} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const GLOBAL_PREFIX = 'api';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('The "Blogs" service')
    .setDescription('Blog service API')
    .setVersion('1.0')
    .build();

  app.setGlobalPrefix(GLOBAL_PREFIX);

  app.useGlobalPipes(new ValidationPipe({
    transform: true
  }))

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('spec', app, document)

  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${GLOBAL_PREFIX}`
  );
}

bootstrap();

