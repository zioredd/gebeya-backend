import type { ConfigModuleOptions } from '@nestjs/config';
import { plainToClass } from 'class-transformer';
import { validateSync } from 'class-validator';

import aiConfig from './ai.config';
import analyticsConfig from './analytics.config';
import appConfig from './app.config';
import cacheConfig from './cache.config';
import cloudinaryConfig from './cloudinary.config';
import contentModerationConfig from './content-moderation.config';
import databaseConfig from './database.config';
import gcpConfig from './gcp.config';
import googleAuthConfig from './google-auth.config';
import hmsConfig from './hms.config';
import iamConfig from './iam.config';
import microservicesConfig from './microservices.config';
import productPriceConfig from './product-price.config';
import redisConfig from './redis.config';
import scyllaConfig from './scylladb.config';
import serverConfig from './server.config';
import socketConfig from './socket.config';
import stripeConfig from './stripe.config';
import { EnvironmentModel } from '../model/environment.model';

export const ConfigModuleConfig: ConfigModuleOptions = {
  isGlobal: true,
  envFilePath: '.env',
  validate(config: Record<string, unknown>) {
    const validatedConfig = plainToClass(EnvironmentModel, config, {
      enableImplicitConversion: true,
    });

    const errors = validateSync(validatedConfig, {
      skipMissingProperties: false,
    });

    if (errors.length > 0) {
      throw new Error(errors.toString());
    }

    return validatedConfig;
  },
  load: [
    serverConfig,
    microservicesConfig,
    iamConfig,
    redisConfig,
    hmsConfig,
    stripeConfig,
    appConfig,
    cacheConfig,
    databaseConfig,
    googleAuthConfig,
    scyllaConfig,
    socketConfig,
    gcpConfig,
    aiConfig,
    analyticsConfig,
    contentModerationConfig,
    productPriceConfig,
    cloudinaryConfig,
  ],
};
