import World from './World'
import Component from './Component'
import ComponentMapper from './ComponentMapper'
import Entity from './Entity'
import Aspect from './Aspect'

export default class ComponentManager {
  private world: World;
  private componentMappers = {};

  constructor(world: World) {
    this.world = world
  }

  public create<T extends Component>(component: T, entity: Entity): void {
    let cm: ComponentMapper<T> = this.componentMappers[component.className]
    if (!cm) {
      cm = new ComponentMapper<T>()
      this.componentMappers[component.constructor.name] = cm
    }
    cm.add(component, entity)
  }

  public remove(entity: Entity): void {
    Object.keys(this.componentMappers).forEach(key => {
      this.componentMappers[key].remove(entity);
    });
  }

  public query(aspect: Aspect): Entity[] {
    const allTypes = aspect.getAllTypes()
    const result = {}
    allTypes.forEach(klass => {
      const componentMapper = this.componentMappers[klass.name]
      if (!componentMapper) {
        return
      }
      componentMapper.getEntityIds()
        .forEach(id => {
          result[id] = true
        })
    })

    return Object.keys(result).map(id => ({ id: +id }))
  }
}
