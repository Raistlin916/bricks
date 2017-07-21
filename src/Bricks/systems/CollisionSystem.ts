import System from 'engine/System'
import Entity from 'engine/Entity'
import ComponentMapper from 'engine/ComponentMapper'
import Aspect from 'engine/Aspect'
import { Position, Physical, Dash } from '../components/index'

export default class CollisionSystem extends System {
  private positionMapper: ComponentMapper<Position>;
  private physicalMapper: ComponentMapper<Physical>;

  constructor() {
    super(Aspect.all(Dash));
  }

  process(entity: Entity, delta: number): void {

  }
}
