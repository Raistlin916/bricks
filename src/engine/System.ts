export default class System {
  private entityIds: Array<number>;

  insert(entityId: number) {
    this.entityIds.push(entityId);
  }

  remove(entityId: number) {
    this.entityIds.splice(this.entityIds.indexOf(entityId), 1);
  }

  getEntities() {
    return this.entityIds;
  }
}
