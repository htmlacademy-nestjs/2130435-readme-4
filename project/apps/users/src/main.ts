/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import {Logger, ValidationPipe} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {ConfigService} from "@nestjs/config";

const GLOBAL_PREFIX = 'api';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const config = new DocumentBuilder()
  .setTitle('The "Users" service')
  .setDescription('User service API')
  .setVersion('1.0')
  .build();

  app.setGlobalPrefix(GLOBAL_PREFIX);

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('spec', app, document)

  app.useGlobalPipes(new ValidationPipe())

  const port = configService.get('application.port');

  await app.listen(port);
  Logger.log(
      `🚀 Application is running on: http://localhost:${port}/${GLOBAL_PREFIX}`
  );
  Logger.log(
      `🎯  Current mode: ${configService.get('application.environment')}`
  )
}

bootstrap();
