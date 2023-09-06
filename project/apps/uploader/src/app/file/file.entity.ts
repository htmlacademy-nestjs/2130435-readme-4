import {Entity} from "@project/util/util-types";
import {File} from "@project/shared/app-types";

export class FileEntity extends Entity<File> {
  id?: string;
  originalName: string;
  size: number;
  mimetype: string;
  hashName: string;
  path: string;
  constructor(file: File) {
    super(file);
  }
}
