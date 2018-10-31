import {Category} from "./category.model";

export class Call {
  public date: Date;

  constructor(public category?: Category,
              public title?: string,
              public code?: string,
              public description?: string) {
    this.date = new Date();
  }
}
