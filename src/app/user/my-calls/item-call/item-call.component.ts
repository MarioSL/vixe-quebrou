import {Component, Input, OnInit} from '@angular/core';
import {Call} from "../../../core/model/call.model";
import {Router} from "@angular/router";

@Component({
  selector: 'utf-item-call',
  templateUrl: './item-call.component.html',
  styleUrls: ['./item-call.component.scss']
})
export class ItemCallComponent implements OnInit {

  @Input()
  public call: Call;

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  onEdit(code: string) {
    this.router.navigate(['/u/edita-chamado', code]);
  }

  onDelete(code: string){
    this.router.navigate(['/u/remove-chamado', code]);
  }

}
