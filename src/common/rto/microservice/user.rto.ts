import { User } from 'src/common/entities/microservices/auth/user.entity';

export class UserRto {
  constructor(
    public id: string,
    public email: string,
  ) {}

  static fromEntity(entity: User): UserRto {
    return new UserRto(entity.id, entity.email);
  }
}
