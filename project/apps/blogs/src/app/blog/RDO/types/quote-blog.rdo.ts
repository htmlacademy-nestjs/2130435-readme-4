import { QuoteBlog } from "libs/shared/app-types/src/lib/blog/blog.interface";
import { BlogTemplateRdo } from "../template/blog-template.rdo";
import { Expose } from "class-transformer";

export class QuoteBlogRdo
extends BlogTemplateRdo
implements Pick<QuoteBlog, 'quote' | 'authorQuote'>{

  @Expose()
  quote: string;

  @Expose()
  authorQuote: string;
}
