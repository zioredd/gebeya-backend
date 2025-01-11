import { Body, Controller, Post } from '@nestjs/common';
import { RegisterGatewayDto } from 'src/common/dto/gateway/auth/register-gateway.dto';
import { ACTION } from 'src/common/enum/action.enum';
import { CONTROLLER } from 'src/common/enum/controller.enum';
import { MICROSERVICE } from 'src/common/enum/microservice.enum';
import { UserRto } from 'src/common/rto/microservice/user.rto';
import { NetworkingService } from 'src/core/networking';

@Controller('auth')
export class AuthController {
  constructor(private readonly networking: NetworkingService) {}
  @Post('/register')
  async register(@Body() body: RegisterGatewayDto): Promise<UserRto> {
    return this.networking.send<UserRto>(
      `${MICROSERVICE.AUTH}.${CONTROLLER.AUTH}.${ACTION.REGISTER}`,
      body,
    );
  }
}
