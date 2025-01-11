import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModuleConfig } from 'src/common/config';
import { CONFIG_TOKEN } from 'src/common/config/constant';

@Module({
  imports: [
    ConfigModule.forRoot(ConfigModuleConfig),
    MongooseModule.forRootAsync({
      useFactory(configService: ConfigService) {
        const databaseConfig = configService.get(CONFIG_TOKEN.DATABASE);
        return {
          uri: databaseConfig.uri,
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [],
})
export class InfrastructureModule {}
