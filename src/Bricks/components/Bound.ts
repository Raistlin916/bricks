import Component from 'engine/Component'

export default class Bound extends Component {
  public width: number = 0;
  public height: number = 0;
  constructor(w: number, h: number) {
    super()
    this.width = w
    this.height = h
  }
}
