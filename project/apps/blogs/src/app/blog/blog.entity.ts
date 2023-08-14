import { Blog, PhotoFormat } from '@project/shared/app-types'
import { Entity } from '@project/util/util-types'
import { BlogType, LikesMap } from 'libs/shared/app-types/src/lib/blog/blog.interface';

export class BlogEntity extends Entity<Blog> {
  _id?: string;
  authorId: string;
  creatorId: string;
  type: BlogType;
  tags: string[];
  isPublished: boolean;
  publicAt: Date;
  updatedAt: Date;
  isRepost: boolean;
  likesCounter: number;
  likes: LikesMap

  //VIDEO
  title: string;
  videoLink: string;

  //TEXT
  //title: string;
  announcement: string;
  text: string;

  //QUOTE
  quote: string;
  authorQuote: string;

  //PHOTO
  photo: PhotoFormat;
  photoSize: string;

  //LINK
  link: string;
  description: string;

  constructor(blog: Blog) {
    super(blog);
    this.indexClass();
  }

  private indexClass = () => {
    switch (this.type) {
      case 'video':
        this.deleteText();
        this.deleteQuote();
        this.deletePhoto();
        this.deleteLink();
        return
      case 'text':
        this.deleteVideo();
        this.deleteQuote();
        this.deletePhoto();
        this.deleteLink();
        return
      case 'quote':
        this.deleteVideo();
        this.deleteText();
        this.deletePhoto();
        this.deleteLink();
        return
      case 'photo':
        this.deleteVideo();
        this.deleteText();
        this.deleteQuote();
        this.deleteLink();
        return
      case 'link':
        this.deleteVideo();
        this.deleteText();
        this.deleteQuote();
        this.deletePhoto();
        return
    }
  }


  private deleteVideo() {
    delete this.videoLink
  }

  private deleteText() {
    delete this.announcement
    delete this.text
  }

  private deleteQuote() {
    delete this.quote
    delete this.authorQuote
  }

  private deletePhoto() {
    delete this.photo
    delete this.photoSize
  }

  private deleteLink() {
    delete this.link
    delete this.description
  }
}
