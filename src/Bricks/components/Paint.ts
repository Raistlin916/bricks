import Component from 'engine/Component'

export default class Paint extends Component {
  private type: string;
  constructor(type: string) {
    super()
    this.type = type
  }
}
