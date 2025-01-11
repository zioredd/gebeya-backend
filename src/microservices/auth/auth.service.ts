import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { RegisterGatewayDto } from 'src/common/dto/gateway/auth/register-gateway.dto';
import { User } from 'src/common/entities/microservices/auth/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly repository: AuthRepository) {}

  async register(payload: RegisterGatewayDto): Promise<User> {
    const user = await this.repository.register(payload);

    if (!user) {
      throw new Error('Failed to register user');
    }

    return user;
  }
}
