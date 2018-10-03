import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from "../../icon.model";

@Component({
  selector: 'utf-item-category',
  templateUrl: './item-category.component.html',
  styleUrls: ['./item-category.component.scss']
})
export class ItemCategoryComponent implements OnInit {
  @Input('category')
  public text: string;
  @Input()
  public icon: string;

  @Output()
  deleteEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onDelete() {
    this.deleteEmitter.emit(this.text);
  }

}
