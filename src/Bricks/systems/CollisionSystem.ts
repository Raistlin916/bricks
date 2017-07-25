import System from 'engine/System'
import Entity from 'engine/Entity'
import ComponentMapper from 'engine/ComponentMapper'
import Aspect from 'engine/Aspect'
import { Position, Physical, Charge, Bound } from '../components/index'

export default class CollisionSystem extends System {
  private positionMapper: ComponentMapper<Position>;
  private physicalMapper: ComponentMapper<Physical>;
  private boundMapper: ComponentMapper<Bound>;

  constructor() {
    super(Aspect.all(Charge));
  }

  process(entity: Entity, delta: number): void {
    const physical = this.physicalMapper.get(entity)
    const position = this.positionMapper.get(entity)

    this.teamManager.getTeam('board').forEach(target => {
      if (this.overlap(target, entity)) {
        const targetPosition = this.positionMapper.get(target)
        const targetPhysical = this.physicalMapper.get(target)
        physical.vx = physical.vx + targetPhysical.vx / 10
        physical.vy = -physical.vy
      }
    })

    this.teamManager.getTeam('brick').forEach(target => {
      if (this.overlap(target, entity)) {
        this.entityManager.remove(target)
      }
    })
  }

  overlap(a, b): boolean {
    const ap = this.positionMapper.get(a);
    const bp = this.positionMapper.get(b);
    const ab = this.boundMapper.get(a);
    const bb = this.boundMapper.get(b);

    if (ap && bp && ab && bb) {
      return (ap.x + ab.x1 <= bp.x + bb.x2) &&
           (bp.x + bb.x1 <= ap.x + ab.x2) &&
           (ap.y + ab.y1 <= bp.y + bb.y2) &&
           (bp.y + bb.y1 <= ap.y + ab.y2);
    }
    return false;
  }
}
