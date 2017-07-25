import System from 'engine/System'
import Entity from 'engine/Entity'
import ComponentMapper from 'engine/ComponentMapper'
import Aspect from 'engine/Aspect'
import Position from '../components/Position'
import Physical from '../components/Physical'
import Bound from '../components/Bound'
import WallSensor from '../components/WallSensor'
import RenderSystem from './RenderSystem'

export default class WallSensorSystem extends System {
  private positionMapper: ComponentMapper<Position>;
  private physicalMapper: ComponentMapper<Physical>;
  private boundMapper: ComponentMapper<Bound>;
  private renderSystem: RenderSystem;

  constructor() {
    super(Aspect.all(WallSensor, Bound));
  }

  process(entity: Entity, delta: number): void {
    const position = this.positionMapper.get(entity);
    const physical = this.physicalMapper.get(entity);
    const bound = this.boundMapper.get(entity);
    const screenSize = this.renderSystem.getSize()

    if (position.x - bound.x2 < 0) {
      physical.vx = -physical.vx
    }
    if (position.x + bound.x2 > screenSize.x2) {
      physical.vx = -physical.vx
    }
    if (position.y - bound.y2 < 0) {
      physical.vy = -physical.vy
    }
    if (position.y + bound.y2 > screenSize.y2) {
      physical.vy = -physical.vy
    }
  }
}
