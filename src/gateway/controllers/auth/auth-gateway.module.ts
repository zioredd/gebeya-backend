import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { GatewayService } from 'src/gateway/gateway.service';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [],
})
export class AuthGatewayModule {}
