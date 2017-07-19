import System from './System'
import EntityEdit from './EntityEdit'
import EntityManager from './EntityManager'
import ComponentManager from './ComponentManager'

export default class World {
  private systems: System[] = [];
  private entityManager: EntityManager = new EntityManager(this);
  private componentManager: ComponentManager = new ComponentManager(this);

  public addSystem(system: System): World {
    this.systems.push(system)
    return this;
  }

  public createEntity(): EntityEdit {
    return this.entityManager.create();
  }

  public getComponentManager(): ComponentManager {
    return this.componentManager;
  }

  public getEntityManager(): EntityManager {
    return this.entityManager;
  }

  public process(delta: number): void {
    this.systems.forEach(system => {
      this.componentManager.query(system.getAspect())
        .forEach(entity => system.process(entity, delta));
    });
  }
}
