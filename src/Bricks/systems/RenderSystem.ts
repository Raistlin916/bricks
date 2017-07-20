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

  public onBegin(): void {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  public process(entity: Entity, delta: number): void {
    const { ctx } = this;

    const position = this.positionMapper.get(entity);
    const paint = this.paintMapper.get(entity);

    ctx.save();
    ctx.translate(position.x, position.y);

    if (paint.type === 'brick') {
      ctx.fillStyle = 'red';
      ctx.fillRect(0, 0, 20, 10);
    } else if (paint.type === 'ball') {
      ctx.fillStyle = 'grey';
      ctx.beginPath();
      ctx.arc(0, 0, 5, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    } else if (paint.type === 'board') {
      ctx.fillStyle = 'blue';
      ctx.fillRect(0, 0, 20, 10);
    }
    ctx.restore();
  }
}
