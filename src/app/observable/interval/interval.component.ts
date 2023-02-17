import { Component, OnInit } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { UtilityOperatorService } from 'src/app/services/utility-operator.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  obsMsg: any;

  /*--- Create Subscription ---*/
  videoSubscription!: Subscription;

  constructor(private _UlUtility: UtilityOperatorService) { }

  ngOnInit(): void {
    /*-------------------------------------------------------------
                              Interval
    --------------------------------------------------------------*/
    /*----- Create Observable Stream Using Interval -----*/
    /*-- interval(interval) argument --*/
    // const broadCastInterval = interval(1000);

    // /*----- Subscribe Observable Stream & Get Response ------*/
    // this.videoSubscription = broadCastInterval.subscribe(res => {
    //   this.obsMsg = 'Video ' + res;
    //   console.log(this.obsMsg);
    //   this._UlUtility.printLi(this.obsMsg, 'userVideo1');
    //   this._UlUtility.printLi(this.obsMsg, 'userVideo2');
    //   this._UlUtility.printLi(this.obsMsg, 'userVideo3');

    //   /*----- Observable Stream UnSubscribe -----*/
    //   if (res >= 5) {
    //     this.videoSubscription.unsubscribe();
    //   }
    // });

    /*-------------------------------------------------------------
                                Timer
    --------------------------------------------------------------*/
    /*----- Create Observable Stream Using Timer -----*/
    /*-- timer(delay, interval) argument --*/
    const broadCastTimer = timer(5000, 1000);

    /*----- Subscribe Observable Stream & Get Response ------*/
    this.videoSubscription = broadCastTimer.subscribe(res => {
      this.obsMsg = 'Video ' + res;
      console.log(this.obsMsg);
      this._UlUtility.printLi(this.obsMsg, 'userVideo1');
      this._UlUtility.printLi(this.obsMsg, 'userVideo2');
      this._UlUtility.printLi(this.obsMsg, 'userVideo3');

      /*----- Observable Stream UnSubscribe -----*/
      if (res >= 5) {
        this.videoSubscription.unsubscribe();
      }
    });

  }

}
