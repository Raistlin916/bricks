import System from './System'
import Entity from './Entity'
import EntityManger from './EntityManager'

export default class World {
  private systems: Array<System> = [];
  private entityManger: EntityManger = new EntityManger();

  public addSystem(system: System): World {
    this.systems.push(system)
    return this;
  }

  createEntity(): Entity {
    return this.entityManger.create();
  }
}
