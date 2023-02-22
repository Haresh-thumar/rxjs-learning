import { UtilityOperatorService } from './../../services/utility-operator.service';
import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, ObservableInput, of, range, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  // subscription
  sub1!: Subscription;
  sub2!: Subscription;
  sub3!: Subscription;

  // messages
  msg1: any;
  msg2: any;

  constructor(private _designUtility: UtilityOperatorService) { }

  ngOnInit() {

    const broadCastVideos = interval(1000);
    /*-----------------------------------------------------------
                            Example-1
    -----------------------------------------------------------*/
    this.sub1 = broadCastVideos.pipe(map(data => 'Video' + ' ' + data))
      .subscribe(res => {
        this.msg1 = res;
      });
    setTimeout(() => {
      this.sub1.unsubscribe();
    }, 10000);

    /*-----------------------------------------------------------
                            Example-2
    -----------------------------------------------------------*/
    this.sub2 = broadCastVideos.pipe(map(data => data * 10))
      .subscribe(res => {
        this.msg2 = res;
      });
    setTimeout(() => {
      this.sub2.unsubscribe();
    }, 10000);

    /*-----------------------------------------------------------
                            Example-3
    -----------------------------------------------------------*/
    const member = from([
      { id: 1, name: 'Davies', age: 25 },
      { id: 2, name: 'Evans', age: 28 },
      { id: 3, name: 'Thomas', age: 15 },
      { id: 4, name: 'Adams', age: 22 },
      { id: 5, name: 'Walker', age: 19 },
      { id: 6, name: 'Martin', age: 16 },
      { id: 7, name: 'Lewis', age: 27 },
      { id: 8, name: 'Smith', age: 29 },
    ]);

    member.pipe(map(data => data.name)).subscribe((res: any) => {
      this._designUtility.printLi(res, 'elContainer');
    });

    /*-----------------------------------------------------------
                            Example-4
    -----------------------------------------------------------*/
    const member2 = from(['Davies', 'Evans', 'Thomas', 'Adams', 'Walker', 'Martin', 'Lewis', 'Smith']);
    const nameUppar$ = member2.pipe(map(data => {
      return data.toUpperCase();
    }));

    nameUppar$.subscribe((res: any) => {
      this._designUtility.printLi(res, 'elContainer2');
    });

    /*-----------------------------------------------------------
                           Example-4
    -----------------------------------------------------------*/
    const member3 = fromEvent<KeyboardEvent>(document.getElementById('inputBox') as HTMLInputElement, 'keyup');
    const pointerEvents = member3.pipe(map((evt: any) => {
      return (evt.target as HTMLInputElement).value;
    }));

    pointerEvents.subscribe((res: any) => {
      console.log(res);
    });

    /*-----------------------------------------------------------
                           Example-5
    -----------------------------------------------------------*/
    this._designUtility.getData().pipe(map(data => {
      return data.map(user => user.name);
    })).subscribe(res => {
      // console.log(res);
    });

    /*-----------------------------------------------------------
                          Example-6
    -----------------------------------------------------------*/
    let obsOf = from(['Davies', 'Evans', 'Thomas', 'Adams', 'Walker', 'Martin', 'Lewis', 'Smith']);
    obsOf.pipe(map(name => of(name.toUpperCase()))).subscribe(obs => {
      obs.subscribe(val => console.log(val));
    });




    /**************************************************************************************************************************************
                                            Higher Order Observable (observable of observable)
    **************************************************************************************************************************************/
    /*-----------------------------------------------------------
                            Example-1
    -----------------------------------------------------------*/
    const rangesObs = of(1, 2, 3).pipe(map(data => range(data, 3)));
    rangesObs.subscribe(range$ => range$.subscribe(val => {
      console.log(val);
    }
    ));

    /*-----------------------------------------------------------
                            Example-2
    -----------------------------------------------------------*/
    const rangesObs2 = interval(1000).pipe(map(v => timer(v * 1000)));
    this.sub3 = rangesObs2.subscribe(timer$ => timer$.subscribe(val => {
      setTimeout(() => {
        this.sub3.unsubscribe();
      }, 5000);
      console.log(val);
    }
    ));



  }




}


