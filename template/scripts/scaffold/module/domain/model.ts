export default interface ScaffoldModel {
  id: number;
  value: string;
}

export class ScaffoldModelValues implements ScaffoldModel {
  id: number;
  value: string;
  /**
   *
   */
  constructor({id, value}: ScaffoldModel) {
    this.id = id;
    this.value = value;
  }
}
