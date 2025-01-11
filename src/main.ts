import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { CONFIG_TOKEN } from './common/config/constant';
import { WebSocketAdapter } from './gateway/websocket/socket.adapter';
import { VersioningType } from '@nestjs/common';
import { appCorsConfigs } from './common/config/cors.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
    rawBody: true,
    bufferLogs: true,
  });

  app.enableCors(appCorsConfigs);

  const configService = app.get(ConfigService);
  const appConfig = configService.get(CONFIG_TOKEN.APP);

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: appConfig.apiVersion,
  });

  const wsAdapter = new WebSocketAdapter(app);
  await wsAdapter.connectToRedis(configService);

  app.useWebSocketAdapter(wsAdapter);

  const microservicesConfig = configService.get(CONFIG_TOKEN.MICROSERVICES);
  const tcpConfig = microservicesConfig.tcp;
  const redisConfig = microservicesConfig.redis;

  const serverConfig = configService.get(CONFIG_TOKEN.SERVER);
  const { port } = serverConfig;

  app.connectMicroservice(tcpConfig);
  app.connectMicroservice(redisConfig);

  await app.startAllMicroservices();
  await app
    .listen(port)
    .then(() => console.log(`Server is running on port ${port}`));

  // app.connectMicroservice({
  //   transport: Transport.TCP,
  //   options: {
  //     port: Number.parseInt(process.env.MICROSERVICES_TCP_PORT),
  //   },
  // });

  // app.connectMicroservice({
  //   transport: Transport.REDIS,
  //   options: {
  //     host: process.env.REDIS_HOST,
  //     port: Number.parseInt(process.env.REDIS_PORT),
  //     username: process.env.REDIS_USERNAME,
  //     password: process.env.REDIS_PASSWORD,
  //   },
  // });
  // await app.startAllMicroservices();

  // await app.listen(Number.parseInt(process.env.APP_PORT));
}
bootstrap();
