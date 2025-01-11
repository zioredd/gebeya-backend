import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ACTION } from 'src/common/enum/action.enum';
import { CONTROLLER } from 'src/common/enum/controller.enum';
import { MICROSERVICE } from 'src/common/enum/microservice.enum';
import { AuthService } from './auth.service';
import { RegisterGatewayDto } from 'src/common/dto/gateway/auth/register-gateway.dto';
import { UserRto } from 'src/common/rto/microservice/user.rto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern(`${MICROSERVICE.AUTH}.${CONTROLLER.AUTH}.${ACTION.REGISTER}`)
  async register(payload: RegisterGatewayDto): Promise<UserRto> {
    const response = await this.authService.register(payload);

    return UserRto.fromEntity(response);
  }
}
