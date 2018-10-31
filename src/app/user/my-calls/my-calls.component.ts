import {Component, OnInit} from '@angular/core';
import {Call} from "../../core/model/call.model";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'utf-my-calls',
  templateUrl: './my-calls.component.html',
  styleUrls: ['./my-calls.component.scss']
})
export class MyCallsComponent implements OnInit {

  public calls: Call[] = [];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
      let callId = params['id'];
      let index = this.removeCallById(callId);
      if (index != -1) {
        alert("Chamado removido com sucesso!");
      }
    });

    this.calls = JSON.parse(localStorage.getItem('calls'));
  }

  removeCallById(id: string): number {
    this.calls = JSON.parse(localStorage.getItem('calls'));
    let index: number = -1;
    for (let i = 0; i < this.calls.length; i++) {
      if (this.calls[i].code == id) {
        index = i;
      }
    }
    if (index != -1) {
      this.calls.splice(index, 1);
      localStorage.setItem('calls', JSON.stringify(this.calls))
    }
    return index;
  }

}
