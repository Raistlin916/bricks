import System from 'engine/System'
import Entity from 'engine/Entity'
import ComponentMapper from 'engine/ComponentMapper'
import Position from '../components/Position'

export default class RenderSystem extends System {

  private positionMapper: ComponentMapper<Position>;
  private ctx: CanvasRenderingContext2D;

  constructor(ctx: CanvasRenderingContext2D) {
    super()
    this.ctx = ctx;
  }

  process(entity: Entity, delta: number): void {
    const position = this.positionMapper.get(entity);
  }
}
