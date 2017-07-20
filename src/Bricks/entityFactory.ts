import World from 'engine/World'
import Entity from 'engine/Entity'
import Position from './components/Position'
import Paint from './components/Paint'
import Physical from './components/Physical'
import WallSensor from './components/WallSensor'
import PlayerControlled from './components/PlayerControlled'

export default {
  createBrick(world: World, x: number, y: number): Entity {
    return world.createEntity()
      .add(new Position(x, y))
      .add(new Paint('brick'))
      .add(new Physical(0, 0))
      .getEntity()
  },

  createBall(world: World, x: number, y: number): Entity {
    return world.createEntity()
      .add(new Position(x, y))
      .add(new Paint('ball'))
      .add(new Physical(50, 200))
      .add(new WallSensor())
      .getEntity()
  },

  createBoard(world: World, x: number, y: number): Entity {
    return world.createEntity()
      .add(new Position(x, y))
      .add(new Paint('board'))
      .add(new Physical(0, 0))
      .add(new PlayerControlled())
      .getEntity()
  }
}
