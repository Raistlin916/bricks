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
    const deltaX = delta * physical.vx
    const deltaY = delta * physical.vy

    if (position.x + bound.x1 + deltaX < 0) {
      physical.vx = -physical.vx
    }
    if (position.x + bound.x2 + deltaX > screenSize.x2) {
      physical.vx = -physical.vx
    }
    if (position.y + bound.y1 + deltaY < 0) {
      physical.vy = -physical.vy
    }
    if (position.y + bound.y2 + deltaY > screenSize.y2) {
      physical.vy = -physical.vy
    }
  }
}
