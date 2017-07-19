import System from 'engine/System'
import Entity from 'engine/Entity'
import ComponentMapper from 'engine/ComponentMapper'
import Aspect from 'engine/Aspect'
import Position from '../components/Position'
import Paint from '../components/Paint'

export default class RenderSystem extends System {

  private positionMapper: ComponentMapper<Position>;
  private paintMapper: ComponentMapper<Paint>;

  private ctx: CanvasRenderingContext2D;
  private width: number;
  private height: number;

  constructor(ctx: CanvasRenderingContext2D) {
    super(Aspect.all(Position, Paint))
    this.ctx = ctx;
    this.width = this.ctx.canvas.width;
    this.height = this.ctx.canvas.height;
  }

  process(entity: Entity, delta: number): void {
    const { ctx } = this;
    ctx.clearRect(0, 0, this.width, this.height);
    const position = this.positionMapper.get(entity);
    const paint = this.paintMapper.get(entity);

    ctx.save();
    if (paint.type === 'brick') {
      ctx.translate(position.x, position.y);
      ctx.fillStyle = 'red';
      ctx.fillRect(0, 0, 20, 10);
    }
    ctx.restore();
  }
}
