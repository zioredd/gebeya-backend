import { Types } from 'mongoose';

// When defining a class with only static methods, both eslint and typescript
// recommend to simply create an object with those static methods
export const objectId = {
  transform(payload: any): any {
    const type = typeof payload;

    if (type === 'string') return new Types.ObjectId(payload);

    if (type === 'object') return this.traverseAndConvert(payload);

    return payload;
  },

  traverseAndConvert(value: any): any {
    if (Array.isArray(value)) {
      return value.map((item) => this.traverseAndConvert(item));
    }

    if (value !== null && typeof value === 'object') {
      for (const key of Object.keys(value)) {
        value[key] = this.traverseAndConvert(value[key]);
      }

      return value;
    }

    if (typeof value === 'string') {
      return this.toObjectId(value);
    }

    return value;
  },

  toObjectId(value: string | Types.ObjectId): any {
    if (this.isValid(value)) {
      return new Types.ObjectId(value);
    }

    return value;
  },

  isValid(id: any): boolean {
    return Types.ObjectId.isValid(id);
  },
};
