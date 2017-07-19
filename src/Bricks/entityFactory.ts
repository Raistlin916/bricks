import World from 'engine/World'
import Entity from 'engine/Entity'
import Position from './components/Position'
import Paint from './components/Paint'
import Physical from './components/Physical'

export default {
  createBrick(world: World, x: number, y: number): Entity {
    return world.createEntity()
      .add(new Position(x, y))
      .add(new Paint('brick'))
      .add(new Physical(10, 10))
      .getEntity()
  }
}
