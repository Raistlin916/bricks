import System from 'engine/System'
import Entity from 'engine/Entity'
import ComponentMapper from 'engine/ComponentMapper'
import Aspect from 'engine/Aspect'
import Position from '../components/Position'
import Physical from '../components/Physical'
import WallSensor from '../components/WallSensor'

export default class WallSensorSystem extends System {
  private positionMapper: ComponentMapper<Position>;
  private physicalMapper: ComponentMapper<Physical>;

  constructor() {
    super(Aspect.all(WallSensor));
  }

  process(entity: Entity, delta: number): void {
    const position = this.positionMapper.get(entity);
    const physical = this.physicalMapper.get(entity);

    if (position.x < 0) {
      physical.vx = -physical.vx
    }
    if (position.x > 300) {
      physical.vx = -physical.vx
    }
    if (position.y < 0) {
      physical.vy = -physical.vy
    }
    if (position.y > 300) {
      physical.vy = -physical.vy
    }
  }
}
