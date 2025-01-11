import { UserDocument } from 'src/common/model/microservices/auth/user.model';
import { BaseEntity } from '../../base.entity';

export class User extends BaseEntity {
  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    public email: string,
  ) {
    super(id, createdAt, updatedAt);
  }

  static fromDocument(document: UserDocument): User {
    return new User(
      document.id,
      document.createdAt,
      document.updatedAt,
      document.email,
    );
  }

  static fromDocuments(documents: UserDocument[]): User[] {
    return documents.map((document) => this.fromDocument(document));
  }
}
