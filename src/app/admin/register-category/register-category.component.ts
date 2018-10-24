import {Category} from "../../core/model/category.model";
import {Component, OnInit} from "@angular/core";

@Component({
  selector: "utf-register-category",
  templateUrl: "./register-category.component.html",
  styleUrls: ["./register-category.component.scss"]
})
export class RegisterCategoryComponent implements OnInit {

  public categories: Category[] = [];

  constructor() {

  }

  ngOnInit() {
    this.categories = JSON.parse(localStorage['categories']);
  }

  onAddCategory(data: Category) {
    this.categories.push(data);
    console.log("novo");
    console.log(this.categories);
  }

  onDeleteItem(data: string) {
    console.log("Data " + data);
    this.categories = JSON.parse(localStorage['categories']);
    let filtered: Category[] = this.categories.filter((value) => {
      return value.categoryName.valueOf() == data.valueOf();
    });
    console.log(this.categories);
    console.log('filtrado')
    console.log(filtered);
    const i = this.categories.indexOf(filtered[0]);
    console.log(i);
    if (i != -1) {
      this.categories.splice(i, 1);
      localStorage.setItem('categories', JSON.stringify(this.categories));
    }
  }
}
