import Entity from './Entity'
import EntityEdit from './EntityEdit'

export default class EntityManager {
  private nextId: number = 0;

  create(): EntityEdit {
    const entity = {
      id: this.nextId ++
    }
    return new EntityEdit(entity)
  }
}
