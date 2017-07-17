import System from './System'
import EntityEdit from './EntityEdit'
import EntityManger from './EntityManager'

export default class World {
  private systems: System[] = [];
  private entityManger: EntityManger = new EntityManger();

  public addSystem(system: System): World {
    this.systems.push(system)
    return this;
  }

  createEntity(): EntityEdit {
    return this.entityManger.create();
  }
}
