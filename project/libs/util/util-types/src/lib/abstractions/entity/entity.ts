import { EntityInterface } from './abstract-entity.interface'

export abstract class Entity<T> implements EntityInterface<T> {
  constructor(
    entity: T
  ) {
    this.fillEntity(entity)
  }

  public toObject() {
    return Object.assign({}, this) as T;
  }

  public fillEntity(entity: T) {
    Object.entries(entity).forEach(
      ([key, value]) => {
      this[key] = value
    })
  }
}
