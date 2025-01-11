import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterGatewayDto } from 'src/common/dto/gateway/auth/register-gateway.dto';
import { User } from 'src/common/entities/microservices/auth/user.entity';
import { UserDocument } from 'src/common/model/microservices/auth/user.model';
import { BaseRepository } from 'src/core/repository/base-repository';

@Injectable()
export class AuthRepository extends BaseRepository<UserDocument, User> {
  constructor(
    @InjectModel(UserDocument.name)
    readonly model: Model<UserDocument>,
  ) {
    super(model, User);
  }

  async register(payload: RegisterGatewayDto): Promise<User> {
    console.log('Registering user...');
    return this.create(payload);
  }
}
