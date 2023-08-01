import { QuoteBlog } from "libs/shared/app-types/src/lib/blog/blog.interface";
import { CreateBlogTemplateDto } from "../template/blog-template.dto";

export class CreateQuoteBlogDto
extends CreateBlogTemplateDto
implements Pick<QuoteBlog, 'quote' | 'authorQuote'>{
  type: 'quote';
  quote: string;
  authorQuote: string;
}
