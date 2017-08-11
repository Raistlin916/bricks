import System from 'engine/System'
import Entity from 'engine/Entity'
import ComponentMapper from 'engine/ComponentMapper'
import Aspect from 'engine/Aspect'
import Position from '../components/Position'
import Paint from '../components/Paint'
import Bound from '../components/Bound'

export default class RenderSystem extends System {

  private positionMapper: ComponentMapper<Position>;
  private paintMapper: ComponentMapper<Paint>;
  private boundMapper: ComponentMapper<Bound>;

  private ctx: CanvasRenderingContext2D;
  private width: number;
  private height: number;
  private size: Bound;

  constructor(ctx: CanvasRenderingContext2D) {
    super(Aspect.all(Position, Paint))
    this.ctx = ctx;
    this.width = this.ctx.canvas.width;
    this.height = this.ctx.canvas.height;
    this.size = new Bound(this.width, this.height)
  }

  public getSize(): Bound {
    return this.size;
  }

  public onBegin(): void {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.fillStyle = '#eee'
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  public process(entity: Entity, delta: number): void {
    const { ctx } = this;

    const position = this.positionMapper.get(entity);
    const paint = this.paintMapper.get(entity);
    const bound = this.boundMapper.get(entity);

    ctx.save();
    ctx.translate(position.x, position.y);

    if (paint.type === 'brick') {
      ctx.fillStyle = 'red';
      ctx.fillRect(0, 0, bound.x2, bound.y2);
    } else if (paint.type === 'ball') {
      ctx.fillStyle = 'grey';
      ctx.beginPath();
      ctx.arc(0, 0, bound.x2, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    } else if (paint.type === 'board') {
      ctx.fillStyle = 'blue';
      ctx.fillRect(bound.x1, bound.y1, bound.x2, bound.y2);
      ctx.beginPath();
      ctx.arc(bound.x1, bound.centerY(), bound.centerY(), 0, Math.PI * 2);
      ctx.arc(bound.x2, bound.centerY(), bound.centerY(), 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }
}
