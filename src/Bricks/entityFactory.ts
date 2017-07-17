import World from 'engine/World'
import Entity from 'engine/Entity'
import Position from './components/Position'
import Paint from './components/Paint'

export default {
  createBrick(world: World, x: number, y: number): Entity {
    return world.createEntity()
      .add(new Position(x, y))
      .add(new Paint('Brick'))
      .getEntity()
  }
}
