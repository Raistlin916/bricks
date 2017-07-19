import World from 'engine/World'
import Entity from './Entity'
import EntityEdit from './EntityEdit'

export default class EntityManager {
  private nextId: number = 0;
  private world: World;

  constructor(world: World) {
    this.world = world
  }

  create(): EntityEdit {
    const entity = {
      id: this.nextId ++
    }
    return new EntityEdit(entity, this.world)
  }
}
