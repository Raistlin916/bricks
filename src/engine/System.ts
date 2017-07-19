import Entity from './Entity';
import Aspect from './Aspect';

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
      if (item.id === entity.id) {
        this.entities.splice(index, 1);
        return true;
      }
    })
  }

  public getEntities(): Entity[] {
    return this.entities;
  }

  public getAspect() {
    return this.aspect;
  }

  abstract process(entity: Entity, delta: number): void;
}
