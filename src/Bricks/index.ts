import World from 'engine/World'
import Component, { Components } from 'engine/Component'
import PhysicalSystem from './systems/PhysicalSystem'
import RenderSystem from './systems/RenderSystem'
import WallSensorSystem from './systems/WallSensorSystem'
import PlayerControlSystem from './systems/PlayerControlSystem'
import CollisionSystem from './systems/CollisionSystem'
import entityFactory from './entityFactory'
import * as com from './components/index'


const components: Components = {...com};

export default class Bricks {
  private world: World;

  constructor() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 200
    canvas.height = 200
    document.body.appendChild(canvas);

    this.world = new World();
    this.world.importComponents(components);
    this.world
      .addSystem(new PlayerControlSystem())
      .addSystem(new WallSensorSystem())
      .addSystem(new CollisionSystem())
      .addSystem(new PhysicalSystem())
      .addSystem(new RenderSystem(ctx));

    const teamManager = this.world.getTeamManager();

    const brick = entityFactory.createBrick(this.world, 10, 10);
    const ball = entityFactory.createBall(this.world, 10, 10);
    const board = entityFactory.createBoard(this.world, 70, 100);

    teamManager.addTeam('brick', brick);
    teamManager.addTeam('ball', ball);
    teamManager.addTeam('board', board);

    setInterval(() => {
      this.world.process(0.016);
    }, 16);
  }
}
