export interface Comment {
  _id: string;
  text: string;
  blogId: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
}
