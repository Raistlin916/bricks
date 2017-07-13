import System from './System'

export default class World {
  private systems: Array<System>;
  public addSystem(system: System) {
    return this.systems.push(system);
  }
}
