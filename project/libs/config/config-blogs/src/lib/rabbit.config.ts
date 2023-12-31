import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';
import {RabbitConfig} from "@project/shared/app-types";

export const ENV_BLOG_FILE_PATH = 'apps/blog/.blog.env';
export const DEFAULT_ERROR_MESSAGE =  'Environments validation failed. Please check .env file. Error message: ';

export enum ConfigName {
  Jwt = 'jwt',
  Rabbit = 'rabbit'
}
export default registerAs(ConfigName.Rabbit, (): RabbitConfig => {
  const  config: RabbitConfig = {
    host: process.env.RABBIT_HOST,
    password: process.env.RABBIT_PASSWORD,
    port: parseInt(process.env.RABBIT_PORT),
    user: process.env.RABBIT_USER,
    queue: process.env.RABBIT_QUEUE,
    exchange: process.env.RABBIT_EXCHANGE,
  };

  const validationSchema = Joi.object<RabbitConfig>({
    host: Joi.string().valid().hostname().required(),
    password: Joi.string().required(),
    port: Joi.number().port(),
    user: Joi.string().required(),
    queue: Joi.string().required(),
    exchange: Joi.string().required(),
  });

  const { error } = validationSchema.validate(config, { abortEarly: true });

  if (error) {
    throw new Error(
      `[Notify Config]: ${DEFAULT_ERROR_MESSAGE} ${error.message}`,
    );
  }

  return config;
});
