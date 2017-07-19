import Entity from './Entity';
import Aspect from './Aspect';
import World from './World';
import ComponentManager from './ComponentManager'

export default abstract class System {
  private entities: Entity[];
  protected aspect: Aspect;

  constructor(aspect: Aspect) {
    this.aspect = aspect;
  }

  public insert(entity: Entity): void {
    this.entities.push(entity);
  }

  public remove(entity: Entity): boolean {
    return this.entities.some((item: Entity, index: number) => {
      if (item === entity) {
        this.entities.splice(index, 1);
        return true;
      }
    })
  }

  public getEntities(): Entity[] {
    return this.entities;
  }

  public getAspect(): Aspect {
    return this.aspect;
  }

  abstract process(entity: Entity, delta: number): void;

  public attachWorld(world: World): void {
    const cm: ComponentManager = world.getComponentManager();
    const componentMappers = cm.getMappers();
    Object.keys(componentMappers).forEach(key => {
      this[`${key.toLowerCase()}Mapper`] = componentMappers[key]
    });
  }

  public onBegin(): void{

  }

  public onEnd(): void{

  }
}
