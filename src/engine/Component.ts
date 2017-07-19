
export default abstract class Component {
  public get className(): string {
    return this.constructor.name
  }
}
