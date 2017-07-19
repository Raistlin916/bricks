import Component from 'engine/Component'

export default class Physical extends Component {
  public vx: number = 0;
  public vy: number = 0;
  constructor(vx, vy) {
    super()
    this.vx = vx;
    this.vy = vy;
  }
}
