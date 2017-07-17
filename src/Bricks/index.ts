import World from 'engine/World'
import PhysicalSystem from './systems/PhysicalSystem'

export default class Bricks {
  private world: World;

  constructor() {
    this.world = new World()
    this.world.addSystem(new PhysicalSystem())
    console.log(this)
  }
}
