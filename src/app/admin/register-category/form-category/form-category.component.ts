import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Category} from "../../core/model/category.model";

@Component({
  selector: 'utf-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.scss']
})
export class FormCategoryComponent implements OnInit {
  public icons: string[] = [];

  public category: string;
  public iconSelected: string;

  @Output() newCategoryEmitter: EventEmitter<Category> = new EventEmitter<Category>();

  constructor() {
    this.icons.push("flash_on");
    this.icons.push("format_paint");
    this.icons.push("local_florist");
    this.icons.push("opacity");
    this.icons.push("event_seat");
    this.icons.push("account_balance");
    this.icons.push("device_hub");
    this.icons.push("computer");
    this.icons.push("call");
  }

  ngOnInit() {

  }

  onClick() {
    let category = new Category(this.category, this.iconSelected)
    let categories = JSON.parse(localStorage.getItem('categories'));
    if (!categories) {
      categories = [];
    }
    categories.push(category);
    localStorage.setItem('categories', JSON.stringify(categories));
    alert("A categoria foi salva com sucesso!");
    this.newCategoryEmitter.emit(category);
  }

}
