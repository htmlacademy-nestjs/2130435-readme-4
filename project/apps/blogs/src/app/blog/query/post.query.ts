import { IsArray, IsIn, IsNumber, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import {
  DEFAULT_SORT_DIRECTION,
  QUERY_STANDART_LIMIT,
  QUERY_START_PAGE
} from '../blog.constant';

export class PostQuery {
  @Transform(({ value } ) => +value || QUERY_STANDART_LIMIT)
  @IsNumber()
  @IsOptional()
  public limit = QUERY_STANDART_LIMIT;

  @Transform(({ value }) => value.split(',').map((tagId) => +tagId))
  @IsArray({})
  @IsOptional()
  public tags?: number[];

  @IsIn(['asc', 'desc'])
  @IsOptional()
  public sortDirection: 'desc' | 'asc' = DEFAULT_SORT_DIRECTION;

  @IsIn(['like', 'date', 'name'])
  @IsOptional()
  public sortType: 'like' | 'date' | 'name';


  @IsIn(['video', 'text', 'quote', 'photo', 'link'])
  @IsOptional()
  public type: 'video' | 'text' | 'quote' | 'photo' | 'link';

  @Transform(({ value }) => +value)
  @IsOptional()
  public page: number = QUERY_START_PAGE;
}
