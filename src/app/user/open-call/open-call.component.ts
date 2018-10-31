import {Component, OnInit} from '@angular/core';
import {Category} from "../../core";
import {Call} from "../../core/model/call.model";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'utf-open-call',
  templateUrl: './open-call.component.html',
  styleUrls: ['./open-call.component.scss']
})
export class OpenCallComponent implements OnInit {

  call: Call = new Call();

  categories: Category[] = [];
  calls: Call[] = [];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
      let callId = params['id'];
      this.call = this.getCallById(callId);
    });

    this.categories = JSON.parse(localStorage.getItem('categories'));


  }

  onClick() {
    this.calls = JSON.parse(localStorage.getItem('calls'));
    if (!this.calls) {
      this.calls = [];
    }
    this.calls.push(this.call);
    localStorage.setItem('calls', JSON.stringify(this.calls));
    alert("O chamado foi salvo com sucesso!");
    this.call = new Call();
  }

  getCallById(id: string): Call {
    this.calls = JSON.parse(localStorage.getItem('calls'));

    for (let c of this.calls) {
      if (c.code == id) {
        return c;
      }
    }

    return new Call();
  }

}
