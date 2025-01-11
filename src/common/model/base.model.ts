import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({
  versionKey: false,
  timestamps: true,
})
export class BaseDocument extends Document {
  _id: Types.ObjectId;

  @Prop({ type: Date })
  createdAt: Date;

  @Prop({ type: Date })
  updatedAt: Date;
}

export const BaseSchema = SchemaFactory.createForClass(BaseDocument);
