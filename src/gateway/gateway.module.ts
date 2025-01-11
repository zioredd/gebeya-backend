import { Module } from '@nestjs/common';
import { GatewayService } from './gateway.service';
import { NetworkingModule } from 'src/core/networking';
import { AuthGatewayModule } from './controllers/auth/auth-gateway.module';
import { AuthController } from './controllers/auth/auth.controller';

@Module({
  imports: [NetworkingModule, AuthGatewayModule],
  controllers: [AuthController],
  providers: [GatewayService],
})
export class GatewayModule {}
