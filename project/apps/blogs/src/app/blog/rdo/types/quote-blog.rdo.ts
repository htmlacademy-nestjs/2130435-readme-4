import { QuoteBlog } from "libs/shared/app-types/src/lib/blog/blog.interface";
import { BlogTemplateRdo } from "../template/blog-template.rdo";
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class QuoteBlogRdo
extends BlogTemplateRdo
implements Pick<QuoteBlog, 'quote' | 'authorQuote'>{

  @ApiProperty({
    description: 'Blog quote',
    example: 'strength people always win',
  })
  @Expose()
  quote: string;

  @ApiProperty({
    description: 'Blog quote author',
    example: 'Benjamin Franklin',
  })
  @Expose()
  authorQuote: string;
}
