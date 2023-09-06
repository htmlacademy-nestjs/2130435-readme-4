import {Blog} from "@project/shared/app-types";

export class NotifyDto {
  public id: string;
  public email: string;
  public posts: Blog[];
}
