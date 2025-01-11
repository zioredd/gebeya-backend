import { type PopulateOptions } from 'mongoose';
import { Populate, PopulateItem } from 'src/common/type';

type InternalPopulate =
  | string
  | PopulateOptions
  | Array<string | PopulateOptions>;

export class PopulateParser<TEntity> {
  ids: string[] = [];

  constructor(
    private readonly populate: Populate,
    private readonly entity: TEntity,
  ) {
    // If entity isn't a proper object, just stop
    if (this.getType(entity) !== 'object') return;

    // Initiate the parsing iteration for each field present
    this.parse(populate);
  }

  private parse(
    populate:
      | PopulateItem
      | InternalPopulate
      | Array<PopulateItem | InternalPopulate>,
    parent: string[] = [],
  ) {
    const type = this.getType(populate);

    // The rule below is wrongly interpreting that not all cases where considered
    // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check
    switch (type) {
      case 'array': {
        this.array(populate as Array<PopulateItem | InternalPopulate>, parent);
        break;
      }

      case 'object': {
        this.object(populate as PopulateItem | PopulateOptions, parent);
        break;
      }

      case 'string': {
        this.string(populate as string, parent);
      }
    }
  }

  private array(
    populate: Array<PopulateItem | InternalPopulate>,
    parent: string[],
  ) {
    for (const item of populate) this.parse(item, parent);
  }

  private object(populate: PopulateItem | PopulateOptions, parent: string[]) {
    if (!populate.path) return;

    const paths = [parent].flat();
    paths.push(populate.path);

    this.obtainIds(paths);

    if (populate.populate) this.parse(populate.populate, paths);
  }

  private string(field: string, parent: string[]) {
    const paths = [parent].flat();
    paths.push(field);

    this.obtainIds(paths);
  }

  private getType(variable: any): string {
    const type = Array.isArray(variable)
      ? 'array'
      : typeof variable === 'string'
        ? 'string'
        : 'object';

    return type;
  }

  private obtainIds(paths: string[]) {
    let pointer: any = this.entity;

    for (const item of paths) {
      if (!pointer[item]) return;
      pointer = pointer[item];
    }

    const pointerType = this.getType(pointer);

    if (pointerType !== 'object' && pointerType !== 'array') return;

    if (pointerType === 'object') {
      this.singleId(pointer);
      return;
    }

    for (const entity of pointer) this.singleId(entity);
  }

  private singleId(pointer: any) {
    const id = pointer.id || pointer._id;

    if (id) this.ids.push(id.toString());
  }
}
