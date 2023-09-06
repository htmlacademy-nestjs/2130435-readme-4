import {Entity} from "@project/util/util-types";
import {Subscriber} from "@project/shared/app-types";

export class EmailSubscriberEntity extends Entity<Subscriber> {
  constructor(blog: Subscriber) {
    super(blog);
  }
}
