import { IsArray, IsIn, IsNumber, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import {QueryDefault} from '../blog.constant';

export class PostQuery {
  @Transform(({ value } ) => +value || QueryDefault.Limit)
  @IsNumber()
  @IsOptional()
  public limit = QueryDefault.Limit;

  @Transform(({ value }) => value.split(',').map((tagId) => +tagId))
  @IsArray({})
  @IsOptional()
  public tags?: number[];

  @IsIn(['asc', 'desc'])
  @IsOptional()
  public sortDirection: 'desc' | 'asc' = QueryDefault.Direction;

  @IsIn(['like', 'date', 'name'])
  @IsOptional()
  public sortType: 'like' | 'date' | 'name';


  @IsIn(['video', 'text', 'quote', 'photo', 'link'])
  @IsOptional()
  public type: 'video' | 'text' | 'quote' | 'photo' | 'link';

  @Transform(({ value }) => +value)
  @IsOptional()
  public page: number = QueryDefault.Page;
}
