import { type PopulateOptions } from 'mongoose';

export type PopulateItem = {
  path: string;
  model?: string;
  select?: string;
  populate?: string | PopulateOptions | Array<string | PopulateOptions>;
};

export type Populate = PopulateItem[];
