import { UtilityOperatorService } from './../../services/utility-operator.service';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomObservableComponent implements OnInit, OnDestroy {

  techStatus: any;
  techStatus2: any;
  names: any;
  nameStatus: any;
  sub2!: Subscription;

  constructor(private _designUtility: UtilityOperatorService) { }

  ngOnInit(): void {

    /*--------------------------------------------------------------------------------
                              Example-1 (custom Observable)
    --------------------------------------------------------------------------------*/
    const cusObs1 = new Observable((observer: any) => {
      setTimeout(() => {
        observer.next('Angular');
      }, 1000);
      setTimeout(() => {
        observer.next('Typescript');
      }, 2000);
      setTimeout(() => {
        observer.next('Html & Css');
        observer.complete();
      }, 3000);
      setTimeout(() => {
        observer.next('Javascript');
        // observer.error(new Error('Limit Exceed'));
      }, 4000);
      setTimeout(() => {
        observer.next('Jquery');
        // observer.complete();
      }, 5000);
    });

    cusObs1.subscribe({
      next: (data) => {
        // console.log(data);
        this._designUtility.printLi(data, 'elContainer');
      },
      error: (err) => {
        this.techStatus = 'error';
      },
      complete: () => {
        this.techStatus = 'completed';
      },
    });


    /*--------------------------------------------------------------------------------
                              Example-2 (custom Interval)
    --------------------------------------------------------------------------------*/
    const arr2 = ['Angular', 'Javascript', 'Html', 'Css', 'Typescript'];
    const cusObs2 = new Observable((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(arr2[count]);
        if (count >= 2) {
          observer.error('Error Emit');
        }
        if (count >= 5) {
          observer.complete();
        }
        count++;
      }, 1000);
    });

    this.sub2 = cusObs2.subscribe({
      next: (data: any) => {
        // console.log(data);
        this._designUtility.printLi(data, 'elContainer2');
      },
      error: (err) => {
        this.techStatus2 = 'error';
      },
      complete: () => {
        this.techStatus2 = 'completed';
      },
    });


    /*--------------------------------------------------------------------------------
                              Example-2 (custom Interval)
    --------------------------------------------------------------------------------*/
    const arr3 = ['anup', 'shekhar', 'sharma', 'Haresh', 'John', 'Alex', 'Robert'];
    const cusObs3 = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(arr3[count]);
        if (count >= 3) {
          observer.error('Error Emit');
        }
        if (count >= 6) {
          observer.complete();
        }
        count++;
      }, 1000);
    });

    cusObs3.subscribe({
      next: (data: any) => {
        this.names = data;
      },
      error: (err) => {
        this.nameStatus = 'error';
      },
      complete: () => {
        this.nameStatus = 'completed';
      },
    });

  }



  ngOnDestroy(): void {
    this.sub2.unsubscribe();
  }










}
