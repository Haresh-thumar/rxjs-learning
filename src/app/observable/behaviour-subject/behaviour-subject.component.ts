import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behaviour-subject',
  templateUrl: './behaviour-subject.component.html',
  styleUrls: ['./behaviour-subject.component.scss']
})
export class BehaviourSubjectComponent implements OnInit {

  subject$ = new BehaviorSubject("0");

  constructor() { }

  ngOnInit(): void {
    this.replyubjectObs();
  }

  /*--------- Behaviour-Subject --------*/
  replyubjectObs(){
    this.subject$.subscribe(val => {
      console.log("Sub1 " + val);
    });
    this.subject$.next("1");
    this.subject$.next("2");
    this.subject$.subscribe(val => {
      console.log("sub2 " + val);
    });
    this.subject$.next("3");
    this.subject$.complete();
  }


}
