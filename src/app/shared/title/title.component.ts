import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'utf-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input()
  public title: string = '';

  constructor() {
  }

  ngOnInit() {
  }

}
