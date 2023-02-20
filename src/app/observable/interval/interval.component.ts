import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { UtilityOperatorService } from 'src/app/services/utility-operator.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit, OnDestroy {

  obsMsg: any;
  obsMsg2: any;

  /*--- Create Subscription ---*/
  videoSubscription!: Subscription;
  videoSubscription2!: Subscription;

  constructor(private _UlUtility: UtilityOperatorService) { }

  ngOnInit(): void {
    /*-------------------------------------------------------------
                              Interval
    --------------------------------------------------------------*/
    /*----- Create Observable Stream Using Interval -----*/
    /*-- interval(interval) argument --*/
    const broadCastInterval = interval(1000);

    /*----- Subscribe Observable Stream & Get Response ------*/
    this.videoSubscription = broadCastInterval.subscribe(res => {
      this.obsMsg = 'Video ' + res;
      console.log(this.obsMsg);
      this._UlUtility.printLi(this.obsMsg, 'userVideo1');
      this._UlUtility.printLi(this.obsMsg, 'userVideo2');
      this._UlUtility.printLi(this.obsMsg, 'userVideo3');

      /*---- custom unsubscribe Interval(observable stream) ----*/
      if (res >= 7) {
        this.videoSubscription.unsubscribe();
      }
    });



    /*-------------------------------------------------------------
                                Timer
    --------------------------------------------------------------*/
    /*----- Create Observable Stream Using Timer -----*/
    /*-- timer(delay, interval) argument --*/
    const broadCastTimer = timer(5000, 1000);

    /*----- Subscribe Observable Stream & Get Response ------*/
    this.videoSubscription2 = broadCastTimer.subscribe(res => {
      this.obsMsg2 = 'Video ' + res;
      console.log(this.obsMsg2);
      this._UlUtility.printLi(this.obsMsg2, 'userVideo4');
      this._UlUtility.printLi(this.obsMsg2, 'userVideo5');
      this._UlUtility.printLi(this.obsMsg2, 'userVideo6');

      /*---- custom unsubscribe Timer (observable stream) ----*/
      if (res >= 5) {
        this.videoSubscription2.unsubscribe();
      }
    });
  }





  ngOnDestroy(): void {
    /*---- component destroy After unsubscribe Interval(observable stream) ----*/
    this.videoSubscription.unsubscribe();

    /*---- component destroy After unsubscribe Timer(observable stream) ----*/
    this.videoSubscription.unsubscribe();
  }

}
