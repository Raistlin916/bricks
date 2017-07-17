import Entity from './Entity'

export default class ComponentMapper<T> {
  private maps = {};

  get(entity: Entity): T {
    return this.maps[entity.id]
  }
}
