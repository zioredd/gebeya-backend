import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, ProjectionFields } from 'mongoose';
import { objectId } from 'src/common/validators/object-id.validator';
import { EntityMapper } from './entity-mapper';
import { Populate } from 'src/common/type';
import { SortDirection } from 'src/common/enum/sort.enum';

@Injectable()
export abstract class BaseRepository<TDocument, TEntity> {
  readonly objectId = objectId;
  constructor(
    @InjectModel('MODEL_NAME') protected readonly model: Model<TDocument>,
    private readonly entityClass: EntityMapper<TDocument, TEntity>,
  ) {}

  async count(filter: FilterQuery<TDocument> = {}): Promise<number> {
    filter = this.objectId.transform(filter);
    return this.model.countDocuments(filter);
  }

  async find(
    filter: FilterQuery<TDocument> = {},
    populate?: Populate,
    limit?: number,
    sort?: Record<string, SortDirection>,
    projection?: ProjectionFields<TDocument>,
  ): Promise<TEntity[]> {
    filter = this.objectId.transform(filter);

    let databaseQuery = this.model.find(filter);

    if (populate?.length) {
      databaseQuery = databaseQuery.populate(populate);
    }

    if (limit) {
      databaseQuery = databaseQuery.limit(limit);
    }

    if (sort) {
      databaseQuery = databaseQuery.sort(sort);
    }

    if (projection) {
      databaseQuery = databaseQuery.select(this.objectId.transform(projection));
    }

    const documents = await databaseQuery.exec();
    const data = this.entityClass.fromDocuments(documents);

    return data;
  }

  async create(createDto: unknown, populate?: Populate): Promise<TEntity> {
    createDto = this.entityClass.toDocument
      ? this.entityClass.toDocument(createDto as Partial<TEntity>, this.model)
      : this.objectId.transform(createDto);

    const document = await this.model.create(createDto);
    const filter = { _id: document._id };

    if (!populate) {
      const entity = this.entityClass.fromDocument(document);

      // Cache for non-populated version, using the plain entity
      //   await this.setCache(entity, undefined, { filter });

      return entity;
    }

    // Prepare the poulated version
    const data = (await this.findOne(filter, populate)) as TEntity;

    // And cache it before finally returning
    // await this.setCache(data, undefined, { filter, populate });

    return data;
  }

  async findOne(
    filter: FilterQuery<TDocument>,
    populate?: Populate,
    projection?: ProjectionFields<TDocument>,
    sort?: Record<string, SortDirection>,
  ): Promise<TEntity | undefined> {
    filter = this.objectId.transform(filter);
    projection &&= this.objectId.transform(projection);

    // const cache = await this.findCache(filter, populate, projection, sort);

    // if (cache && typeof cache !== 'string') {
    //   return cache as TEntity;
    // }

    let databaseQuery = this.model.findOne(filter);

    if (populate) {
      databaseQuery = databaseQuery.populate(populate);
    }

    if (sort) {
      databaseQuery = databaseQuery.sort(sort);
    }

    if (projection) {
      databaseQuery = databaseQuery.select(projection);
    }

    const document = await databaseQuery.exec();

    const data = document ? this.entityClass.fromDocument(document) : undefined;

    // if (cache && typeof cache === 'string' && data)
    //   await this.setCache(data, cache, undefined, populate);

    return data;
  }
}
