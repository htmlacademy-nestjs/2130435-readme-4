export interface CRUDRepository<Entity, Id, ReturnValue> {
  findById(id: Id): Promise<ReturnValue | null>;
  create(item: Entity): Promise<ReturnValue>;
  update(id: Id, entity: Entity): Promise<ReturnValue>;
  destroy(id: Id): Promise<void>;
}

