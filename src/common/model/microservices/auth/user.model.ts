import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseDocument, BaseSchema } from '../../base.model';

@Schema({ collection: 'users' })
export class UserDocument extends BaseDocument {
  @Prop({ type: String })
  email: string;

  @Prop({ type: String })
  password: string;
}

const UserSchema = SchemaFactory.createForClass(UserDocument);
UserSchema.add(BaseSchema);
export { UserSchema };
