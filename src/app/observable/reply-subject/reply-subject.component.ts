import { Component, OnInit } from '@angular/core';
import { ReplaySubject, Subscription, interval } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-reply-subject',
  templateUrl: './reply-subject.component.html',
  styleUrls: ['./reply-subject.component.scss']
})
export class ReplySubjectComponent implements OnInit {


  constructor(private _du: DesignUtilityService) { console.clear(); }

  ngOnInit(): void {
    // this.Example1();
    this._du.videoEmit.subscribe(res => {
      this.userList1.push(res);
    });
  }

  /*-------------------------------------------------------------------------------------------
                                            Example-1
  -------------------------------------------------------------------------------------------*/
  // list of User Data
  userList1: any[] = ['Angular 1', 'Angular 2'];
  userList2: any[] = [];
  userList3: any[] = [];
  onVideoAdd(video: any) {
    this._du.videoEmit.next(video);
    this._du.videoEmit2.next(video);
  }
  // Subscribe-Modes
  subscribeMode2: boolean = false;
  subscribeMode3: boolean = false;
  // subscription
  subscription2?: Subscription;
  subscription3?: Subscription;
  // Toggle Properties
  methodInterval: boolean = false;
  // subscription for toggle method
  unSubscribeInterval?: Subscription;
  toggleMethod() {
    const broadCastVideo = interval(1000);
    if (!this.methodInterval) {
      this.unSubscribeInterval = broadCastVideo.subscribe(res => {
        this._du.videoEmit.next('video' + res);
        this._du.videoEmit2.next('video' + res);
      });
    }
    else {
      this.unSubscribeInterval?.unsubscribe();
    }
    this.methodInterval = !this.methodInterval;
  }
  // user2 subscribe button
  user2Subscribe(): void {
    if (this.subscription2) {
      this.subscription2.unsubscribe();
    } else {
      this.subscription2 = this._du.videoEmit.subscribe(res => this.userList2.push(res));
    }
    this.subscribeMode2 = !this.subscribeMode2;
  }
  // user2 subscribe button
  user3Subscribe() {
    if (this.subscription3) {
      this.subscription3.unsubscribe();
    } else {
      this.subscription3 = this._du.videoEmit2.subscribe(res => this.userList3.push(res));
    }
    this.subscribeMode3 = !this.subscribeMode3;
  }




  /*-------------------------------------------------------------------------------------------
                                            Example-2
  -------------------------------------------------------------------------------------------*/
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
