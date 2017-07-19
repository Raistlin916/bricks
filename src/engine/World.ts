import System from './System'
import EntityEdit from './EntityEdit'
import EntityManager from './EntityManager'
import ComponentManager from './ComponentManager'
import Component from 'engine/Component'

export default class World {
  private systems: System[] = [];
  private entityManager: EntityManager = new EntityManager(this);
  private componentManager: ComponentManager = new ComponentManager(this);

  public addSystem(system: System): this {
    this.systems.push(system);
    system.attachWorld(this);
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
      this.entityManager.query(system.getAspect())
        .forEach(entity => system.process(entity, delta));
    });
  }

  public importComponents(components) {
    for(let key in components) {
      this.componentManager.createMapper(components[key])
    }
  }
}
