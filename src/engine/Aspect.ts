import Component from './Component'

export default class Aspect {

  private allTypes = [];

  constructor(...components) {
    this.allTypes = this.allTypes.concat(components)
  }

  public static all(...components): Aspect {
    return new Aspect(...components)
  }

  public getAllTypes() {
    return this.allTypes
  }
}
