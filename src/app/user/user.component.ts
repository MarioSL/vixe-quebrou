import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'utf-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public disabled: string;
  public routeNewCall = '/u/novo-chamado';

  constructor() {
  }

  ngOnInit() {
  }

}
