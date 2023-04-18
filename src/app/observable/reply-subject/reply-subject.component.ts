import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-reply-subject',
  templateUrl: './reply-subject.component.html',
  styleUrls: ['./reply-subject.component.scss']
})
export class ReplySubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.Example1();
  }

  /*-------------------- Example-1 ------------------*/
  replaysubject$ = new ReplaySubject();
  Example1() {
    this.replaysubject$.next("1");
    this.replaysubject$.next("2");

    this.replaysubject$.subscribe({
      next: (val) => console.log("Sub1 " + val),
      error: (err) => console.error("Sub1 " + err),
      complete: () => console.log("Sub1 Complete")
    });

    this.replaysubject$.next("3");
    this.replaysubject$.next("4");

    this.replaysubject$.subscribe(val => {
      console.log("sub2 " + val);
    });

    this.replaysubject$.next("5");
    this.replaysubject$.complete();

    this.replaysubject$.error("err");
    this.replaysubject$.next("6");

    this.replaysubject$.subscribe({
      next: (val) => console.log("sub3 " + val),
      error: (err) => console.error("sub3 " + err),
      complete: () => console.log("Complete")
    });

    
  }

}
