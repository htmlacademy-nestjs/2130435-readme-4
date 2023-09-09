import { Types } from 'mongoose';
import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

const CHECK_TYPE = 'param';
enum ErrorType {
  BadMongoid = 'Bad entity ID',
  OnlyForParam = 'This pipe must used only with params!',
}

@Injectable()
export class MongoidValidationPipe implements PipeTransform {
  transform(value: string, { type }: ArgumentMetadata) {
    if (type !== CHECK_TYPE) {
      throw new Error(ErrorType.OnlyForParam)
    }

    if (!Types.ObjectId.isValid(value)) {
      throw new BadRequestException(ErrorType.BadMongoid);
    }

    return value;
  }
}
