import Entity from './Entity'
import Component from './Component'

export default class ComponentMapper<T extends Component> {
  private maps = {};

  public get(entity: Entity): T {
    return this.maps[entity.id]
  }

  public add(component: T, entity: Entity): void {
    this.maps[entity.id] = component
  }

  public remove(entity: Entity) {
    delete this.maps[entity.id]
  }

  public getEntityIds(): number[] {
    return Object.keys(this.maps).map(id => +id)
  }
}
