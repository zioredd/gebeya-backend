import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule } from '@nestjs/microservices';

import { TRANSPORT_PROXY } from 'src/common/constants/transport-proxy-token.constant';
import { NetworkingService } from './networking.service';
import { CONFIG_TOKEN } from 'src/common/config/constant';

@Global()
@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: TRANSPORT_PROXY.TCP,
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => {
          const microservicesConfig = configService.get(
            CONFIG_TOKEN.MICROSERVICES,
          );
          return microservicesConfig.tcp;
        },
      },
      {
        name: TRANSPORT_PROXY.REDIS,
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => {
          const microservicesConfig = configService.get(
            CONFIG_TOKEN.MICROSERVICES,
          );
          return microservicesConfig.redis;
        },
      },
    ]),
  ],
  providers: [NetworkingService],
  exports: [NetworkingService],
})
export class NetworkingModule {}
