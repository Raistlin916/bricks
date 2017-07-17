import Entity from './Entity';
import Component from './Component'

export default class EntityEdit {
  private entity: Entity;
  constructor(entity: Entity) {
    this.entity = entity;
  }

  public add(component: Component): EntityEdit {
    return this;
  }

  public getEntity(): Entity {
    return this.entity
  }
}
