import { type Model } from 'mongoose';

export type EntityMapper<TDocument, TEntity> = {
  fromDocument: (document: TDocument) => TEntity;
  fromDocuments: (documents: TDocument[]) => TEntity[];
  toDocument?(raw: Partial<TEntity>, model: Model<TDocument>): TDocument;
  toDocuments?(
    raw: Array<Partial<TEntity>>,
    model: Model<TDocument>,
  ): TDocument[];
};
