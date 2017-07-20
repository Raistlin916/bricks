import World from 'engine/World'
import Component, { Components } from 'engine/Component'
import PhysicalSystem from './systems/PhysicalSystem'
import RenderSystem from './systems/RenderSystem'
import WallSensorSystem from './systems/WallSensorSystem'
import PlayerControlSystem from './systems/PlayerControlSystem'
import entityFactory from './entityFactory'
import * as com from './components/index'

const components: Components = {...com};

export default class Bricks {
  private world: World;

  constructor() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 500
    canvas.height = 500
    document.body.appendChild(canvas);

    this.world = new World();
    this.world.importComponents(components);
    this.world
      .addSystem(new PlayerControlSystem())
      .addSystem(new WallSensorSystem())
      .addSystem(new PhysicalSystem())
      .addSystem(new RenderSystem(ctx));


    entityFactory.createBrick(this.world, 10, 10);
    entityFactory.createBall(this.world, 10, 10);
    entityFactory.createBoard(this.world, 50, 200);

    setInterval(() => {
      this.world.process(0.016);
    }, 16);
  }
}
