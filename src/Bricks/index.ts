import World from 'engine/World'
import PhysicalSystem from './systems/PhysicalSystem'
import RenderSystem from './systems/RenderSystem'
import entityFactory from './entityFactory'
import * as components from './components/index'


export default class Bricks {
  private world: World;

  constructor() {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    this.world = new World()
    this.world.importComponents(components)
    this.world.addSystem(new PhysicalSystem())
      .addSystem(new RenderSystem(ctx))


    entityFactory.createBrick(this.world, 10, 10)

    setInterval(() => {
      this.world.process(0.01)
    }, 1000)
  }
}
