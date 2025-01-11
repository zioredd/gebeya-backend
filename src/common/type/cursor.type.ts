import { type SortDirection } from '../enum/sort.enum';

export interface PaginationQueryDto {
  next?: string;
  prev?: string;
  sortBy?: string;
  sortDirection?: SortDirection;
  limit: number;
}
