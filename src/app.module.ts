import { Module } from '@nestjs/common';
import { GatewayModule } from './gateway/gateway.module';
import { AuthMicroservice } from './microservices/auth/auth.module';
import { InfrastructureModule } from './core/infrastructure/infrastructure.module';

@Module({
  imports: [InfrastructureModule, GatewayModule, AuthMicroservice],
})
export class AppModule {}
