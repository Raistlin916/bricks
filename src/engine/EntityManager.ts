import Entity from './Entity'

export default class EntityManager {
  private nextId: number = 0;

  create(): Entity {
    return {
      id: this.nextId ++
    }
  }
}
