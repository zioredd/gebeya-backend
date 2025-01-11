import { Types } from 'mongoose';

export class BaseEntity {
  constructor(
    public id: string,
    public createdAt: Date,
    public updatedAt: Date,
    public createdBy?: string,
    public updatedBy?: string,
  ) {}

  protected static getIdFromDocument(
    document: Types.ObjectId | { _id: Types.ObjectId },
  ): string {
    return this.isId(document)
      ? document.toHexString()
      : document._id.toHexString();
  }

  protected static getEntityFromDocument<T>(
    document: Types.ObjectId | T,
    entityFactory: (document_: T) => any,
  ): any {
    return this.isId(document) ? undefined : entityFactory(document);
  }

  protected static isId(document: any): document is Types.ObjectId {
    return document instanceof Types.ObjectId;
  }

  static toObjectId(id: string) {
    return new Types.ObjectId(id);
  }

  static toObjectIdOrUndefined(id?: string) {
    if (id === undefined) return;
    return BaseEntity.toObjectId(id);
  }

  static toDate(date: string | Date) {
    if (date instanceof Date) return date;
    return new Date(date);
  }

  static toDateOrUndefined(date?: string | Date) {
    if (date === undefined) return;
    return BaseEntity.toDate(date);
  }
}
