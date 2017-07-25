import World from 'engine/World'
import Entity from 'engine/Entity'
import { Position, Paint, Physical, WallSensor, Bound, PlayerControlled, Charge } from './components/index'

export default {
  createBrick(world: World, x: number, y: number): Entity {
    return world.createEntity()
      .add(new Position(x, y))
      .add(new Paint('brick'))
      .add(new Bound(20, 10))
      .getEntity()
  },

  createBall(world: World, x: number, y: number): Entity {
    return world.createEntity()
      .add(new Position(x, y))
      .add(new Paint('ball'))
      .add(new Physical(50, 200))
      .add(new Bound(-5, -5, 5, 5))
      .add(new WallSensor())
      .add(new Charge())
      .getEntity()
  },

  createBoard(world: World, x: number, y: number): Entity {
    return world.createEntity()
      .add(new Position(x, y))
      .add(new Paint('board'))
      .add(new Physical())
      .add(new PlayerControlled())
      .add(new Bound(20, 5))
      .getEntity()
  }
}
