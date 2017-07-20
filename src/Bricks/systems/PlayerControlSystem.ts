import System from 'engine/System'
import Entity from 'engine/Entity'
import ComponentMapper from 'engine/ComponentMapper'
import Aspect from 'engine/Aspect'
import Position from '../components/Position'
import Physical from '../components/Physical'
import PlayerControlled from '../components/PlayerControlled'

export default class PlayerControlSystem extends System {
  private positionMapper: ComponentMapper<Position>;
  private physicalMapper: ComponentMapper<Physical>;
  private keyboard: {[key: string]: boolean};

  constructor() {
    super(Aspect.all(PlayerControlled));

    this.keyboard = {
      left: false,
      right: false
    }
    document.body.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        this.keyboard.left = true
      } else if (e.key === 'ArrowRight') {
        this.keyboard.right = true
      }
    })
    document.body.addEventListener('keyup', (e) => {
      if (e.key === 'ArrowLeft') {
        this.keyboard.left = false
      } else if (e.key === 'ArrowRight') {
        this.keyboard.right = false
      }
    })
  }

  process(entity: Entity, delta: number): void {
    const position = this.positionMapper.get(entity);
    const physical = this.physicalMapper.get(entity);

    physical.vx = this.keyboard.left ? -150 :
      this.keyboard.right ? 150 :
      0
  }
}
