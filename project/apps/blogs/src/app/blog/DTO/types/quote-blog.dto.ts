import { QuoteBlog } from "libs/shared/app-types/src/lib/blog/blog.interface";
import { CreateBlogTemplateDto } from "../template/blog-template.dto";
import { ApiProperty } from "@nestjs/swagger";

export class CreateQuoteBlogDto
extends CreateBlogTemplateDto
implements Pick<QuoteBlog, 'quote' | 'authorQuote'>{
  @ApiProperty({
    description: 'Blog type',
    example: 'quote',
  })
  type: 'quote';

  @ApiProperty({
    description: 'Blog quote',
    example: 'strength people always win',
  })
  quote: string;

  @ApiProperty({
    description: 'Blog quote author',
    example: 'Benjamin Franklin',
  })
  authorQuote: string;
}
